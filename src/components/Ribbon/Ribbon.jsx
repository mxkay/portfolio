import React from "react";
import "./Ribbon.css";

const Ribbon = () => {
    return (
        <div className="ribbon-wrapper">
            <div className="ribbon">
                <div className="ribbon-name-wrapper">
                    <p className="ribbon-name">Kay Vail</p>
                    <p className="ribbon-pronouns">they/she</p>
                </div>
                <p className="ribbon-title">Full Stack Software Developer</p>
            </div>
        </div>
    );
}

export default Ribbon;
