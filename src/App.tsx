import React from 'react';
import './App.css';
// @ts-ignore
import avatar from './images/avatar.png';
// @ts-ignore
import art from './images/gummy-coding.png';
import Project from "./components/Project/Project";
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
            <section className="BackGroundDarkBlue MarginTop5 PaddingBot5">
                <img className="Art" src={art} alt="cute art"/>
                <h1>Hi, I’m Max. Nice to meet you.</h1>
                <p>Since beginning my journey as a freelance designer over 11 years ago, I've done remote</p>
                <p>work for agencies, consulted for startups, and collaborated with talented people to create</p>
                <p>digital products for both business and consumer use. I'm quietly confident, naturally</p>
                <p>curious, and perpetually working on improving my chops one design problem at a time.</p>
                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            </section>
            <section>
                <h1>My Skills</h1>
                <h2>Languages I speak:</h2>
                <p>HTML, CSS, JavaScript, TypeScript, Node.js, Git, C, C++ </p>
                <h2>Technologies I know:</h2>
                <p>React, Redux, JSON-server</p>
                <h2>Dev Tools:</h2>
                <p>GitHub, Vercel, Terminal, Bootstrap</p>
            </section>
            <section className="MarginTop5">
                <h1>My projects</h1>
                <div className="InLineFlexWrap SpaceBetween">
                    <Project name={"TypeScriptChess"} deployedLink={""} gitHubLink={"https://github.com/Kabadzh0b/TypeScriptChess"} description={"Interesting project"}/>
                    <Project name={"Match game"} deployedLink={"https://stormotion-internship-js-test-task-moa3.vercel.app/"} gitHubLink={""} description={"Match game"}/>
                    <Project name={"Book storage"} deployedLink={""} gitHubLink={"https://github.com/Kabadzh0b/Book-storage"} description={"Book app"}/>
                    <Project name={"Book storage"} deployedLink={""} gitHubLink={"https://github.com/Kabadzh0b/Book-storage"} description={"Book app"}/>
                    <Project name={"Book storage"} deployedLink={""} gitHubLink={"https://github.com/Kabadzh0b/Book-storage"} description={"Book app"}/>

                </div>
            </section>
        </div>
    );
}

export default App;
