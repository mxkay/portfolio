import React from "react";
import "./Contact.css";

const Contact = ({ name, pronouns, email }) => 
    <div className="contact">
        <div className="contact-name">{name}</div>
        <div className="contact-pronouns">{pronouns}</div>
        <a className="contact-email" href={email}>{email}</a>
    </div>

export default Contact;