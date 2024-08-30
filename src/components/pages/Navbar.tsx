import { useState } from "react";
import { FaSearch, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/slices/authSlice";
import { toast } from "sonner";
import { useGetUserQuery } from "../../redux/features/Auth/authApi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const navigate = useNavigate();

  // User data query
  const { data: userData } = useGetUserQuery(undefined);

  const handleLogout = () => {
    logout();
    toast.success('Log out successfully', { duration: 2000 });

    const modalCheckbox = document.getElementById('user_modal') as HTMLInputElement;
    if (modalCheckbox) {
      modalCheckbox.checked = false;
    }

    navigate(`/`);
  };

  const handleLogin = () => {
    navigate(`/login`);
  };

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(''); // Clear the search input
    }
  };

  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">BikeHat</div>

        {/* Nav Links for Desktop */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-800 hover:text-gray-500">Home</Link>
          <Link to="/contact" className="text-gray-800 hover:text-gray-500">Contact</Link>
          <Link to="/about" className="text-gray-800 hover:text-gray-500">About</Link>
          <Link to="/login" className="text-gray-800 hover:text-gray-500">Login</Link>
        </div>

        {/* Search Bar and Icons for Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="What are you looking for?"
              className="bg-transparent focus:outline-none text-gray-600"
            />
            <FaSearch className="text-gray-600 ml-2 cursor-pointer" onClick={handleSearch} />
          </div>
        
          <label htmlFor="user_modal" className="cursor-pointer">
            <FaUser className="text-gray-800" />
          </label>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2">
          <Link to="/" className="block py-2 text-gray-800 hover:text-gray-500">Home</Link>
          <Link to="/contact" className="block py-2 text-gray-800 hover:text-gray-500">Contact</Link>
          <Link to="/about" className="block py-2 text-gray-800 hover:text-gray-500">About</Link>
          <Link to="/signup" className="block py-2 text-gray-800 hover:text-gray-500">Sign Up</Link>
          <div className="flex items-center space-x-4 py-2">
            
            <label htmlFor="user_modal" className="cursor-pointer">
              <FaUser className="text-gray-800" />
            </label>
          </div>
          <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center mt-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="bg-transparent focus:outline-none text-gray-600 w-full"
            />
            <FaSearch className="text-gray-600 ml-2 cursor-pointer" onClick={handleSearch} />
          </div>
        </div>
      )}

      {/* User Modal */}
      <input type="checkbox" id="user_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="p-2 bg-white rounded-lg shadow-md max-w-lg mx-auto mt-2">
            {userData ? (
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-2xl font-semibold text-gray-800">{userData.data.name}</h3>
                </div>
                <div className="mb-2 text-gray-700">
                  <p className="mb-2"><strong>Email:</strong> {userData.data.email}</p>
                  <p className="mb-2"><strong>Phone:</strong> {userData.data.phone}</p>
                  <p><strong>Joined:</strong> {new Date(userData.data.createdAt).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                  })}</p>
                </div>
                <p className="mb-2 font-semibold text-gray-800"><strong> My Bookings (5)</strong></p>
                <div className="flex justify-between">
                  <button
                    className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 focus:outline-none transition duration-200"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                  <Link
                    to="profile"
                    className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none transition duration-200"
                  >
                    Profile
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-4">Please login to continue</p>
                <button
                  className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none transition duration-200"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            )}
          </div>

          <div className="modal-action">
            <label htmlFor="user_modal" className="btn">Close!</label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
