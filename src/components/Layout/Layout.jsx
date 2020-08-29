import React from "react";
import Scrollbars from "react-custom-scrollbars";
import "./Layout.css";

const Layout = ({ children }) => {
    return (
        <Scrollbars>
            <div className="layout">
                {children}
            </div>
        </Scrollbars>
    );
}

export default Layout;