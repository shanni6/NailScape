import "./Footer.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[url('assets/images/background-footer.png')] bg-bottom bg-center bg-contain bg-no-repeat flex flex-col gap-8 md:pb-28 lg:pb-36 md:pt-16 pb-20 pt-16">
            <ul className="flex gap-4 justify-center text-2xl text-gray-50">
                <li>
                    <a
                        className="bg-[url('assets/images/background-social-icons.png')] block flex h-10 items-center justify-center  social-icon w-10"
                        href="https://www.facebook.com/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FaFacebookF className="mr-1" />
                    </a>
                </li>
                <li>
                    <a
                        className="bg-[url('assets/images/background-social-icons.png')] block flex h-10 items-center justify-center social-icon w-10"
                        href="https://twitter.com/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FaTwitter className="mr-1" />
                    </a>
                </li>
                <li>
                    <a
                        className="bg-[url('assets/images/background-social-icons.png')] block flex h-10 items-center justify-center social-icon w-10"
                        href="https://www.instagram.com/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FaInstagram className="mr-1" />
                    </a>
                </li>
            </ul>
            <p className="text-center text-gray-500">&copy; 2023 NailScape</p>
        </footer>
    );
}

export default Footer;
