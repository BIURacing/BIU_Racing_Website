import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Media', path: '/media' },
  ];

  const teamLinks = [
    { name: 'Management', path: '/team/management' },
    { name: 'Mechanical Team', path: '/team/mechanical' },
    { name: 'Electrical Team', path: '/team/electrical' },
    { name: 'Embedded Systems', path: '/team/embedded' },
    { name: 'Operations Team', path: '/team/operations' },
    { name: 'Product Management', path: '/team/product' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-biu-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <img src="/BIURacingColorLogo.png" alt="BIU Racing Logo" className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105" />
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-biu-gold transition-colors px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/' ? 'text-biu-gold' : 'text-white'}`}>Home</Link>
            <Link to="/about" className={`hover:text-biu-gold transition-colors px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/about' ? 'text-biu-gold' : 'text-white'}`}>About Us</Link>

            {/* The Team Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsTeamOpen(true)}
              onMouseLeave={() => setIsTeamOpen(false)}
            >
              <button className={`flex items-center hover:text-biu-gold transition-colors px-3 py-2 rounded-md text-sm font-medium ${location.pathname.includes('/team') ? 'text-biu-gold' : 'text-white'}`}>
                The Team <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <div className={`absolute top-full left-0 w-56 bg-biu-dark border border-white/10 rounded-md shadow-lg py-2 mt-1 transition-all duration-200 origin-top-left ${isTeamOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                {teamLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-biu-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/media" className={`hover:text-biu-gold transition-colors px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/media' ? 'text-biu-gold' : 'text-white'}`}>Media</Link>
            <Link to="/contact" className={`hover:text-biu-gold transition-colors px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/contact' ? 'text-biu-gold' : 'text-white'}`}>Contact</Link>
          </div>
          
          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/contact" className="bg-biu-gold hover:bg-yellow-400 text-biu-dark font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(234,179,8,0.4)]">
              Support Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white hover:text-biu-gold p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-biu-dark border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-biu-gold hover:bg-white/5" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-biu-gold hover:bg-white/5" onClick={() => setIsOpen(false)}>About Us</Link>
            
            <div className="px-3 py-2 text-base font-medium text-gray-400">The Team</div>
            <div className="pl-6 space-y-1">
              {teamLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-biu-gold hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <Link to="/media" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-biu-gold hover:bg-white/5" onClick={() => setIsOpen(false)}>Media</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-biu-gold hover:bg-white/5" onClick={() => setIsOpen(false)}>Contact</Link>
            
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-center mt-4 bg-biu-gold hover:bg-yellow-400 text-biu-dark font-bold py-2 px-3 rounded-md transition-colors">
              Support Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
