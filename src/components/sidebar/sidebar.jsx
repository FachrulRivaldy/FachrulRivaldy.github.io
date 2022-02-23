import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import * as AiIcons from "react-icons/ai"
import { ExternalLink } from 'react-external-link';

function Sidebar(){
    return (
        <div className="sidebar">
            <div>
            <ExternalLink href="https://github.com/FachrulRivaldy" className="icons">
                <AiIcons.AiFillGithub/>
            </ExternalLink>    
            </div>
            <div>
                <ExternalLink href="https://www.linkedin.com/in/fachrulrivaldy/" className="icons">
                    <AiIcons.AiFillLinkedin/>
                </ExternalLink>
            </div>
            <div>
                <ExternalLink href="https://www.instagram.com/fachrulrivaldy/" className="icons">
                    <AiIcons.AiFillInstagram/>
                </ExternalLink>
            </div>
            <div className="v1"></div>
        </div>
    );
}

export default Sidebar;