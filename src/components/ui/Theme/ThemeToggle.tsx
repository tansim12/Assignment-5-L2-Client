import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons

const ThemeToggle = () => {
  // Initialize with dark mode enabled by default
  const [darkMode, setDarkMode] = useState(true);

  // Check local storage or system preference
  useEffect(() => {
    const darkModePreference = localStorage.getItem('theme');
    if (darkModePreference === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (darkModePreference === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // If no preference is set, use system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(systemPrefersDark);
      document.documentElement.classList.toggle('dark', systemPrefersDark);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} bg-pageBg-light dark:bg-pageBg-dark flex items-center justify-center`}>
      <button
        className="px-4 py-2 bg-primary-light dark:bg-primary-dark text-white flex items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105"
        onClick={toggleDarkMode}
      >
        {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-500" />}
      </button>
    </div>
  );
};

export default ThemeToggle;
