import React from "react";
import "./SkillGrid.css";

function SkillElt(props) {
    return (
        <div className="skill__elt">
            <span>{props.skillName}</span>
        </div>
    );
}

class SkillGrid extends React.Component {
    renderSkillList() {
        return (
            this.props.skills.map((skill, i) => {
                return (
                    <SkillElt
                        skillName={skill.name}
                        key={i}
                    />
                );
            })
        );
    }

    render() {
        return (
            <div className="skill__grid">
                {this.renderSkillList()}
            </div>
        );
    }
}

export default SkillGrid;