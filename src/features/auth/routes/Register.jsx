import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Button, Link } from "@/components/Elements";
import { Form, InputField } from "@/components/Form";
import { signUp } from "../api";

export const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    signUp(name, email, password);
    navigate("/login");
  };

  return (
    <Layout title="Register">
      <Form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          name="name"
          placeholder="John Doe"
          required
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="john@doe.com"
          required
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="***"
          required
        />

        <Button className="w-full" type="submit">
          Create account
        </Button>
      </Form>
      <p className="py-200">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </Layout>
  );
};
