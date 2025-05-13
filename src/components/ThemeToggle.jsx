import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onToggle}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;