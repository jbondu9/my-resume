import React from "react";
import Profil from "./components/Profil";
import Section from "./components/Section";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import SoftSkills from "./components/SoftSkills";
import ExperienceList from "./components/ExperienceList";
import SkillGrid from "./components/SkillGrid";
import PublicationList from "./components/PublicationList";
import "./App.css";

import Data from "./data/data.json";

import IntroIcon from "./icons/intro.png";
import ContactIcon from "./icons/contact.png";
import SoftSkillsIcon from "./icons/personal.png";
import ExperienceIcon from "./icons/experiences.png";
import EducationIcon from "./icons/education.png";
import SkillsIcon from "./icons/skills.png";
import PublicationIcon from "./icons/publications.png";

function App() {
    return (
        <div className="container">    
            <div className="left">
                <Profil
                    id="profil"
                    forename={Data.profil.forename}
                    surname={Data.profil.surname}
                    role={Data.profil.role}
                />
                <Section
                    id="about"
                    title="Intro"
                    src={IntroIcon}
                    alt="Icône de la section intro"
                    content={<Intro intro={Data.intro} />}
                />
                <Section
                    id="contact"
                    title="Contact"
                    src={ContactIcon}
                    alt="Icône de la section contact"
                    content={<Contact data={Data.contact} />}
                />
                <Section
                    id="soft-skills"
                    title="Profil"
                    src={SoftSkillsIcon}
                    alt="Icône de la section aptitudes"
                    content={<SoftSkills softSkills={Data.soft_skills} />}
                />
            </div>
            <div className="right">
                <Section
                    id="professional-experiences"
                    title="Expériences professionnelles"
                    src={ExperienceIcon}
                    alt="Icône de la section expériences professionnelles"
                    content={<ExperienceList experiences={Data.professional_experiences} />}
                />
                <Section
                    id="education"
                    title="Formation"
                    src={EducationIcon}
                    alt="Icône de la section formation"
                    content={<ExperienceList experiences={Data.education} />}
                />
                <Section
                    id="skills"
                    title="Compétences"
                    src={SkillsIcon}
                    alt="Icône de la section compétences"
                    content={<SkillGrid skills={Data.skills} />}
                />
                <Section
                    id="publications"
                    title="Publications"
                    src={PublicationIcon}
                    alt="Icône de la section publications"
                    content={<PublicationList publications={Data.publications} />}
                />
            </div>
        </div>
    );
}

export default App;