import React from "react";

export const useMountEffect = (fn: Function) => {
    const mounted = React.useRef(false);
    return React.useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            return fn && fn();
        }
    }, []);
}