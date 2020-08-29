import React from "react";
import "./Header.css";

import Nav from "../Nav/Nav";

const Header = ({ isSticky, forwardedRef }) => 
    <div className={`header-wrapper ${isSticky ? "sticky" : ""}`} ref={forwardedRef}>
        <div className={`header ${isSticky ? "sticky" : ""}`}>
            <Nav />
        </div>
    </div>;

export default Header;