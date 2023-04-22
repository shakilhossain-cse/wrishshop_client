import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import Rating from "react-rating";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  console.log(user);
  const rating = useRef();
  const review = useRef();
  const imageUrl =
    user.photoURL ||
    "https://cdn1.vectorstock.com/i/1000x1000/19/45/user-avatar-icon-sign-symbol-vector-4001945.jpg";
  const reviewHandeler = (e) => {
    e.preventDefault();
    const data = {
      rating: rating.current.state.value,
      review: review.current.value,
      userName: user.displayName,
      userImg: imageUrl,
    };
    fetch("https://wrishshop.onrender.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Review Added");
        }
      });
  };
  return (
    <Form className="w-100" onSubmit={reviewHandeler}>
      <Form.Group className="mb-3" controlId="describtion">
        <Form.Label>Selate Star</Form.Label>
        <br />
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
          ref={rating}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="describtion">
        <Form.Label>Review</Form.Label>
        <Form.Control as="textarea" rows={3} id="describtion" ref={review} />
      </Form.Group>
      <Button variant="primary" className="w-100" type="submit">
        Add Review
      </Button>
    </Form>
  );
};

export default Review;
