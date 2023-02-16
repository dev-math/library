import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Button, Link } from "@/components/Elements";
import { Form, InputField } from "@/components/Form";
import useAuth from "@/hooks/useAuth";

export const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    handleLogin(email, password);
    navigate("/");
  };

  return (
    <Layout title="Login">
      <Form onSubmit={handleSubmit}>
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
          Login
        </Button>
      </Form>
      <p className="py-200">
        No account? <Link to="/register">Create one</Link>
      </p>
    </Layout>
  );
};
