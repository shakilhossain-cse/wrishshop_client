import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";

const AddProduct = () => {
  const name = useRef();
  const price = useRef();
  const image = useRef();
  const describtion = useRef();
  // const history = useHistory();
  const productHandeler = (e) => {
    e.preventDefault();
    const data = {
      name: name.current.value,
      price: price.current.value,
      image: image.current.value,
      describtion: describtion.current.value,
    };

    fetch("https://vast-citadel-29612.herokuapp.com/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Data Added");
        }
      });
  };
  return (
    <Form className="w-100" onSubmit={productHandeler}>
      <Form.Group className="mb-3" controlId="productName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" id="productName" ref={name} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Product Image Link</Form.Label>
        <Form.Control type="text" id="image" ref={image} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="number" id="price" ref={price} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="describtion">
        <Form.Label>Product Describtion</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          id="describtion"
          ref={describtion}
          required
        />
      </Form.Group>
      <Button variant="primary" className="w-100" type="submit">
        Add Product
      </Button>
    </Form>
  );
};

export default AddProduct;
