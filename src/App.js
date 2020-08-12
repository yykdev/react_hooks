import React from "react";
import "./App.css";

import UseStateComponent from "./hooksComponent/useStateComponent";
import UseInputComponent from "./hooksComponent/useInputComponent";
import UseTabsComponent from "./hooksComponent/useTabsComponent";
import UseEffectComponent from "./hooksComponent/useEffectComponent";

function App() {
    return (
        <div className="App">
            <UseStateComponent />
            <UseInputComponent />
            <UseTabsComponent />
            <UseEffectComponent />
        </div>
    );
}

export default App;
