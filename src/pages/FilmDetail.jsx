import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

//*--Film Detail Component --*//
export default function FilmDetail() {
    const params = useParams()
    const [film, setFilm] = useState(null)
   

    useEffect(() => {
        fetch(`/api/films/${params.id}`)
            .then(res => res.json())
            .then(data => setFilm(data.films))
    }, [params.id])


    return (
        <div className="film-detail-container">
            {film ? (
                <div className="film-detail">
                    <img src={film.imageUrl} alt="" />
                    
                    <h2>{film.title}</h2>
                    <p>{film.plot}</p>
                    <p>IMDB Rating:  {film.imdbRating}</p>
                    <p>Year of Release: {film.year} </p>
                    <div><i className={`film-type ${film.genre} selected`}>{film.genre}</i></div> 
                    <br></br>
                    <div><button className="link-button">Download this film</button></div>
                    
                    
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}