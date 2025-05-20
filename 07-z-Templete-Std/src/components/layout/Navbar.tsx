import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Store, User, LogOut, LogIn } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const location = useLocation();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when navigating to a new page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <nav className={`navbar transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Store className="h-8 w-8 text-primary-600" />
          <span className="font-bold text-xl md:text-2xl">AppStore</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? 'text-primary-600 font-medium' 
                : 'text-gray-700 hover:text-primary-600 transition-colors'
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive 
                ? 'text-primary-600 font-medium' 
                : 'text-gray-700 hover:text-primary-600 transition-colors'
            }
          >
            About
          </NavLink>
          {currentUser && (
            <NavLink 
              to="/profile" 
              className={({ isActive }) => 
                isActive 
                  ? 'text-primary-600 font-medium' 
                  : 'text-gray-700 hover:text-primary-600 transition-colors'
              }
            >
              My Profile
            </NavLink>
          )}
          
          {currentUser ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img 
                  src={currentUser.photoURL || 'https://i.ibb.co.com/KzNX4hQq/side-icon.png'} 
                  alt="Profile" 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm text-gray-700 font-medium hidden lg:inline">
                  {currentUser.displayName || currentUser.email}
                </span>
              </div>
              <button 
                onClick={handleLogout}
                className="btn btn-outline flex items-center space-x-1 text-sm"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary flex items-center space-x-1">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white pt-20 px-4 animate-fade-in">
          <div className="flex flex-col space-y-6 text-center">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? 'text-primary-600 font-medium text-lg' 
                  : 'text-gray-700 hover:text-primary-600 transition-colors text-lg'
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive 
                  ? 'text-primary-600 font-medium text-lg' 
                  : 'text-gray-700 hover:text-primary-600 transition-colors text-lg'
              }
            >
              About
            </NavLink>
            {currentUser && (
              <NavLink 
                to="/profile" 
                className={({ isActive }) => 
                  isActive 
                    ? 'text-primary-600 font-medium text-lg' 
                    : 'text-gray-700 hover:text-primary-600 transition-colors text-lg'
                }
              >
                <div className="flex items-center justify-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>My Profile</span>
                </div>
              </NavLink>
            )}
            
            {currentUser ? (
              <div className="pt-4 border-t border-gray-100">
                <div className="flex flex-col items-center mb-4">
                  <img 
                    src={currentUser.photoURL || 'https://i.ibb.co.com/KzNX4hQq/side-icon.png'} 
                    alt="Profile" 
                    className="w-16 h-16 rounded-full object-cover mb-2"
                  />
                  <span className="text-gray-700 font-medium">
                    {currentUser.displayName || currentUser.email}
                  </span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="btn btn-outline w-full flex items-center justify-center space-x-2"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="pt-4 border-t border-gray-100">
                <Link 
                  to="/login" 
                  className="btn btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <LogIn className="h-5 w-5" />
                  <span>Login</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;