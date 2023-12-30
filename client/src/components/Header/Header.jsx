import "./Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="bg-[url('assets/images/background-header.png')] bg-center bg-cover bg-no-repeat bg-top relative">
            <nav>
                <Link
                    className="block md:pt-16 pb-8 pt-28 text-7xl text-center text-pink-400"
                    to="/"
                >
                    NailScape
                </Link>
                <button
                    className="absolute bg-[url('assets/images/background-dropdown-button.png')] bg-no-repeat flex flex-col gap-1 h-[45px] left-4 ps-[7px] md:hidden pt-[9px] top-14 w-12"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <div className="bg-gray-50 h-1 opacity-80 w-1/2"></div>
                    <div className="bg-gray-50 h-1 opacity-80 w-1/2"></div>
                    <div className="bg-gray-50 h-1 opacity-80 w-1/2"></div>
                </button>
                {dropdownOpen && (
                    <ul className="bg-[url('assets/images/background-dropdown.jpg')] mb-6 md:hidden mx-4 text-gray-700 text-3xl text-center">
                        <li className="border-b border-gray-50">
                            <Link className="block py-4 underline" to="/blogs">
                                Blogs
                            </Link>
                        </li>
                        <li className="border-b border-gray-50">
                            <Link className="block py-4" to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="block py-4" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                )}
                <ul className="bg-[center_top_0.35rem] bg-[url('assets/images/background-navigation-left.png'),_url('assets/images/background-navigation-right.png')] bg-center bg-contain bg-no-repeat gap-12 hidden justify-center mb-6 md:flex mx-4 text-gray-700 text-3xl text-center">
                    <li>
                        <Link className="block underline py-4" to="/blogs">
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link className="block py-4" to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="block py-4" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
