import React from "react";
import useLazyAnimation from "./Animation";
import "./SoftSkills.css";

function SoftSkillElt(props) {
    const rotationDeg = 180 * (1 - (props.softSkillLevel / 50));
    const delay = Math.floor(Math.random() * (200));

    const circle = {
        transform: "translate(-100%, -50%) rotate(180deg)",
        transitionDelay: delay + "ms",
        transitionDuration: "250ms"
    }

    const level = {
        transform: `rotate(${rotationDeg}deg)`,
        opacity: 1,
        transitionDelay: (250 + delay).toString(10) + "ms",
        transitionProperty: "transform, opacity",
        transitionDuration: "250ms, 0ms"
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