import React, { useState } from "react";

const UseStateComponent = () => {
    const [count, setCount] = useState(0);
    const increament = () => setCount(count + 1);
    const decreament = () => setCount(count - 1);

    return (
        <div>
            <h1>Hello {count}</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button onClick={increament}>Icreament</button>
            <button onClick={decreament}>Decreament</button>
        </div>
    );
};

export default UseStateComponent;
