import React from "react";
import DevToolIcon from "./DevToolIcon";
import "./DevTool.css";

import { DiJsBadge } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiRuby } from "react-icons/di";
import { FaCircle } from "react-icons/fa";

const DevTool = ({ name }) =>
    <div className="dev-tool-wrapper">
        { name === "JavaScript" ?
            <DevToolIcon icon={<DiJsBadge />} color="#F1E05A"/>
        : name === "HTML5" ?
            <DevToolIcon icon={<DiHtml5 />} color="#E34C27"/>
        : name === "CSS3" ?
            <DevToolIcon icon={<DiCss3 />} color="#563D7C"/>
        : name === "Ruby" ?
            <DevToolIcon icon={<DiRuby />} color="#000"/>
        :
            <DevToolIcon icon={<FaCircle />} color="#000"/>
        }
        <div className="dev-tool-name">
            {name}
        </div>
    </div>

export default DevTool;