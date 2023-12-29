import "./Footer.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="flex flex-col gap-8 py-8">
            <ul className="flex gap-4 justify-center text-2xl text-gray-50">
                <li>
                    <a
                        className="block flex h-10 items-center justify-center  social-icon w-10"
                        href="https://www.facebook.com/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FaFacebookF className="mr-1" />
                    </a>
                </li>
                <li>
                    <a
                        className="block flex h-10 items-center justify-center social-icon w-10"
                        href="https://twitter.com/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FaTwitter className="mr-1" />
                    </a>
                </li>
                <li>
                    <a
                        className="block flex h-10 items-center justify-center social-icon w-10"
                        href="https://www.instagram.com/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FaInstagram className="mr-1" />
                    </a>
                </li>
            </ul>
            <p className="text-center text-gray-500">Copyright &copy; 2023</p>
        </footer>
    );
}

export default Footer;
