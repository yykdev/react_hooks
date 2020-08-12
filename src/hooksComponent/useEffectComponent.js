import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    const sayHello = () => console.log("Hello");

    useEffect(() => {
        sayHello();
    }, []);

    return (
        <div>
            <button onClick={() => setFirst(first + 1)}>{first}</button>
            <button onClick={() => setSecond(second + 1)}>{second}</button>
        </div>
    );
};

export default UseEffectComponent;
