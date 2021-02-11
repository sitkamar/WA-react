import React from "react";
const Util = require('../Utils/Util.js');

function Header() {
    return <header>{new Util().NadpisPozdrav()}</header>;
}

export default Header;