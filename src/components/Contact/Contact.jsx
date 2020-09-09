import React from "react";
import { Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Contact.css";

const Contact = ({ name, pronouns, email, copyStatus, isMessageVisible, handleCopy }) => 
    <div className="contact">
        { name ?
            <>
                <div className="contact-name">{name}</div>
                <div className="contact-pronouns">{pronouns}</div>
                <CopyToClipboard
                    onCopy={handleCopy}
                    text={email}
                >
                    <Button className="contact-email" variant="secondary" >{email}</Button>
                </CopyToClipboard>
                <div className={`contact-email-status ${copyStatus ? "active" : "inactive"}`} role="status" >
                    { isMessageVisible ? "copied to clipboard!" : "" }
                </div>
            </>
        :
            <></>
        }
    </div>

export default Contact;