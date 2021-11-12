import React from "react";
import { Table, Button } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";

const ProductList = () => {
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>$110</td>
          <td>
            <Button variant="danger"><BsFillTrashFill/></Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ProductList;
