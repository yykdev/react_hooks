import React from "react";
import "./App.css";

import UseStateComponent from "./hooksComponent/useStateComponent";
import UseInputComponent from "./hooksComponent/useInputComponent";

function App() {
    return (
        <div className="App">
            <UseStateComponent />
            <UseInputComponent />
        </div>
    );
}

export default App;
