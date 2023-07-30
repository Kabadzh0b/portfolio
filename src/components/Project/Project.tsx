import {ProjectProps} from "../../types/ProjectProps";
import './Project.css'
const Project = ({name, link, description}:ProjectProps) => {
    return (
        <div className="Project">
            <a className="Link" href={link ? link : ""}>{name}</a>
            <p>{description}</p>
        </div>
    )
}

export default Project;