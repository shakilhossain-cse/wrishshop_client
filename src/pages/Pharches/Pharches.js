import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

const Pharches = () => {
  return (
    <Container>
      <h1 className="fs-1 my-5 border-bottom p-3">PHARCHES YOUR WATCH</h1>
      <Row>
        <Col sm={12} md={4}>
          <img
            src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/09/p11-450x450.jpg"
            alt="watch"
            className="img-fluid"
          />
          <h4 className="my-3">PRICE: $12</h4>
        </Col>
        <Col sm={12} md={8}>
          <Form className="w-100">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value="Shakil" id="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value="shakilhossainp.cse@gmail.com"
                id="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value="Paul Hewitt Miss Ocean"
                id="productName"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="describtion">
              <Form.Label>Product Describtion</Form.Label>
              <Form.Control as="textarea" rows={3} id="describtion" value=""/>
            </Form.Group>
            <Button variant="primary" className="w-100" type="submit">
              Pharches
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Pharches;
