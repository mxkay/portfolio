import React from "react";
import "./LanguageList.css";
import Language from "../Language/Language";

const LanguageList = ({ languages }) =>
    <div className="languages">
        {languages && languages[0] ?
            languages.map((language, index) =>
                <Language kay={index} language={language} />
            )
        : <></>}
    </div>;

export default LanguageList;