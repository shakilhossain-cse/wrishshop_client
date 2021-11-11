import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Products = () => {
  return (
    <Container>
      <h5 className="text-center display-5 my-5">Watch Collection</h5>
      <Row xs={1} sm={2} md={4} className="g-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/09/p11-450x450.jpg"
              />
              <Card.Body className="text-center">
                <Card.Title>Paul Hewitt Miss Ocean</Card.Title>
                <Card.Text>
                  This is a longer card with supporting
                </Card.Text>
                <h4>$199.00</h4>
                <Button className="btn btn-outline-dark">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
