import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  const isActive = (path: string) => location.pathname === path ? "text-primary dark:text-accent font-bold" : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent";

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-surface-dark/95 backdrop-blur shadow-sm border-b border-gray-100 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">

          {/* Logo */}
<Link to="/" className="flex-shrink-0 flex items-center group">
  <img 
  src="/img/logo_unitropico.png" 
  alt="Unitrópico" 
  className="h-16 md:h-56 w-auto object-contain transition-transform group-hover:scale-105" 
/>
</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={`${isActive('/')} font-medium transition-colors`}>Inicio</Link>
            <Link to="/curriculum" className={`${isActive('/curriculum')} font-medium transition-colors`}>Programa</Link>
            <Link to="/admissions" className={`${isActive('/admissions')} font-medium transition-colors`}>Admisiones</Link>
            <Link to="/contact" className={`${isActive('/contact')} font-medium transition-colors`}>Contacto</Link>

            <Link to="/enroll" className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-0.5">
              Inscríbete
            </Link>

            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400">
              <span className="material-icons dark:hidden">dark_mode</span>
              <span className="material-icons hidden dark:block">light_mode</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400">
              <span className="material-icons dark:hidden">dark_mode</span>
              <span className="material-icons hidden dark:block">light_mode</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none">
              <span className="material-icons text-3xl">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-700 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link onClick={() => setIsOpen(false)} to="/" className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Inicio</Link>
            <Link onClick={() => setIsOpen(false)} to="/curriculum" className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Programa</Link>
            <Link onClick={() => setIsOpen(false)} to="/admissions" className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Admisiones</Link>
            <Link onClick={() => setIsOpen(false)} to="/contact" className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Contacto</Link>
            <Link onClick={() => setIsOpen(false)} to="/enroll" className="mt-4 block w-full text-center bg-primary text-white px-3 py-3 rounded-md font-bold shadow-md">
              Inscríbete Ahora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;