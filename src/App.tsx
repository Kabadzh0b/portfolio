import React from 'react';
import './App.css';
// @ts-ignore
import avatar from './images/avatar.png';

function App() {
    return (
        <div className="App">
            <div className="NavBar">
                <button className="NavBarItem">Logo</button>
                <div className="NavBarMenu">
                    <button className="NavBarItem">My projects</button>
                    <button className="NavBarItem">Say Hello</button>
                </div>
            </div>
            <section className="Hero">
                <div className="HeroHeader">
                    <h1>Frontend Developer</h1>
                    <p>I design and code beautifully simple things, and I love what I do.</p>
                </div>
                <img src={avatar} alt="my avatar"/>
            </section>
        </div>
    );
}

export default App;
