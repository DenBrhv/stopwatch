# Stopwatch App

A beautiful and modern stopwatch application built with Next.js, React, TypeScript, and Tailwind CSS. Features a sleek gradient design with full stopwatch functionality including lap tracking.

🌐 **Live Demo**: [https://stopwatch-eta-smoky-45.vercel.app/](https://stopwatch-eta-smoky-45.vercel.app/)

## Features

- ⏱️ **Precise Timing**: Accurate stopwatch with millisecond precision (displayed as centiseconds)
- 🎯 **Lap Functionality**: Record and track multiple laps with individual lap times
- 🎨 **Modern UI**: Beautiful gradient design with glassmorphism effects
- 📱 **Responsive**: Works seamlessly on desktop and mobile devices
- ⚡ **Fast Performance**: Built with Next.js for optimal performance

## Technologies Used

- **Next.js 16** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed on your system

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DenBrhv/stopwatch.git
cd stopwatch
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Build for Production

```bash
npm run build
npm start
```

## Usage

- **Start**: Click the "Start" button to begin the stopwatch
- **Stop**: Click the "Stop" button to pause the stopwatch
- **Lap**: While running, click "Lap" to record a lap time
- **Reset**: Click "Reset" to clear the stopwatch and all recorded laps

## Project Structure

```
stopwatch/
├── app/
│   ├── globals.css      # Global styles with Tailwind
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main stopwatch component
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## License

ISC
