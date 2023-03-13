import React from "react"
import { Link } from "react-router-dom"
import {useState, useEffect,} from "react"

export default function Films() {
    const [films, setFilms] = useState([])
    useEffect(() => {
        fetch("/api/films")
            .then(res => res.json())
            .then(data => setFilms(data.films))
    }, [])

    function handleRemove(id) {
        const newFilmList = films.filter(film => film.id !== id);

        setFilms(newFilmList);

    }

    const filmElements = films.map(film => (
        <div key={film.id} className="film-tile">
            <Link to={`/films/${film.id}`}>
                {/* <img src={film.imageUrl} alt="" /> */}
                <div className="film-info">
                    <h1>{film.title}</h1>
                    <p>Actors: {film.actors}</p>
                    <p>Director: {film.director}</p>
                    <p>Date Added:  {film.dateAdded}</p>
               
                    

                </div>
                <p className={`film-type ${film.genre} selected`}>{film.genre}</p>            
            </Link>
            <div>
                <button className="film-remove"  type="button" onClick={() => handleRemove(film.id)}>Remove</button> 
                </div>  
        </div>
    ))

      

    return (
        <div className="film-list-container">
            <h1>Explore our film options</h1>
            <div className="film-list">
                {filmElements}
            </div>
        </div>
    )
}