import React from "react";
import LanguageIcon from "./LanguageIcon";

import { DiJsBadge } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiRuby } from "react-icons/di";
import { FaCircle } from "react-icons/fa";

const LanguageContainer = ({ language }) =>
    <div className="language-wrapper">
        { language === "JavaScript" ?
            <LanguageIcon icon={<DiJsBadge />} color="#F1E05A"/>
        : language === "HTML5" ?
            <LanguageIcon icon={<DiHtml5 />} color="#E34C27"/>
        : language === "CSS3" ?
            <LanguageIcon icon={<DiCss3 />} color="#563D7C"/>
        : language === "Ruby" ?
            <LanguageIcon icon={<DiRuby />} color="#000"/>
        :
            <LanguageIcon icon={<FaCircle />} color="#000"/>
        }
        {language}
    </div>

export default LanguageContainer;