import { useState } from "react";
import { Link } from "react-router-dom";
const Form = ({ type }) => {
  const [postInputs, setPostInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="flex flex-col items-center justify-center md:h-screen">
      <div className="flex flex-col text-center md:gap-1">
        <h1 className="text-3xl md:text-4xl font-bold">
          {type === "signup"
            ? "Create an Account"
            : type === "signin"
              ? "Login to Account"
              : ""}
        </h1>
        <h3 className="text-l md:text-l text-gray-500">
          {type === "signup"
            ? "Already have an account"
            : type === "signin"
              ? "Create an Account"
              : ""}{"  "}
          <Link className="underline"
            to={
              type === "signup" ? "/signin" : type === "signin" ? "/signup" : ""
            }
          >
            {type === "signup" ? "Login" : type === "signin" ? "Signup" : ""}
          </Link>
        </h3>
      </div>
      <div className="flex flex-col gap-1.2 md:gap-1.5 mt-2 md:mt-2  w-xs md:w-sm ">
        <label htmlFor="" className="mt-1.5 ">
          Username
        </label>
        <input
          type="text"
          id="user_name"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="Username"
          required
          onChange={(e) =>
            setPostInputs({ ...postInputs, name: e.target.value })
          }
        />
        <label htmlFor="" className="mt-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="xyz@gmail.com"
          required
          onChange={(e) =>
            setPostInputs({ ...postInputs, email: e.target.value })
          }
        />
        <label htmlFor="" className="mt-1.5">
          Password
        </label>
        <input
          type="password"
          id="first_name"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          required
          onChange={(e) =>
            setPostInputs({ ...postInputs, password: e.target.value })
          }
        />
        <button className="bg-black text-white mt-1.5 rounded-sm p-1">
          {type === "signup" ? "Signup" : type === "signin" ? "Signin" : ""}
        </button>
      </div>
    </div>
  );
};

export default Form;
