import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Col>
      <Card className="border-0">
        <Card.Img variant="top" src={product.image} />
        <Card.Body className="text-center">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>This is a longer card with supporting</Card.Text>
          <h4>${product.price}</h4>
          <Link to={`/pharches/${product._id}`}>
            <Button className="btn btn-outline-dark">Buy Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
