import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="w-full sticky top-0 z-50 backdrop-blur-xl bg-[#1F2128]/80 glass shadow-lg"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 18 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="flex items-center gap-2 text-2xl font-bold tracking-wide text-white z-50"
          onClick={closeMenu}
        >
          <FaDumbbell className="text-[#6EE7B7]" size={32} />
          LeoFit360
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-lg">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative transition-colors duration-200 hover:text-[#6EE7B7] pb-1 ${isActive ? 'text-[#6EE7B7]' : 'text-white'}`
              }
              end={link.to === '/'}
            >
              {({ isActive }) => (
                <span className="inline-block">
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 w-full rounded bg-[#6EE7B7] transition-all duration-300 ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <motion.button
          className="md:hidden relative z-50 p-2 text-white hover:text-[#6EE7B7] transition-colors rounded-lg hover:bg-white/5"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={closeMenu}
              />
              
              {/* Mobile Menu */}
              <motion.div
                className="fixed top-16 left-4 right-4 bg-[#1F2128]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-600/30 z-50 md:hidden"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-6">
                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `text-left text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                            isActive
                              ? 'text-[#6EE7B7] bg-[#6EE7B7]/10 border-l-4 border-[#6EE7B7]'
                              : 'text-white hover:bg-white/5 hover:text-[#6EE7B7]'
                          }`
                        }
                        end={link.to === '/'}
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}