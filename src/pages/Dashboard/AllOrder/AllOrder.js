import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { BsFillTrashFill, BsCheckLg } from "react-icons/bs";

const AllOrder = () => {
  const [DisplayOrder, setDisplayOrder] = useState([]);
  useEffect(() => {
    fetch(`https://wrishshop.onrender.com/allorder`)
      .then((res) => res.json())
      .then((data) => {
        setDisplayOrder(data);
      });
  }, [DisplayOrder]);

  // upadate status
  const updateStatusUi = (id, orderid) => {
    const data = DisplayOrder;
    data[id]["status"] = 2;
    setDisplayOrder(data);
    handelStatus(orderid);
  };

  const handelStatus = (id) => {
    const user = { id };
    fetch(`https://wrishshop.onrender.com/order/status/`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Status Updatedd");
        }
      });
  };

  const deleteHandelerFromUi = (item) => {
    const removeItem = DisplayOrder.filter((product) => product._id != item);
    setDisplayOrder(removeItem);
  };
  const deleteHandeler = (id) => {
    const confirmation = window.confirm("Are you sure to delete??");
    if (confirmation) {
      deleteHandelerFromUi(id);
      fetch(`https://wrishshop.onrender.com/order/${id}`, {
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
                <span className="badge bg-success text-white">Delivared</span>
              )}
            </td>
            <td>
              <Button
                variant="danger"
                className="mx-2"
                onClick={() => deleteHandeler(order._id)}
              >
                <BsFillTrashFill />
              </Button>
              {order.status === 1 ? (
                <Button
                  variant="success"
                  onClick={() => updateStatusUi(index, order._id)}
                >
                  <BsCheckLg />
                </Button>
              ) : (
                ""
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AllOrder;
