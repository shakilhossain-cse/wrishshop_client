import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Pharches = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [getParches, setGetParches] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/pharches/${id}`)
      .then((res) => res.json())
      .then((data) => setGetParches(data))
      .catch(() => {
        setGetParches({});
      });
  }, []);

  const buyHandeler = e => {
    e.preventDefault();
    const detiles = {
      userEmail: user.email,
      name: getParches.name,
      price: getParches.price,
      describtion: getParches.describtion,
      image: getParches.image,
      status: 1,
    };
    fetch("http://localhost:5000/pharches", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(detiles),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Congratulation You buy a Watch");
        }
      });
  };
  return (
    <Container>
      <h1 className="fs-1 my-5 border-bottom p-3">PHARCHES YOUR WATCH</h1>
      <Row>
        <Col sm={12} md={4}>
          <img src={getParches.image} alt="watch" className="img-fluid" />
          <h4 className="my-3">PRICE: ${getParches.price}</h4>
        </Col>
        <Col sm={12} md={8}>
          <Form className="w-100" onSubmit={buyHandeler}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={user.displayName} id="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={user.email} id="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={getParches.name}
                id="productName"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="describtion">
              <Form.Label>Product Describtion</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="describtion"
                value={getParches.describtion}
              />
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
