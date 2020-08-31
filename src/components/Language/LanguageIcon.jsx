import React from "react";

import { IconContext } from "react-icons";

const LanguageIcon = ({ icon, color }) =>
    <IconContext.Provider value={
        {
            color: color,
            size: "1.5em",
            className: "global-class-name"
        }
    }>
        {icon}
    </IconContext.Provider>

export default LanguageIcon;