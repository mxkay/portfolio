import React from "react";

import { IconContext } from "react-icons";

const DevToolIcon = ({ icon, color }) =>
    <div className="dev-tool-icon">
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

export default DevToolIcon;