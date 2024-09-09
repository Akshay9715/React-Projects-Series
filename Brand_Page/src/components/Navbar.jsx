import brand_logo from '../assets/brand_logo.png';

const Navbar = () => {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img src={brand_logo} alt="LOGO" className="h-10 w-auto" />
                </div>
                
                {/* Navigation Menu */}
                <ul className="hidden md:flex space-x-8 font-semibold text-gray-600">
                    <li>
                        <a href="#" className="hover:text-fuchsia-900 transition duration-300">MENU</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-fuchsia-900 transition duration-300">LOCATION</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-fuchsia-900 transition duration-300">ABOUT</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-fuchsia-900 transition duration-300">CONTACT</a>
                    </li>
                </ul>

                {/* Submit Button */}
                <button className="hidden md:block bg-fuchsia-900 text-white font-medium py-2 px-6 rounded-lg hover:bg-fuchsia-700 transition duration-300">
                    Login
                </button>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button className="text-gray-600 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
