import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "./Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <h5 className="text-center display-5 my-5">Watch Collection</h5>
      <div className=" p-4 text-end">
        <Link to="/watches" className="btn btn-dark">
          Explore All Watch
        </Link>
      </div>
      <Row xs={1} sm={2} md={3} className="g-4">
        {
          products.slice(0, 6).map(product => <Product product={product} />)
        }
        
      </Row>
    </Container>
  );
};

export default Products;
