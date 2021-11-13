import React from "react";
import { Col, Container, ListGroup, Row, Box } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Review from "./Review/Review";
import AddProduct from "./AddProduct/AddProduct";
import MakeADmin from "./MakeAdmin/MakeADmin";
import AllOrder from "./AllOrder/AllOrder";
import MyOrder from "./MyOrder/MyOrder";
import ProductList from "./ProductList/ProductList";
import AdminRoute from "../../Routes/AdminRoute";

const Dashboard = () => {
  const { user, admin } = useAuth();

  let { path, url } = useRouteMatch();
  return (
    <Container className="my-5">
      <Row className="border  py-5">
        <Col md={3} className="mb-4">
          <ListGroup>
            {admin && (
              <>
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
                  All Order
                </ListGroup.Item>
              </>
            )}

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
              <h3 className="text-center">Hello {user.displayName}</h3>
              <h6 className="text-center"> Your Role :{admin?"Admin":"Member"}</h6>
            </Route>
            <AdminRoute path={`${path}/addproduct`}>
              <AddProduct />
            </AdminRoute>
            <AdminRoute path={`${path}/productlist`}>
              <ProductList />
            </AdminRoute>
            <AdminRoute path={`${path}/makeadmin`}>
              <MakeADmin />
            </AdminRoute>
            <AdminRoute path={`${path}/allorders`}>
              <AllOrder />
            </AdminRoute>
            <Route path={`${path}/myorder`}>
              <MyOrder />
            </Route>
            <Route path={`${path}/review`}>
              <Review />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;
