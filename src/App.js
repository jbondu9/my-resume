import React from "react";
import Section from "./components/Section";
import ExperienceCard from "./components/ExperienceCard";
import "./App.css";

import Data from "./data/data.json";

import ExperienceIcon from "./icons/experiences.png"; 
import EducationIcon from "./icons/education.png";

function App() {
    return (
        <div className="right">
            <Section
                title="Expériences professionnelles"
                src={ExperienceIcon}
                alt="Icône de la section expériences professionnelles"
                content={Data.professional_experiences.map((experience, i) => {
                    return (
                        <ExperienceCard
                            title={experience.company}
                            startDate={experience.start_date}
                            endDate={experience.end_date}
                            subtitle={experience.role}
                            location={experience.location}
                            shortDescription={experience.short_description}
                            longDescription={experience.long_description}
                            key={i}
                        />
                    );
                })}
            />
            <Section
                title="Formation"
                src={EducationIcon}
                alt="Icône de la section formation"
                content={Data.education.map((degree, i) => {
                    return (
                        <ExperienceCard
                            title={degree.school}
                            startDate={degree.start_date}
                            endDate={degree.end_date}
                            subtitle={degree.degree}
                            location={degree.location}
                            shortDescription={degree.short_description}
                            key={i}
                        />
                    );
                })}
            />
        </div>
    );
}

export default App;