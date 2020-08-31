import React from "react";

import { IconContext } from "react-icons";

const LanguageIcon = ({ icon, color }) =>
    <div className="language-icon">
        <IconContext.Provider value={
            {
                color: color,
                size: "1.5em",
                className: "global-class-name"
            }
        }>
            {icon}
        </IconContext.Provider>
    </div>

export default LanguageIcon;