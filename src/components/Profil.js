import React from "react";
import "./Profil.css";

function ProfilHeader(props) {
    return (
        <div className="profil__header">
            <div className="profil__picture"></div>
            <div className="profil__forename">
                <span>{props.forename}</span>
            </div>
        </div>
    );
}

function ProfilContent(props) {
    return (
        <div className="profil__content">
            <div className="profil__surname">
                {props.surname}
            </div>
            <div className="profil__role">
                {parseRole(props.role)}
            </div>
        </div>
    );
}

export default function Profil(props) {
    return (
        <div className="profil">
            <ProfilHeader forename={props.forename} />
            <ProfilContent
                surname={props.surname}
                role={props.role}
            />
        </div>
    );
}

// ========================================

function parseRole(role) {
    const roleArray = role.split(" ");
    return roleArray.map((word, i) => <span key={i}>{word}</span>);
}