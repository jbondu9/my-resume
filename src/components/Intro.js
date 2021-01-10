import React from "react";
import "./Intro.css";

export default function Intro(props) {
    const introArray = props.intro.split(".");
    
    return (
        <div className="intro">
            {introArray.map((sentence, i) => <span key={i}>{sentence}</span>)}
        </div>
    );
}