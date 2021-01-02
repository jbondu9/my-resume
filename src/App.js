import React from "react";
import Section from "./components/Section";
import ExperienceList from "./components/ExperienceList";
import SkillGrid from "./components/SkillGrid"
import "./App.css";

import Data from "./data/data.json";

import ExperienceIcon from "./icons/experiences.png";
import EducationIcon from "./icons/education.png";
import SkillsIcon from "./icons/skills.png";

function App() {
    return (
        <div className="right">
            <Section
                title="Expériences professionnelles"
                src={ExperienceIcon}
                alt="Icône de la section expériences professionnelles"
                content={<ExperienceList experiences={Data.professional_experiences} />}
            />
            <Section
                title="Formation"
                src={EducationIcon}
                alt="Icône de la section formation"
                content={<ExperienceList experiences={Data.education} />}
            />
            <Section
                title="Compétences"
                src={SkillsIcon}
                alt="Icône de la section compétences"
                content={<SkillGrid skills={Data.skills} />}
            />
        </div>
    );
}

export default App;