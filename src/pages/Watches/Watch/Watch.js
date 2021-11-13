import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Watch = ({ watch }) => {
  return (
    <Col>
      <Card className="border-0">
        <Card.Img variant="top" src={watch.image} />
        <Card.Body className="text-center">
          <Card.Title>{watch.name}</Card.Title>
          <Card.Text>{watch.describtion}</Card.Text>
          <h4>${watch.price}</h4>
          <Link to={`/pharches/${watch._id}`}>
            <Button className="btn btn-outline-dark">Buy Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Watch;
