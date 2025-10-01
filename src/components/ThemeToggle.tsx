import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useState, useLayoutEffect } from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  }
  return true; // Default to dark during SSR
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useLayoutEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed top-14 right-3 md:top-14 md:right-8 z-50 p-3 glass-card hover:neon-glow transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 0.8
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative w-6 h-6"
      >
        {isDark ? (
          <Moon className="w-6 h-6 text-neon-cyan group-hover:text-neon-purple transition-colors" />
        ) : (
          <Sun className="w-6 h-6 text-neon-yellow group-hover:text-neon-pink transition-colors" />
        )}
      </motion.div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Switch to {isDark ? 'light' : 'dark'} mode
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
