import React from "react";
import useLazyAnimation from "./Animation";
import "./SoftSkills.css";

function SoftSkillElt(props) {
    const delay = Math.floor(Math.random() * (300));
    const rotationDeg = 180 * (1 - (props.softSkillLevel / 50));

    const circle = {
        transform: "translate(-100%, -50%) rotate(180deg)",
        transitionDelay: delay.toString(10) + "ms"
    }

    const level = {
        opacity: 1,
        transform: `rotate(${rotationDeg}deg)`,
        transitionDelay: (440 + delay).toString(10) + "ms",
    };

    const [setRef, triggerOnce] = useLazyAnimation({ threshold: 1 });

    return (
        <div className="softskills__elt" ref={setRef}>
            <div className="softskills__name">
                {props.softSkillName}
            </div>
            {!triggerOnce ?
                <div className="softskills__circle"></div>
                :
                <div className="softskills__circle" style={circle}></div>
            }
            {!triggerOnce ?
                <div className="softskills__cache">
                    {props.softSkillLevel > 50 &&
                        <div className="softskills__level"></div>
                    }
                </div>
                :
                <div className="softskills__cache">
                    {props.softSkillLevel > 50 &&
                        <div className="softskills__level" style={level}></div>
                    }
                </div>
            }
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
                        softSkillLevel={softSkill.level}
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