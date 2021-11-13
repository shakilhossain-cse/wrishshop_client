import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Watch from "./Watch/Watch";

const Watches = () => {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("https://vast-citadel-29612.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  return (
    <Container>
      <h5 className="text-center display-5 my-5">Watch Collection</h5>
      <div className=" p-4 text-end"></div>
      <Row xs={1} sm={2} md={3} className="g-4">
        {watches.map((watch) => (
          <Watch watch={watch} />
        ))}
      </Row>
    </Container>
  );
};

export default Watches;
