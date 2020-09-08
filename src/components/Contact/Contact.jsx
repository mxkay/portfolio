import React from "react";
import { Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Contact.css";

const Contact = ({ name, pronouns, email, copyStatus, handleCopy }) => 
    <div className="contact">
        <div className="contact-name">{name}</div>
        <div className="contact-pronouns">{pronouns}</div>
        <CopyToClipboard
            onCopy={handleCopy}
            text={email}
        >
            <Button className="contact-email">{email}</Button>
        </CopyToClipboard>
        { copyStatus ?
            <div className="contact-email-status-message">copied to clipboard!</div>
        :
            <></>
        }
    </div>

export default Contact;