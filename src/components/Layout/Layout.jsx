import React from "react";
import Scrollbars from "react-custom-scrollbars";
import "./Layout.css";

const Layout = ({ onScrollFrame, children }) => {
    return (
        <Scrollbars onScrollFrame={onScrollFrame} >
            <div className="layout" >
                {children}
            </div>
        </Scrollbars>
    );
}

export default Layout;