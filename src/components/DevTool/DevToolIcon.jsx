import React from "react";

import { IconContext } from "react-icons";

const DevToolIcon = ({ icon, size = 1.8, color }) =>
    <div className="dev-tool-icon" style={{ padding: (1.8 - size)/2 + "em" }}>
        <IconContext.Provider value={
            {
                color: color,
                size: size + "em",
                className: "global-class-name"
            }
        }>
            {icon}
        </IconContext.Provider>
    </div>

export default DevToolIcon;