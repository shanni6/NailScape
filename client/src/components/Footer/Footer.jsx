import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer bg-no-repeat bg-top relative rotate-180">
            <p className="block pb-40 rotate-180 justify-center items-center text-center text-gray-400 text-sm font-sans">
                NailScape by Emily L. 2024
            </p>
            <FontAwesomeIcon icon={faSquareGithub} />
        </footer>
    );
}

export default Footer;
