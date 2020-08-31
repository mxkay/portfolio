import React from "react";

// get icons from https://react-icons.github.io/icons?name=di
import DevToolIcon from "./DevToolIcon";
import { DiJsBadge } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiRuby } from "react-icons/di";
import { DiJqueryLogo } from "react-icons/di";
import { BiTransferAlt } from "react-icons/bi";
import { DiReact } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { FaCircle } from "react-icons/fa";

import "./DevTool.css";

const DevTool = ({ name }) =>
    <div className="dev-tool-wrapper">
        { name === "JavaScript" ?
            <DevToolIcon icon={<DiJsBadge />} color="#F1E05A"/>
        : name === "HTML5" ?
            <DevToolIcon icon={<DiHtml5 />} color="#E44D26"/>
        : name === "CSS3" ?
            <DevToolIcon icon={<DiCss3 />} color="#384DE4"/>
        : name === "Ruby" ?
            <DevToolIcon icon={<DiRuby />} color="#701516"/>
        : name === "jQuery" ?
            <DevToolIcon icon={<DiJqueryLogo />} color="#3372A2"/>
        : name === "axios" ?
            <DevToolIcon icon={<BiTransferAlt />} color="#854195"/>
        : name === "React" ?
            <DevToolIcon icon={<DiReact />} color="#60D8FF"/>
        : name === "Bootstrap" ?
            <DevToolIcon icon={<DiBootstrap />} color="#563D7C"/>
        : // default
            <DevToolIcon icon={<FaCircle />} color="#000"/>
        }
        <div className="dev-tool-name">
            {name}
        </div>
    </div>

export default DevTool;