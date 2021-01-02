import React from "react";
import "./ExperienceCard.css";

export default function ExperienceCard(props) {
    return (
        <div className="experience__card">
            <div className="experience__front">
                <div className="experience__title">
                    <span>{props.title}</span> / {parseDate(props.startDate)} - {parseDate(props.endDate)}
                </div>
                <div className="experience__subtitle">
                    <span>{props.subtitle}</span> / {props.location}
                </div>
                <div className="experience__short">
                    {props.shortDescription}
                </div>
            </div>
            {props.longDescription &&
                <div className="experience__back">
                    <div className="experience__long">
                        {props.longDescription}
                    </div>
                </div>
            }
        </div>
    );
}

// ========================================

function parseDate(dateString) {
    const dateArray = dateString.split("-");
    const year = dateArray[0];

    let options, utcDate;

    if (dateArray.length > 1) {
        const month = parseInt(dateArray[1], 10) - 1;

        options = { year: "numeric", month: "short" };
        utcDate = new Date(Date.UTC(year, month.toString()));
    } else {
        options = { year: "numeric" };
        utcDate = new Date(Date.UTC(year));
    }
    
    return utcDate.toLocaleDateString("fr", options)
}