import React from "react";
import "./SkillGrid.css";

function SkillElt(props) {
    const delay = Math.floor(Math.random() * (200)).toString(10);

    const level = {
        backgroundColor: "#262626",
        width: props.skillLevel + "%",
        transitionDelay: delay + "ms"
    };

    const [setRef, triggerOnce] = useLazyAnimation({ threshold: 1 });

    return (
        <div className="skill__elt" ref={setRef}>
            <div className="skill__name">{props.skillName}</div>
            <div className="skill__bar">
                {!triggerOnce ?
                    <div className="skill__level start" style={level}></div>
                    :
                    <div className="skill__level end" style={level}></div>
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

// ========================================

function useLazyAnimation(options) {
    const [ref, setRef] = React.useState(null);
    const [triggerOnce, setTriggerOnce] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTriggerOnce(true);
            }
        }, options);

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };

    }, [ref, options]);

    return [setRef, triggerOnce];
}