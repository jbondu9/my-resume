import React from "react";

export default function useLazyAnimation(options) {
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