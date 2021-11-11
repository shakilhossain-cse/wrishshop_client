import Button from "@restart/ui/esm/Button";
import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/slider-2-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption
          style={{
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h6>TIMELESS & ELEGENT</h6>
          <h1>NEW ARRIVALS</h1>
          <p>Complate your everyday look with a classic leather strap watch</p>
          <Button variant="light" className="border-0 px-3 py-2">SHOP NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/slider-3-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption
          style={{
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h6>TIMELESS & ELEGENT</h6>
          <h1>BEST SELLER</h1>
          <p>Complate your everyday look with a classic leather strap watch</p>
          <Button variant="light" className="border-0 px-3 py-2">SHOP NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/slider-1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption
          style={{
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
           <h6>TIMELESS & ELEGENT</h6>
          <h1>THE CLASSIC</h1>
          <p>Complate your everyday look with a classic leather strap watch</p>
          <Button variant="light" className="border-0 px-3 py-2">SHOP NOW</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
