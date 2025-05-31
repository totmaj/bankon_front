import React, { useState} from "react";


import Input from "../../../components/ui/Input";
import AuthFormTemplate from "./AuthFormTemplate";
import Select from "../../../components/ui/Select";
import PrimaryLink from "../../../components/ui/PrimaryLink";

const clientTypeOptions = [
  { label: "Individual", value: "individual" },
  { label: "Company", value: "company" },
];

const SignUpForm: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    client_type: "individual",
    referral_code: "",
  });

  return (
    <AuthFormTemplate
      title="Sign Up"
      subTitle="Create your account to get started"
      type="signup"
      buttonText={true ? "Signing up..." : "Sign Up"}
      buttonDisabled={false}
      afterButtonElement={
        <p className="text-[var(--light-gray-color)] text-[0.875rem] mt-8 text-center">
          Already have an account?{" "}
          <PrimaryLink href="/login">
            <>Login</>
          </PrimaryLink>
        </p>
      }
    >
      <Input
        type="text"
        name="username"
        value={form.username}
        placeholder="Username"
        required
      />

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

      <Input
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        placeholder="Confirm Password"
        required
      />

      <Select
        options={clientTypeOptions}
        value={form.client_type}
        // onChange={(val) => {
        //   setForm((prev) => ({ ...prev, client_type: val }));
        //   setErrors((prev) => ({ ...prev, client_type: "" }));
        // }}
        placeholder="Client Type"
      />

      <Input
        type="text"
        name="referral_code"
        value={form.referral_code}
        placeholder="Referral Code (optional)"
      />

      {/* {error && (
        <p className="text-red-500 text-sm text-center mt-4">{error}</p>
      )} */}
    </AuthFormTemplate>
  );
};

export default SignUpForm;
