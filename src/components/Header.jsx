import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-secondary fixed w-full top-0 z-50 shadow-lg border-b-2 border-primary">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold cursor-pointer hover:opacity-80 transition duration-300">
              <span className="text-primary">SERENDIP</span>
              <span className="ml-2 text-secondary">KOREA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/about" className="hover:text-primary transition duration-300">
              소개
            </Link>
            <Link to="/programs" className="hover:text-primary transition duration-300">
              프로그램
            </Link>
            <Link to="/teams" className="hover:text-primary transition duration-300">
              팀
            </Link>
            <Link to="/news" className="hover:text-primary transition duration-300">
              소식
            </Link>
            <Link to="/contact" className="hover:text-primary transition duration-300">
              문의
            </Link>
            <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-dark transition duration-300">
              함께하기
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/about"
                className="hover:text-primary transition duration-300"
                onClick={toggleMenu}
              >
                소개
              </Link>
              <Link
                to="/programs"
                className="hover:text-primary transition duration-300"
                onClick={toggleMenu}
              >
                프로그램
              </Link>
              <Link
                to="/teams"
                className="hover:text-primary transition duration-300"
                onClick={toggleMenu}
              >
                팀
              </Link>
              <Link
                to="/news"
                className="hover:text-primary transition duration-300"
                onClick={toggleMenu}
              >
                소식
              </Link>
              <Link
                to="/contact"
                className="hover:text-primary transition duration-300"
                onClick={toggleMenu}
              >
                문의
              </Link>
              <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-dark transition duration-300 w-full">
                함께하기
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
