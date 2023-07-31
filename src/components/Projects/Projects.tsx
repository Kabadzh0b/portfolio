import Project from "./Project/Project";
import React from "react";

const Projects = () => {
    return (
        <div className="MarginTop5">
            <h1>My projects</h1>
            <div className="InLineFlexWrap SpaceBetween">
                <Project name={"TypeScriptChess"} deployedLink={""}
                         gitHubLink={"https://github.com/Kabadzh0b/TypeScriptChess"}
                         description={"Interesting project"}/>
                <Project name={"Match game"}
                         deployedLink={"https://stormotion-internship-js-test-task-moa3.vercel.app/"} gitHubLink={""}
                         description={"Match game"}/>
                <Project name={"Book storage"} deployedLink={""}
                         gitHubLink={"https://github.com/Kabadzh0b/Book-storage"} description={"Book app"}/>
                <Project name={"Book storage"} deployedLink={""}
                         gitHubLink={"https://github.com/Kabadzh0b/Book-storage"} description={"Book app"}/>
                <Project name={"Book storage"} deployedLink={""}
                         gitHubLink={"https://github.com/Kabadzh0b/Book-storage"} description={"Book app"}/>
            </div>
        </div>
    )
}

export default Projects;