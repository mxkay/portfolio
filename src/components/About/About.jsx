import React from 'react'
import { Figure } from "react-bootstrap";
import DevToolList from "../DevToolList/DevToolList";

import "./About.css";

const About = ({ bio }) => 
    <div className="about-bio">
        {bio && bio[0] ? bio.map( (textBlock, index) =>
            <Figure className={`about-bio-text-block ${textBlock.variant}`} key={index}>
                    <>{textBlock.variant === "devToolList" ?
                        <DevToolList toolNames={textBlock.content.split(',')} />
                    : 
                        textBlock.content
                    }</>
            </Figure>
        ) : <></>}
    </div>

export default About;
