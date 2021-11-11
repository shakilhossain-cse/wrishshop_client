import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Rating from "react-rating";

const Reviews = () => {
  return (
    <Container className="my-5 ">
      <h5 className="display-5 text-center py-3 my-5">Reviews</h5>
          <div className="p-5 bg-light rounded">
          <Carousel variant="dark"indicators={false} >
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
              initialRating={3}
              readonly
            />
            <h5 className="my-3">Third slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <img
              className="d-block items-center text-center rounded-circle"
              src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2020/06/tesm-3.jpg"
              width="50"
              height="50"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="text-center d-flex flex-column align-items-center">
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
              initialRating={2}
              readonly
            />
            <h5 className="my-3">Third slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <img
              className="d-block items-center text-center rounded-circle"
              src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2020/06/tesm-3.jpg"
              width="50"
              height="50"
            />
          </div>
        </Carousel.Item>
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
              initialRating={4}
              readonly
            />
            <h5 className="my-3">Third slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <img
              className="d-block items-center text-center rounded-circle"
              src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2020/06/tesm-3.jpg"
              width="50"
              height="50"
            />
          </div>
        </Carousel.Item>
      </Carousel>
      </div>
    </Container>
  );
};

export default Reviews;
