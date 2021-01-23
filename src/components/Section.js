import React from "react";
import "./Section.css";

function SectionHeader(props) {
    return (
        <div className="section__header">
            <div className="section__icon">
                <img src={props.src} alt={props.alt} />
            </div>
            <div className="section__title">
                <span>{props.title}</span>
            </div>
        </div>
    );
}

function SectionContent(props) {
    return <div className="section__content">{props.content}</div>;
}

export default function Section(props) {
    return (
        <div className="section" id={props.id}>
            <SectionHeader
                title={props.title}
                src={props.src}
                alt={props.alt}
            />
            <SectionContent content={props.content} />
        </div>
    );
}