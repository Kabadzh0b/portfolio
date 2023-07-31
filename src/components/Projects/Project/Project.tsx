import {ProjectProps} from "../../../types/ProjectProps";
import './Project.css'

const Project = ({name, deployedLink, gitHubLink, description}: ProjectProps) => {
    return (
        <div className="Project">
            <h1 className="Name">{name}</h1>
            <h2>Deployed:{deployedLink ? <a className="Link" href={deployedLink}>link</a> : "none"}</h2>
            <h2>GitHub:<a className="Link" href={gitHubLink}>link</a></h2>
            <p>{description}</p>
        </div>
    )
}

export default Project;