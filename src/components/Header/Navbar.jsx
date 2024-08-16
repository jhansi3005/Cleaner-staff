import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import { useAuthContext } from '../../context/AuthContext';
import useLogout from '../../hooks/useLogout';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { authUser } = useAuthContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false); // Add state for user menu
  const { loading, logout } = useLogout();
  const userMenuRef = useRef(null); // Ref for user menu

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await logout();
      // Optionally redirect or handle post-logout actions
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  // Toggle user menu
  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  // Close user menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Render navigation links with active styling
  const renderLinks = () => {
    const linkClasses = 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white';
    const activeLinkClasses = 'rounded-md px-3 py-2 text-sm font-medium text-white bg-gray-900'; // Active link styling

    const linkStyle = ({ isActive }) => (isActive ? activeLinkClasses : linkClasses);

    if (authUser?.Role === 'Supervisor') {
      return (
        <>
          <li className="list-none">
            <NavLink
              to="/employee"
              className={linkStyle}
            >
              Employee Details
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/Assigned Task"
              className={linkStyle}
            >
              Assign Task
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/taskstatus"
              className={linkStyle}
            >
              Task Status
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/images"
              className={linkStyle}
            >
              Task Images
            </NavLink>
          </li>
        </>
      );
    }

    return (
      <>
        <li className="list-none">
          <NavLink
            to="/tasks"
            className={linkStyle}
          >
            Tasks
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            to="/requirement"
            className={linkStyle}
          >
            Requirement
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            to="/rating"
            className={linkStyle}
          >
            Rating
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            to="/upload"
            className={linkStyle}
          >
            Upload Status
          </NavLink>
        </li>
      </>
    );
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
             <Link to="/home"><h3 className="text-white font-bold ">Clean Staff PRO</h3></Link> 
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {renderLinks()}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
            <div className="relative ml-3" ref={userMenuRef}>
              {authUser ? (
                <div>
                  <button
                    type="button"
                    onClick={toggleUserMenu}
                    className="relative flex items-center space-x-2 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded={userMenuOpen ? 'true' : 'false'}
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <span className="text-white">{authUser.UserName}</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={authUser.Gender === 'male'
                        ? `https://avatar.iran.liara.run/public/boy?username=${authUser.UserName}`
                        : `https://avatar.iran.liara.run/public/girl?username=${authUser.UserName}`
                      }
                      alt="user photo"
                    />
                  </button>
                 
                  <div
                    className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${userMenuOpen ? 'block' : 'hidden'}`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <NavLink
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      tabIndex="-1"
                    >
                      Your Profile
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      tabIndex="-1"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="block py-2 px-3 text-base font-medium text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {renderLinks()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
