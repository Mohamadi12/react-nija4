import React from 'react'
import {Button, Card} from 'react-bootstrap';
const MovieCard = ({movie}) => {
  return (
    <div>
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.imga} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.rate}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}

export default MovieCard
