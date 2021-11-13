import React, { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import Rating from "react-rating";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Container className="my-5 ">
      <h5 className="display-5 text-center py-3 my-5">Reviews</h5>
      <div className="p-5 bg-light rounded">
        <Carousel variant="dark" indicators={false}>
          {reviews.map((review) => (
            <Carousel.Item>
              <div className="text-center d-flex flex-column align-items-center">
                <Rating
                  emptySymbol={
                    <img
                      src="https://dreyescat.github.io/react-rating/assets/images/star-empty.png"
                      className="icon"
                    />
                  }
                  fullSymbol={
                    <img
                      src="http://dreyescat.github.io/react-rating/assets/images/star-full.png"
                      className="icon"
                    />
                  }
                  initialRating={review.rating}
                  readonly
                />
                <h5 className="my-3">{review.userName}</h5>
                <p>{review.review}</p>
                <img
                  className="d-block items-center text-center rounded-circle"
                  src={review.userImg}
                  width="50"
                  height="50"
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default Reviews;
