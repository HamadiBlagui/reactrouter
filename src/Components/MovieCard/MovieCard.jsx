import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';




function MovieCard({movie}) {
  console.log(movie)
    return (
        <div>
            <Card style={{ width: '20rem' , color:'#263B64'}}>
  <Card.Img variant="top" src={movie.posterUrl}style={{ width: '20rem' ,height:'20rem' }} alt="logo"  />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text style={{height:'10rem'}}>{movie.description}</Card.Text>
  </Card.Body>
  <h3>{"⭐".repeat(movie.rating)}</h3>
  <Link to={`/details/${movie.id}`}  >
  <Button variant="danger">Trailer </Button>
  </Link>
</Card>
            
        </div>
    )
}

export default MovieCard
