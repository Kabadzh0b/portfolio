import Project from "./Project/Project";
import React from "react";
import './Projects.css'

const Projects = () => {
    return (
        <div className="Projects">
            <h1 className="ProjectsHeader">My projects</h1>
            <div className="ProjectsContainer InLineFlexWrap SpaceEvenly">
                <Project name={"TypeScriptChess"} deployedLink={""}
                         gitHubLink={"https://github.com/Kabadzh0b/TypeScriptChess"}
                         description={"Web chess"}/>
                <Project name={"Match game"}
                         deployedLink={"https://stormotion-internship-js-test-task-moa3.vercel.app/"} gitHubLink={""}
                         description={"Match game"}/>
                <Project name={"Book storage"} deployedLink={""}
                         gitHubLink={"https://github.com/Kabadzh0b/Book-storage"} description={"Book app"}/>
                <Project name={"Recipe App"} deployedLink={""}
                         gitHubLink={"https://github.com/Kabadzh0b/Recipe-Management-App"} description={"You can storage your recipes here"}/>
                <Project name={"Kabot"} deployedLink={""}
                         gitHubLink={"https://github.com/Kabadzh0b/Kabot"} description={"Mafia and Bunker discord bot"}/>
            </div>
        </div>
    )
}

export default Projects;