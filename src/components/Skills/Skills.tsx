import React from "react";
import Languages from "./Languages/Languages";
import Technologies from "./Technologies/Technologies";
import DevTools from "./DevTools/DevTools";

const Skills = () => {
    return(
        <div>
            <h1>My Skills</h1>
            <Languages/>
            <Technologies/>
            <DevTools/>
        </div>
    )
}
export default Skills;