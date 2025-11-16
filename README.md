# ⏳ Pomodoro Timer

A beautifully designed Pomodoro Timer application built with React, Vite, and Tailwind CSS. Features an elegant glass-morphism UI, smooth animations, and full customization options to help you stay focused and productive.

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.14-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

---

## ✨ Features

### Core Functionality
- **Classic Pomodoro Technique**: Implements the proven 25/5 minute work/break cycle
- **Customizable Intervals**: Adjust work, short break, and long break durations
- **Session Tracking**: Visual progress indicators showing completed sessions (1-4)
- **Long Break Support**: Automatic long break every 4 work sessions

### User Experience
- **Glass Morphism Design**: Modern, translucent UI with backdrop blur effects
- **Dual Theme Support**: Beautiful light and dark mode with smooth transitions
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Polished transitions and micro-interactions throughout
- **Keyboard Shortcuts**: 
  - `Space` - Start/Pause timer
  - `R` - Reset timer

### Visual & Audio
- **Animated Gradient Background**: Subtle, shifting color gradients
- **Circular Progress Indicator**: Visual countdown with gradient colors
- **Audio Alerts**: Optional sound notifications when sessions end
- **Session Progress Dots**: Visual representation of completed Pomodoro cycles

---

## 📸 Screenshots

### Light Mode
![Pomodoro Timer - Light Mode](src/assets/screenshot%20LightMode.jpeg)

### Dark Mode
![Pomodoro Timer - Dark Mode](src/assets/Screenshot%20DarkMode.jpeg)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library for building component-based interface |
| **Vite** | Next-generation frontend build tool |
| **Tailwind CSS** | Utility-first CSS framework |
| **React Icons** | Comprehensive icon library |
| **HTML5 Audio API** | Audio notification system |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnjaleeAmarakoon/pomodoro-timer.git
   ```

2. **Navigate to project directory**
   ```bash
   cd pomodoro-timer
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The optimized build will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🎯 Usage Guide

1. **Starting a Session**: Click the "Start" button or press `Space` to begin your Pomodoro session
2. **Pausing**: Click "Pause" or press `Space` again to pause the timer
3. **Resetting**: Click "Reset" or press `R` to reset the current session
4. **Adjusting Durations**: Use the input fields at the bottom to customize work, break, and long break intervals
5. **Theme Toggle**: Click the sun/moon icon in the top-right to switch between light and dark modes
6. **Sound Control**: Toggle the sound icon to enable or disable audio notifications

---

## 📁 Project Structure

```
pomodoro-timer/
├── public/
│   ├── beep.mp3                 # Audio notification file
│   └── vite.svg                 # Vite logo
├── src/
│   ├── assets/
│   │   ├── react.svg            # React logo
│   │   ├── Screenshot DarkMode.jpeg
│   │   └── screenshot LightMode.jpeg
│   ├── components/
│   │   ├── CircularProgress.jsx # Circular timer progress ring
│   │   ├── Controls.jsx         # Start/Pause/Reset buttons
│   │   ├── Settings.jsx         # Duration input controls
│   │   ├── ThemeToggle.jsx      # Theme switching component
│   │   └── TimerDisplay.jsx     # Timer countdown display
│   ├── App.css                  # Global styles and animations
│   ├── App.jsx                  # Main application component
│   ├── index.css                # Tailwind directives
│   └── main.jsx                 # Application entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.cjs
├── README.md
├── tailwind.config.cjs
└── vite.config.js
```

---

## 🎨 Customization

### Modifying Default Durations

Edit the initial state in `src/App.jsx`:

```javascript
const [workMinutes, setWorkMinutes] = useState(25);
const [breakMinutes, setBreakMinutes] = useState(5);
const [longBreakMinutes, setLongBreakMinutes] = useState(15);
```

### Changing Color Scheme

Modify the Tailwind configuration in `tailwind.config.cjs` or adjust the gradient colors in `src/App.css`.

### Custom Audio Alert

Replace the `public/beep.mp3` file with your preferred notification sound.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Anjalee Amarakoon**

- GitHub: [@AnjaleeAmarakoon](https://github.com/AnjaleeAmarakoon)
- Repository: [pomodoro-timer](https://github.com/AnjaleeAmarakoon/pomodoro-timer)

---

## 🙏 Acknowledgments

- Pomodoro Technique® by Francesco Cirillo
- Design inspiration from modern productivity apps
- Icons by [React Icons](https://react-icons.github.io/react-icons/)

---

<div align="center">
  <p>Made with ❤️ and ⏳</p>
  <p>Happy Focusing! 🎯</p>
</div>

