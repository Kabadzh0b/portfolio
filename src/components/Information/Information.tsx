// @ts-ignore
import art from "../../images/gummy-coding.png";
import React from "react";
import './Information.css';

const Information = () => {
    return (
        <div className="BackGroundDarkBlue">
            <img className="Art" src={art} alt="cute art"/>
            <h1>Hi, I’m Max. Nice to meet you.</h1>
            <p>Since beginning my journey as a developer over a year ago, I've done a lot of projects<br/>
                for improving my skills, consulted with a strong developers, and collaborated with talented people.<br/>
                I'm quietly confident, naturally curious, and perpetually working on improving my skills<br/>
                I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
        </div>
    )
}

export default Information;