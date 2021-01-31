import React from "react";
import "./Contact.css";

export default function Contact(props) {
    const { address, phone, mail, linkedin, github } = props.data;

    return (
        <div className="contact">
            <ul className="contact__list">
                <li className="contact__item">{address}</li>
                <li className="contact__item">
                    <a href={parsePhone(phone)}>{phone}</a>
                </li>
                <li className="contact__item">
                    <a href={parseMail(mail)}>{mail}</a>
                </li>
                <li className="contact__item">
                    <a href={parseLinkedin(linkedin)} target="_blank" rel="noreferrer">{linkedin}</a>
                </li>
                <li className="contact__item">
                    <a href={parseGit(github)} target="_blank" rel="noreferrer">{github}</a>
                </li>
            </ul>
        </div>
    );
}

function parsePhone(phone) {
    return "tel:+33" + phone.slice(1).replace(/ /g, ""); 
}

function parseMail(mail) {
    return "mailto:" + mail;
}

function parseLinkedin(linkedin) {
    return "https://www." + linkedin;
}

function parseGit(github) {
    return "https://" + github;
}