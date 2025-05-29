
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Home, Book, Calendar, Camera, User, Map, Navigation as NavIcon } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/culture', label: 'Culture', icon: Calendar },
    { path: '/history', label: 'History', icon: Book },
    { path: '/nature', label: 'Nature', icon: Camera },
    { path: '/people', label: 'People', icon: User },
    { path: '/experiences', label: 'Experiences', icon: NavIcon },
    { path: '/transport', label: 'Transport', icon: Map },
    { path: '/blog', label: 'Blog', icon: Book },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`bg-${theme.backgroundColor} shadow-lg border-b-4 border-${theme.primaryColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className={`text-2xl ${theme.headingFont} text-${theme.primaryColor}`}>
              Sikkim Culture Portal
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm ${theme.bodyFont} transition-colors duration-200 ${
                  isActive(path)
                    ? `bg-${theme.primaryColor} text-white`
                    : `text-${theme.textColor} hover:bg-${theme.primaryColor} hover:text-white`
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-${theme.textColor} hover:text-${theme.primaryColor} focus:outline-none`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base ${theme.bodyFont} transition-colors duration-200 ${
                    isActive(path)
                      ? `bg-${theme.primaryColor} text-white`
                      : `text-${theme.textColor} hover:bg-${theme.primaryColor} hover:text-white`
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
