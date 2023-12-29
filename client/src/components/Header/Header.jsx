import "./Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="bg-center bg-no-repeat bg-top header relative">
            <nav>
                <Link
                    className="block pb-8 pt-28 text-7xl text-center text-pink-400"
                    to="/"
                >
                    NailScape
                </Link>
                <button
                    className="absolute bg-no-repeat flex flex-col gap-1 h-[45px] left-4 menu-toggle ps-[7px] pt-[9px] top-14 w-12"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <div className="bg-gray-50 h-1 opacity-80 w-1/2"></div>
                    <div className="bg-gray-50 h-1 opacity-80 w-1/2"></div>
                    <div className="bg-gray-50 h-1 opacity-80 w-1/2"></div>
                </button>
                {dropdownOpen && (
                    <ul className="dropdown mb-6 mx-4 text-gray-700 text-3xl text-center">
                        <li className="border-b border-gray-50">
                            <Link className="block py-4" to="/blog">
                                Blog
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
            </nav>
        </header>
    );
}

export default Header;
