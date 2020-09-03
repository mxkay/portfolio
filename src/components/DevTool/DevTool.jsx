import React from "react";
import DevToolIcon from "./DevToolIcon";

// get icons from https://react-icons.github.io/react-icons/
import { DiJsBadge as JavaScriptIcon } from "react-icons/di";
import { DiHtml5 as HTML5Icon } from "react-icons/di";
import { DiCss3 as CSS3Icon } from "react-icons/di";
import { DiRuby as RubyIcon } from "react-icons/di";
import { SiRails as RailsIcon } from "react-icons/si";
import { DiJqueryLogo as JQueryIcon } from "react-icons/di";
import { BiTransferAlt as AxiosIcon } from "react-icons/bi";
import { DiReact as ReactIcon } from "react-icons/di";
import { SiExpo as ExpoIcon } from "react-icons/si";
import { DiBootstrap as BootstrapIcon } from "react-icons/di";
import { FaCircle as CircleIcon } from "react-icons/fa";

import "./DevTool.css";

const DevTool = ({ name }) =>
    <div className="dev-tool-wrapper">
        { name === "JavaScript" ?
            <DevToolIcon icon={<JavaScriptIcon />} color="#F1E05A"/>
        : name === "HTML5" ?
            <DevToolIcon icon={<HTML5Icon />} color="#E44D26"/>
        : name === "CSS3" ?
            <DevToolIcon icon={<CSS3Icon />} color="#384DE4"/>
        : name === "Ruby" ?
            <DevToolIcon icon={<RubyIcon />} color="#701516"/>
        : name === "Rails" ?
            <DevToolIcon icon={<RailsIcon />} color="#CC2100"/>
        : name === "jQuery" ?
            <DevToolIcon icon={<JQueryIcon />} color="#3372A2"/>
        : name === "axios" ?
            <DevToolIcon icon={<AxiosIcon />} color="#854195"/>
        : name === "React" ?
            <DevToolIcon icon={<ReactIcon />} color="#60D8FF"/>
        : name === "React Native" ?
            <DevToolIcon icon={<ReactIcon />} color="#60D8FF"/>
        : name === "Bootstrap" ?
            <DevToolIcon icon={<BootstrapIcon />} color="#563D7C"/>
        : name === "Expo" ?
            <DevToolIcon icon={<ExpoIcon />} color="#020020"/>
        : // default
            <DevToolIcon icon={<CircleIcon />} color="#000"/>
        }
        <div className="dev-tool-name">
            {name}
        </div>
    </div>

export default DevTool;