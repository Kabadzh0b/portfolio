// @ts-ignore
import art from "../../images/gummy-coding.png";
import React from "react";
import './Information.css';

const Information = () => {
    return (
        <div className="BackGroundDarkBlue">
            <img className="Art" src={art} alt="cute art"/>
            <h1>Hi, I’m Max. Nice to meet you.</h1>
            <p>Since beginning my journey as a freelance designer over 11 years ago, I've done remote<br/>
                work for agencies, consulted for startups, and collaborated with talented people to create<br/>
                digital products for both business and consumer use. I'm quietly confident, naturally<br/>
                curious, and perpetually working on improving my chops one design problem at a time.<br/>
                I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
        </div>
    )
}

export default Information;