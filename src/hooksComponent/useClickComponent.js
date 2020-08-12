import React, { useRef, useEffect } from "react";

const useClick = (onClick) => {
    const element = useRef();

    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }

        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);

    return element;
};

const UseClickComponent = () => {
    const sayHello = () => console.log("Say Hello!!");
    const title = useClick(sayHello);

    return <h1 ref={title}>Home</h1>;
};

export default UseClickComponent;
