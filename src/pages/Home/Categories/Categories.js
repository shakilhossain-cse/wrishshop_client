import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Categories = () => {
  return (
      <Container>
           <h5 className="display-5 text-center py-3 my-5">Categories</h5>
      <Row>
        <Col xs={6} md={3} className="text-center">
          <img
            src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/5.jpg"
                      alt=""
                      className="rounded-circle"
                  />
               <h6 className="my-3">MASERATI</h6>   
        </Col>
        <Col xs={6} md={3} className="text-center">
          <img
            src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/5.jpg"
                      alt=""
                      className="rounded-circle"
                  />
               <h6 className="my-3">MASERATI</h6>   
        </Col>
        <Col xs={6} md={3} className="text-center">
          <img
            src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/5.jpg"
                      alt=""
                      className="rounded-circle"
                  />
               <h6 className="my-3">MASERATI</h6>   
        </Col>
        <Col xs={6} md={3} className="text-center">
          <img
            src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/5.jpg"
                      alt=""
                      className="rounded-circle"
                  />
               <h6 className="my-3">MASERATI</h6>   
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
