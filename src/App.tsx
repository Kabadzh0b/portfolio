import React from 'react';
import './App.css';
// @ts-ignore
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Introduction from "./components/introduction/Introduction";
import Information from "./components/Information/Information";

function App() {
    return (
        <div className="App">
            <Introduction/>
            <Information/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;
