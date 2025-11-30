'use client';

import { useState, useEffect, useRef } from 'react';

interface Lap {
  id: number;
  time: number;
  lapTime: number;
}

export default function Home() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<Lap[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const lastLapTimeRef = useRef<number>(0);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const formatTime = (milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((milliseconds % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    if (!isRunning) {
      startTimeRef.current = Date.now() - time;
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    startTimeRef.current = 0;
    lastLapTimeRef.current = 0;
  };

  const handleLap = () => {
    if (isRunning || time > 0) {
      const lapTime = time - lastLapTimeRef.current;
      const newLap: Lap = {
        id: laps.length + 1,
        time: time,
        lapTime: lapTime,
      };
      setLaps([...laps, newLap]);
      lastLapTimeRef.current = time;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Stopwatch Display */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-6 border border-white/20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Stopwatch</h1>
            <div className="text-7xl md:text-8xl font-mono font-bold text-white mb-8 tracking-wider">
              {formatTime(time)}
            </div>
            
            {/* Control Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              {!isRunning ? (
                <button
                  onClick={handleStart}
                  className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Start
                </button>
              ) : (
                <button
                  onClick={handleStop}
                  className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Stop
                </button>
              )}
              
              <button
                onClick={handleLap}
                disabled={!isRunning && time === 0}
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Lap
              </button>
              
              <button
                onClick={handleReset}
                className="px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Laps Display */}
        {laps.length > 0 && (
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Laps</h2>
            <div className="max-h-96 overflow-y-auto space-y-2">
              {laps.slice().reverse().map((lap) => (
                <div
                  key={lap.id}
                  className="bg-white/5 rounded-lg p-4 flex justify-between items-center border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <span className="text-white font-semibold">Lap {lap.id}</span>
                  <div className="text-right">
                    <div className="text-white font-mono text-lg">
                      {formatTime(lap.time)}
                    </div>
                    <div className="text-gray-300 font-mono text-sm">
                      +{formatTime(lap.lapTime)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

