import React from "react";
import "./ExperienceList.css";

function ExperienceCard(props) {

    const [visible, setVisible] = React.useState(true); 

    return (
        <div className="experience__card">
            <div className="experience__title">
                {props.longDescription !== "" &&
                    <div className="experience__btn" onClick={() => {
                        visible === true ? setVisible(false) : setVisible(true);
                    }}></div>
                }
                <span>{props.title}</span> / {parseDate(props.startDate)} - {parseDate(props.endDate)}
            </div>
            <div className="experience__subtitle">
                <span>{props.subtitle}</span> / {props.location}
            </div>
            <div className="experience__content">
                <div className="experience__front" colSpan="3">
                    {props.shortDescription}
                </div>
                {props.longDescription !== "" &&
                    <ul className={`experience__back${visible === true ? " experience__back--active" : ""}`}>
                        {parseLongDescription(props.longDescription)}
                    </ul>
                }
            </div>
        </div>
    );
}

class ExperienceList extends React.Component {
    renderList() {
        return (
            this.props.experiences.map((experience, i) => {
                const title = experience.school ? experience.school : experience.company;
                const subtitle = experience.degree ? experience.degree : experience.role;
                const longDescription = experience.long_description ? experience.long_description : "";

                return (
                    <ExperienceCard
                        title={title}
                        startDate={experience.start_date}
                        endDate={experience.end_date}
                        subtitle={subtitle}
                        location={experience.location}
                        shortDescription={experience.short_description}
                        longDescription={longDescription}
                        key={i}
                    />
                );
            })
        );
    }

    render() {
        return (
            <div className="experience__list">
                {this.renderList()}
            </div>
        );
    }
}

export default ExperienceList;

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

function parseLongDescription(longDescription) {
    const longDescriptionArray = longDescription.split(".");

    let list = [];

    for (let i = 0; i < longDescriptionArray.length - 1; i++) {
        list.push(
            <li
                className="experience__back--item"
                key={i}
            >
                {longDescriptionArray[i]}
            </li>
        );
    }

    return list;
}