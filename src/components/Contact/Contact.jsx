import React from "react";
import "./Contact.css";

const Contact = ({ name, pronouns, email }) => 
    <div className="contact">
        <div className="contact-name">{name}</div>
        <div className="contact-pronouns">{pronouns}</div>
        <div className="contact-email">{email}</div>
    </div>

export default Contact;