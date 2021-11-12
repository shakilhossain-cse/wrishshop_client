import React from "react";
import { Form, Button } from "react-bootstrap";
import Rating from "react-rating";

const Review = () => {
  return (
    <Form className="w-100">
      <Form.Group className="mb-3" controlId="describtion">
        <Form.Label>Selate Star</Form.Label><br/>
        <Rating
           emptySymbol={
            <img
              src="https://dreyescat.github.io/react-rating/assets/images/star-empty.png"
              className="icon"
              alt="empty start"
            />
          }
          fullSymbol={
            <img
              src="http://dreyescat.github.io/react-rating/assets/images/star-full.png"
                  className="icon"
                  alt="empty start"
            />
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="describtion">
        <Form.Label>Review</Form.Label>
        <Form.Control as="textarea" rows={3} id="describtion" value="" />
      </Form.Group>
      <Button variant="primary" className="w-100" type="submit">
        Add Review
      </Button>
    </Form>
  );
};

export default Review;
