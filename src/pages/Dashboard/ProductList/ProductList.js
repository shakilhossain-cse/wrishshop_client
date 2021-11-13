import React, { useState, useEffect } from "react";
import { Table, Button, Spinner } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";

const ProductList = () => {
  const [getAllProducts, setGetAllProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setGetAllProducts(data));
  }, []);

  const deleteHandelerFromUi = (item) => {
    const removeItem = getAllProducts.filter((product) => product._id != item);
    setGetAllProducts(removeItem);
  };
  const deleteHandeler = (id) => {
    const confirmation = window.confirm("Are you sure to delete??");
    if (confirmation) {
      deleteHandelerFromUi(id);
      fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json)
        .then((data) => alert("Your Data Delete Successfully"));
    }
  };
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {getAllProducts.length ? (
          getAllProducts.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => deleteHandeler(product._id)}
                >
                  <BsFillTrashFill />
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <div className="my-4">
            <Spinner animation="border" />
          </div>
        )}
      </tbody>
    </Table>
  );
};

export default ProductList;
