import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Camera } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useScrollDirection } from '../hooks/useScrollDirection';
import RippleButton from './RippleButton';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollDirection, scrollY } = useScrollDirection();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#gallery' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'About', href: '#timeline' },
    { name: 'Contact', href: '#contact' }
  ];

  const isHidden = scrollDirection === 'down' && scrollY > 100;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <RippleButton
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center space-x-2 text-amber-600 dark:text-amber-400 font-bold text-xl"
              >
                <Camera className="w-6 h-6" />
                <span>FrameCraft</span>
              </RippleButton>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <RippleButton
                    key={item.name}
                    onClick={() => {
                      document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </RippleButton>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <RippleButton
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </RippleButton>

              <div className="md:hidden">
                <RippleButton
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </RippleButton>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-4 py-2 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-700/20">
            {navItems.map((item) => (
              <RippleButton
                key={item.name}
                onClick={() => {
                  document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
              >
                {item.name}
              </RippleButton>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;