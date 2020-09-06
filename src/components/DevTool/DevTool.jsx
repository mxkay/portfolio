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
import { DiBootstrap as BootstrapIcon } from "react-icons/di";
import { DiNodejsSmall as NodeIcon } from "react-icons/di";
import { SiExpo as ExpoIcon } from "react-icons/si";
import { SiCplusplus as CppIcon } from "react-icons/si";
import { DiJava as JavaIcon } from "react-icons/di";
import { DiPython as PythonIcon } from "react-icons/di";
import { SiAutodesk as AutodeskIcon } from "react-icons/si";
import { DiCodeBadge as OpenSCADIcon } from "react-icons/di";
import { SiMicrosoftword as WordIcon } from "react-icons/si";
import { SiMicrosoftexcel as ExcelIcon } from "react-icons/si";
import { SiMicrosoftpowerpoint as PowerpointIcon } from "react-icons/si";
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
        : name === "Ruby on Rails" ?
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
        : name === "Node.js" ?
            <DevToolIcon icon={<NodeIcon />} color="#689F63"/>
        : name === "Express.js" ?
            <DevToolIcon icon={<NodeIcon />} color="#899197"/>
        : name === "Expo" ?
            <DevToolIcon icon={<ExpoIcon />} color="#020020"/>
        : name === "C/C++" ?
            <DevToolIcon icon={<CppIcon />} color="#659AD2"/>
        : name === "Java" ?
            <DevToolIcon icon={<JavaIcon />} color="#F29919"/>
        : name === "Python" ?
            <DevToolIcon icon={<PythonIcon />} color="#F6D43C"/>
        : name === "AutoDesk Inventor" ?
            <DevToolIcon icon={<AutodeskIcon />} color="#B86D22"/>
        : name === "AutoCAD" ?
            <DevToolIcon icon={<AutodeskIcon />} color="#B42A24"/>
        : name === "OpenSCAD" ?
            <DevToolIcon icon={<OpenSCADIcon />} color="#F1E94D" />
        : name === "MS Word" ?
            <DevToolIcon icon={<WordIcon />} color="#2A569A" />
        : name === "MS Excel" ?
            <DevToolIcon icon={<ExcelIcon />} color="#287145" />
        : name === "MS Powerpoint" ?
            <DevToolIcon icon={<PowerpointIcon />} color="#CB4A32" />
        : // default
            <DevToolIcon icon={<CircleIcon />} size={0.5} color="#777"/>
        }
        <div className="dev-tool-name">
            {name}
        </div>
    </div>

export default DevTool;