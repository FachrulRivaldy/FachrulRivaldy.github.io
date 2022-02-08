import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import * as AiIcons from "react-icons/ai"

function Sidebar(){
    return (
        <div className="sidebar">
            <div>
                <Link to="https://github.com/FachrulRivaldy" className="icons">
                    <AiIcons.AiFillGithub/>
                </Link>
            </div>
            <div>
                <Link to="https://www.linkedin.com/in/fachrulrivaldy/" className="icons">
                    <AiIcons.AiFillLinkedin/>
                </Link>
            </div>
            <div>
                <Link to="https://www.instagram.com/fachrulrivaldy/" className="icons">
                    <AiIcons.AiFillInstagram/>
                </Link>
            </div>
            <div className="v1"></div>
        </div>
    );
}

export default Sidebar;