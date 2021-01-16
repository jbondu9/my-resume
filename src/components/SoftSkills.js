import React from "react";
import "./SoftSkills.css";

function SoftSkillElt(props) {
    return (
        <div className="softskill__elt">
            <div className="softskill__name">
                <span>{props.softSkillName}</span>
            </div>
        </div>
    );
}

class SoftSkills extends React.Component {
    renderSoftSkillList() {
        return (
            this.props.softSkills.map((softSkill, i) => {
                return (
                    <SoftSkillElt
                        softSkillName={softSkill.name}
                        key={i}
                    />
                );
            })
        );
    }

    render() {
        return (
            <div className="softskills__content">
                {this.renderSoftSkillList()}
            </div>
        );
    }
}

export default SoftSkills;