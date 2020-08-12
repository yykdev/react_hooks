import React from "react";
import "./App.css";

import UseStateComponent from "./hooksComponent/useStateComponent";
import UseInputComponent from "./hooksComponent/useInputComponent";
import UseTabsComponent from "./hooksComponent/useTabsComponent";
// import UseEffectComponent from "./hooksComponent/useEffectComponent";
// import UseTitleComponent from "./hooksComponent/useTitleComponent";
import UseClickComponent from "./hooksComponent/useClickComponent";

function App() {
    return (
        <div className="App">
            <UseStateComponent />
            <UseInputComponent />
            <UseTabsComponent />
            {/* <UseEffectComponent /> */}
            {/* <UseTitleComponent /> */}
            <UseClickComponent />
        </div>
    );
}

export default App;
