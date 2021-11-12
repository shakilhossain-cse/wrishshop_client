import React from "react";
import { Form,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";


const Register = () => {
  const { createAccount } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    createAccount(data.email, data.password, data.name)
  };
  return (
    <div className="my-5 py-5">
      <div className="w-50 mx-auto border p-5">
        <h4 className="fw-3 text-center">Register</h4>

        <Form  onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" {...register("name", { required: true })} />
            {errors.name && <span className="text-danger">This field is required</span>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })}  />
            {errors.email && <span className="text-danger">This field is required</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" {...register("password", { required: true })}  />
            {errors.password && <span className="text-danger">This field is required</span>}
          </Form.Group>
          <p>
            Already Have A Account?<Link to="/login">Login</Link>
          </p>
          <Button variant="dark" className="w-100" type="submit">
            Register
          </Button>
          <Button variant="danger" className="w-100 my-3" type="submit">
            Register with Google
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
