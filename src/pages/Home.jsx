import React from "react"
import { Link } from "react-router-dom"


//*-- Home Component --*
export default function Home() {
    return (
        <div className="home-container">
            <h1>Transport your life with our Films.</h1>
            <p>Stream the perfect movie and let it  take you away to a different time and place.</p>
            <Link to="films">Find your film</Link>
        </div>
    )
};