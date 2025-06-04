import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../../components/ui/Input.js";
import PrimaryLink from "../../../../components/ui/PrimaryLink.js";
import PrimaryButton from "../../../../components/ui/PrimaryButton.js";
import { login } from "../../../../service/Requests.js";
import AppContext from "../../../../context/AppContext.js";


const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const { setToken, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const onSubmit = () => {
    login(form)
      .then((res) => {
        
        if (res?.accessToken) {
          let token = res.accessToken;
          localStorage.setItem("user", JSON.stringify(res?.user));
          localStorage.setItem("token", token);
          setToken(token);
          setUser(res.user);
          navigate("/user/dashboard");
        }
      })
      .catch(() => {});
  };
  return (
    <>
      <div className=" w-[35rem] mx-auto p-6 md:px-10 md:py-12 mt-32  md:bg-[var(--secondary-dark-color)] rounded-3xl">
        <div className="flex flex-col gap-[0.5rem] mb-[3rem]">
          <h2 className="text-xl font-semibold text-center text-white">
            {"Welcome Back"}
          </h2>
          <p className="text-center text-[var(--light-gray-color)]">
            Login to your account to continue
          </p>
        </div>

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

        <PrimaryButton onClick={onSubmit} type="submit">
          {"Log in"}
        </PrimaryButton>
        <p className="text-[var(--light-gray-color)] text-[0.875rem] mt-8 text-center">
          Don't have an account?{" "}
          <PrimaryLink href="/register">Sign Up</PrimaryLink>
        </p>
        {/* {error && (
        <p className="text-red-500 text-sm text-center mt-4">{error}</p>
      )} */}
      </div>
    </>
  );
};

export default LoginForm;
