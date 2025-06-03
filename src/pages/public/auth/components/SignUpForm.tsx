import React, { useContext, useState } from "react";

import Input from "../../../../components/ui/Input";
import Select from "../../../../components/ui/Select";
import PrimaryLink from "../../../../components/ui/PrimaryLink";
import PrimaryButton from "../../../../components/ui/PrimaryButton";
import { signup } from "../../../../service/Requests";
import AppContext from "../../../../context/AppContext";
import { useCookie } from "react-use";
import { useNavigate } from "react-router-dom";
import ToastUtils from "../../../../components/ui/Toast/toast";

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

  const [authToken, setAuthToken, removeAuthToken] = useCookie("authToken");
  const [authUser, setAuthUser, removeAuthUser] = useCookie("authUser");
  const navigate = useNavigate();

  const onSubmit = () => {
    setAuthToken("token");
    signup(form)
      .then((res) => {
        if (res.accessToken) {
          let token = res.accessToken;
          setAuthToken(token);
          setAuthUser(res.user);
          navigate("/user/dashboard");
        }
      })
      .catch((res) => {
        debugger;
        ToastUtils.error(res.suggestion);
      });
  };
  return (
    <div className="w-[35rem] mx-auto p-6 md:px-10 md:py-12 mt-32  md:bg-[var(--secondary-dark-color)] rounded-3xl">
      <div className="flex flex-col gap-[0.5rem] mb-[3rem]">
        <h2 className="text-xl font-semibold text-center text-white">
          {"Sign Up"}
        </h2>
        <p className="text-center text-[var(--light-gray-color)]">
          {"Create your account to get started"}
        </p>
      </div>

      <Input
        type="text"
        name="username"
        value={form.username}
        placeholder="Username"
        required
        onChange={(e) => {
          setForm({ ...form, username: e.target.value });
        }}
      />

      <Input
        type="email"
        name="email"
        value={form.email}
        placeholder="Email"
        required
        onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }}
      />

      <Input
        type="password"
        name="password"
        value={form.password}
        placeholder="Password"
        required
        onChange={(e) => {
          setForm({ ...form, password: e.target.value });
        }}
      />

      <Input
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        placeholder="Confirm Password"
        required
        onChange={(e) => {
          setForm({ ...form, confirmPassword: e.target.value });
        }}
      />
     
      <Select
        options={clientTypeOptions}
        value={form.client_type}
        onChange={(e) => {
          setForm({ ...form, client_type: e });
        }}
        placeholder="Client Type"
      />

      <Input
        type="text"
        name="referral_code"
        value={form.referral_code}
        placeholder="Referral Code (optional)"
        onChange={(e) => {
          setForm({ ...form, referral_code: e.target.value });
        }}
      />

      <PrimaryButton onClick={onSubmit} type="submit">
        {"Sign Up"}
      </PrimaryButton>

      <p className="text-[var(--light-gray-color)] text-[0.875rem] mt-8 text-center">
        Already have an account?
        <PrimaryLink href="/login">
          <>Login</>
        </PrimaryLink>
      </p>
    </div>
  );
};

export default SignUpForm;
