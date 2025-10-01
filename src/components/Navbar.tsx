import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    transition: { when: 'afterChildren' },
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.02,
    },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (label) => {
    setActiveLink(label);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/30 shadow-lg shadow-black/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold gradient-text hover:brightness-110 transition-all duration-300"
        >
          {/* Optional Logo Text */}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleLinkClick(link.label)}
              className={`relative text-lg font-medium transition-colors duration-300 ${
                activeLink === link.label
                  ? 'text-neon-cyan'
                  : 'text-foreground hover:text-neon-cyan'
              }`}
            >
              {link.label}
              {activeLink === link.label && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-0.5 w-full bg-neon-cyan"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <div className="mt-1.5">
            <ThemeToggle />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-foreground hover:text-neon-cyan z-50"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'x-icon' : 'menu-icon'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2, type: 'tween' }}
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden absolute top-full left-0 w-full bg-background/90 backdrop-blur-lg border-t border-neon-cyan/20 px-4 pt-4 pb-6 z-40"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.label)}
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`block text-lg py-3 text-center font-medium transition-colors duration-300 ${
                  activeLink === link.label
                    ? 'text-neon-cyan'
                    : 'text-foreground hover:text-neon-cyan'
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
