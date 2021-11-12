import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import {Switch,Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ShowItem from "./ShowItem/ShowItem";

const Dashboard = () => {
  const {user} = useAuth()
  let { path, url } = useRouteMatch();
  return (
    <Container className="my-5">
      <Row className="border  py-5">
        <Col md={3} className="mb-4">
          <ListGroup>
            <ListGroup.Item as={Link} to={`${url}/addproduct`}>
              Add Product
            </ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/productlist`}>
              Product List
            </ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/makeadmin`}>
              Make Admin
            </ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/allorders`}>
              All Orders
            </ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/myorder`}>
              My Order
            </ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/review`}>
              Review
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          <Switch>
            <Route exact path={path}>
              <h3 className="text-center">Hello {user.displayName }</h3>
            </Route>
            <Route path={`${path}/:Topic`}>
              <ShowItem />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;
