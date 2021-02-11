import React from "react";

function Footer() {
    return (
        <footer>
            <p>
                &copy; {new Date().getFullYear()}{" "}
                <a href="mailto:martin.sitina@student.gyarab.cz">Mega Programátor Martin Šitin</a>
            </p>
        </footer>
    );
}

export default Footer;