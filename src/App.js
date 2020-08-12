import React from "react";
import "./App.css";

import UseStateComponent from "./hooksComponent/useStateComponent";
import UseInputComponent from "./hooksComponent/useInputComponent";
import UseTabsComponent from "./hooksComponent/useTabsComponent";

function App() {
    return (
        <div className="App">
            <UseStateComponent />
            <UseInputComponent />
            <UseTabsComponent />
        </div>
    );
}

export default App;
