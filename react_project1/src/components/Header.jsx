import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to get the current pathname
  const getCurrentPath = () => {
    return window.location.pathname;
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="logo" src="/images/HSlogo2.jpeg" alt="logo" />
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="/"
                  className={`text-gray-600 hover:text-gray-800 ${getCurrentPath() === '/' ? 'active' : ''}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`text-gray-600 hover:text-gray-800 ${getCurrentPath() === '/about' ? 'active' : ''}`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className={`text-gray-600 hover:text-gray-800 ${getCurrentPath() === '/blogs' ? 'active' : ''}`}
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`text-gray-600 hover:text-gray-800 ${getCurrentPath() === '/contact' ? 'active' : ''}`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-blue-500 hover:bg-black-600 text-white font-bold py-2 px-4 rounded"
            >
              Let's Talk
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800">
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 bg-white">
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className={`block px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded ${getCurrentPath() === '/' ? 'active' : ''}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`block px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded ${getCurrentPath() === '/about' ? 'active' : ''}`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className={`block px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded ${getCurrentPath() === '/blogs' ? 'active' : ''}`}
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`block px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded ${getCurrentPath() === '/contact' ? 'active' : ''}`}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
