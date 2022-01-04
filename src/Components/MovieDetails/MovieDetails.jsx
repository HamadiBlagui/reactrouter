import React, { useEffect, useState} from 'react'
import { useHistory,useParams } from 'react-router-dom'
import MoviesData from '../MoviesData/MoviesData'
import { Button } from 'react-bootstrap'
import './MovieDetails.css'





const MovieDetails = () => {
    const [movie,setMovie]=useState({})
    let {id}=useParams()
    useEffect(()=>{setMovie(MoviesData.find(movie=>movie.id===id))})
    let history = useHistory()
    return (
        <div>
            <h1>{movie.title} </h1>
            <iframe width="560" height="315" src= {movie.trailer}
            title="YouTube video player"
             frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowVFullScreen></iframe>
             <center>
             <Button variant="danger" onClick={()=>history.push("/")} >Back Home</Button>
                </center>
            
        </div>
    )
}

export default MovieDetails
