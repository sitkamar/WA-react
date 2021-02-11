import React from "react";

function Footer() {
    return (
        <footer>
            <p>
                &copy; {new Date().getFullYear()}{" "}
                <a href="mailto:martin.sitina@student.gyarab.cz">Mega Program�tor Martin �itin</a>
            </p>
        </footer>
    );
}

export default Footer;