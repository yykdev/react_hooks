import React, { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <h1>Hello {count}</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button onClick={() => setCount(count + 1)}>Icreament</button>
            <button onClick={() => setCount(count - 1)}>Decreament</button>
        </div>
    );
}

export default App;
