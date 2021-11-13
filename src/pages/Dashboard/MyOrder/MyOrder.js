import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [DisplayOrder, setDisplayOrder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/userorder/${user.email}`)
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
        {DisplayOrder.map((order, index) => (
          <tr key={order._id}>
            <td>{index + 1}</td>
            <td>{order.name}</td>
            <td>
              {order.status === 1 ? (
                <span className="badge bg-warning text-dark">Panding</span>
              ) : (
                <span className="badge bg-success text-dark">Deliverd</span>
              )}
            </td>
            {order.status === 1 && (
              <td>
                <Button
                  variant="danger"
                  onClick={() => deleteHandeler(order._id)}
                  className="mx-2"
                >
                  <BsFillTrashFill />
                </Button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyOrder;
