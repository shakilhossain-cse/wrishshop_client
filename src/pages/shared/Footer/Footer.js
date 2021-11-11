import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="bg-light py-5 mt-5">
            <Container >
                <Row className="text-center">
                    <Col xs={12} sm={6} md={4}>
                        <h6>INFORMATION</h6>
                        <p className="text-muted">shiping</p>
                        <p className="text-muted">Warranty & Authenticity</p>
                        <p className="text-muted">Terms & Conditions</p>
                        <p className="text-muted">Privacy Policy</p>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                    <h6>HELP</h6>
                        <p className="text-muted">Contact Us</p>
                        <p className="text-muted">About Us</p>
                        <p className="text-muted">Reviews</p>
                        <p className="text-muted">Terms of Service</p>
                        <p className="text-muted">Refund policy Contact</p>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <h6>SERVICES</h6>
                        <p className="text-muted">Sale</p>
                        <p className="text-muted">Quick Ship</p>
                        <p className="text-muted">New Designs</p>
                        <p className="text-muted">Gift Cards</p>
                        <p className="text-muted">Protection Plan</p>
                    </Col>
                </Row>
           </Container>
        </div>
    )
}
export default Footer;
