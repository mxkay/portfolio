import React from "react";
import "./Header.css";

import Nav from "../Nav/Nav";

const Header = ({ isSticky }) => 
    <div className={`header ${isSticky ? "sticky" : ""}`}>
        <Nav />
    </div>;

export default Header;