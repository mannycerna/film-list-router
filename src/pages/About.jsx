import React from "react"
import bgImg from "../assets/images/Enjoy-Movie-Home.png"
import { Link } from "react-router-dom"


//*-- About Component --*//
export default function About() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image" alt=""/>
            <div className="about-page-content">
                <h1>Watch a movie from the comfort of your own vehicle.</h1>
                <p>Our films are produced to enhance the world around you.</p>
                <p>Please view our list of available films and select one that interests you.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your film is waiting for you.<br />Ready, Set, Watch....</h2>
                <Link className="link-button" to="/films">Explore our films</Link>
            </div>
        </div>
    );
}