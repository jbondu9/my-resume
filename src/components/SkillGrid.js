import React from "react";
import useLazyAnimation from "./Animation";
import "./SkillGrid.css";

function SkillElt(props) {
    const delay = Math.floor(Math.random() * (200)).toString(10);

    const levelEnd = {
        transform: `translateX(calc(${props.skillLevel - 100}% - 10px))`,
        transitionDelay: delay + "ms"
    };

    const [setRef, triggerOnce] = useLazyAnimation({ threshold: .8 });

    return (
        <div className="skill__elt" ref={setRef}>
            <div className="skill__name">{props.skillName}</div>
            <div className="skill__bar">
                {!triggerOnce ?
                    <div className="skill__level"></div>
                    :
                    <div className="skill__level" style={levelEnd}></div>
                }
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