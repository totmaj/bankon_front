import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AuthFormTemplate from "./AuthFormTemplate";
import Input from "../../../components/ui/Input.js";
import PrimaryLink from "../../../components/ui/PrimaryLink";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  return (
    <AuthFormTemplate
      title="Welcome Back"
      subTitle="Login to your account to continue"
      type="login"
      buttonText={true ? "Logging in..." : "Login"}
      afterButtonElement={
        <p className="text-[var(--light-gray-color)] text-[0.875rem] mt-8 text-center">
          Don't have an account?{" "}
          <PrimaryLink href="/register">Sign Up</PrimaryLink>
        </p>
      }
    >
      <Input
        type="email"
        name="email"
        value={form.email}
        placeholder="Email"
        required
      />
      <Input
        type="password"
        name="password"
        value={form.password}
        placeholder="Password"
        required
      />
      {/* {error && (
        <p className="text-red-500 text-sm text-center mt-4">{error}</p>
      )} */}
    </AuthFormTemplate>
  );
};

export default LoginForm;
