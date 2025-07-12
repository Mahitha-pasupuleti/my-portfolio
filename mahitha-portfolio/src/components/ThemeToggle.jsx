import { useState, useEffect } from 'react';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
