import React from "react";
import Languages from "./Languages/Languages";
import Technologies from "./Technologies/Technologies";
import DevTools from "./DevTools/DevTools";
import './Skills.css';

const Skills = () => {
    return(
        <div className="SkillsContainer">
            <h1>My Skills</h1>
            <ul className="SkillList">
                <Languages/>
                <Technologies/>
                <DevTools/>
            </ul>
        </div>
    )
}
export default Skills;