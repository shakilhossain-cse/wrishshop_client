import React, { useEffect, useState } from 'react'
import { Table, Button } from "react-bootstrap";
import { BsFillTrashFill,BsCheckLg } from "react-icons/bs";


const AllOrder = () => {
  const [DisplayOrder, setDisplayOrder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/allorder`)
      .then((res) => res.json())
      .then((data) => {
        setDisplayOrder(data);
      });
  }, []);
  const deleteHandelerFromUi = (item) => {
    const removeItem = DisplayOrder.filter((product) => product._id != item);
    setDisplayOrder(removeItem);
  };
  const deleteHandeler = (id) => {
    const confirmation = window.confirm("Are you sure to delete??");
    if (confirmation) {
      deleteHandelerFromUi(id);
      fetch(`http://localhost:5000/order/${id}`, {
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
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            DisplayOrder.map(order => (<tr>
              <td>1</td>
              <td>{ order.name}</td>
              <td>{order.status === 1 ? <span className="badge bg-warning text-dark">Panding</span> : <span className="badge bg-success text-white">Delivared</span>}</td>
              <td>
                <Button variant="danger" className="mx-2" onClick={()=>deleteHandeler(order._id)}><BsFillTrashFill /></Button>
                {order.status === 1 && <Button variant="success"><BsCheckLg/></Button> }
                
              </td>
            </tr>))
          }
          
        </tbody>
      </Table>
    )
}

export default AllOrder
