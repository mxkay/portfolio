import React from "react";
import { Button } from "react-bootstrap";

// get icons from https://react-icons.github.io/react-icons/
import LinkIcon from "./LinkIcon";
import { FaGithub as GitHubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedInIcon } from "react-icons/fa";
import { FaCircle as CircleIcon } from "react-icons/fa";

import "./Link.css";

const Link = ({ label, url }) =>
    <Button
        className={`link-button ${label.toLowerCase()}`}
        variant="secondary"
        href={url}
        activeStyle={
            {
                backgroundColor: "blue",
            }
        }
    >
        { label === "GitHub" ?
            <LinkIcon icon={<GitHubIcon />} color="#24292E"/>
        : label === "LinkedIn" ?
            <LinkIcon icon={<LinkedInIcon />} color="#24292E"/>
        : // default
            <LinkIcon icon={<CircleIcon />} color="#24292E"/>
        }
    </Button>;

export default Link;