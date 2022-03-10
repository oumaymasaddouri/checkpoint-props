import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Movie.css";
const Movie = ({ movie }) => {
  return (
    <div>
      <Card className="oneCard" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.image} alt="movie" />
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Rate: {movie.rating}</ListGroupItem>
          <ListGroupItem>Type: {movie.type}</ListGroupItem>
          <ListGroupItem>Date: {movie.date}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Watch now</Card.Link>
          <Card.Link href="#">Download</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;
