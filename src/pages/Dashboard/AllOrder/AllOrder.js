import React from 'react'
import { Table, Button } from "react-bootstrap";
import { BsFillTrashFill,BsCheckLg } from "react-icons/bs";


const AllOrder = () => {
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td><span className="badge bg-warning text-dark">Panding</span></td>
            <td>
              <Button variant="danger" className="mx-2"><BsFillTrashFill/></Button>
              <Button variant="success"><BsCheckLg/></Button>
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
    )
}

export default AllOrder
