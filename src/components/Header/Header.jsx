import React from "react";
import "./Header.css";

import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import Ribbon from "../Ribbon/Ribbon";

const Header = () => 
    <div className="header">
        <ProfilePhoto />
        <Ribbon />
    </div>;

export default Header;