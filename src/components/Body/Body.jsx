import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import "./Body.css";

const Body = props => 
    <div className="body">
        {props.nav ? props.nav : <></>}
        <Scrollbars>
            {props.children}
        </Scrollbars>

    </div>

export default Body;