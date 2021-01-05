import React from "react";
import "./SkillGrid.css";

function SkillElt(props) {
    const level = {
        backgroundColor: "#262626",
        width: props.skillLevel + "%",
    };

    return (
        <div className="skill__elt">
            <span className="skill__name">{props.skillName}</span>
            <div className="skill__bar">
                <div className="skill__level" style={level}></div>
            </div>
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
                        skillLevel={skill.level}
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