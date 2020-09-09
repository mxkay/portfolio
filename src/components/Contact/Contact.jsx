import React from "react";
import { Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Contact.css";

const Contact = ({ name, pronouns, email, copyStatus, isMessageVisible, handleCopy }) => 
    <div className="contact">
        <div className="contact-name">{name}</div>
        <div className="contact-pronouns">{pronouns}</div>
        <CopyToClipboard
            onCopy={handleCopy}
            text={email}
        >
            <Button className="contact-email" variant="secondary" >{email}</Button>
        </CopyToClipboard>
        <div className={`contact-email-status ${copyStatus ? "active" : "inactive"}`}>
            { isMessageVisible ? <div>copied to clipboard!</div> : <></>}
        </div>
    </div>

export default Contact;