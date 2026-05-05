import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../config";
const Form = ({ type }) => {
  const navigate = useNavigate()
  const [postInputs, setPostInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error,setError] = useState("")
  async function sendRequest(){
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,postInputs)
      const jwt = await response.data.token;
      localStorage.setItem('token',jwt)
      console.log(response.data)
      navigate('/blogs')

    } catch (error) {
      console.log(`Server Error ${error.response.data.msg}`)
      if(error.response.data.msg === "User already exist with this email"){
        setPostInputs({...postInputs,email:""})
      }
      setError(error.response.data.msg)
    }
  }
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
              : ""}
          {"  "}
          <Link
            className="underline"
            to={
              type === "signup" ? "/signin" : type === "signin" ? "/signup" : ""
            }
          >
            {type === "signup" ? "Login" : type === "signin" ? "Signup" : ""}
          </Link>
        </h3>
      </div>
      <div className="flex flex-col gap-1.2 md:gap-1.5 mt-2 md:mt-2  w-xs md:w-sm ">
        {type === "signup" ? (
          <>
            <label htmlFor="" className="mt-1.5 ">
              Username
            </label>
            <input
              type="text"
              id="user_name"
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              placeholder="Username"
              required
              onChange={(e) =>
                setPostInputs({ ...postInputs, name: e.target.value })
              }
              value={postInputs.name}
            />{" "}
          </>
        ) : null}
        <label htmlFor="" className="mt-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="xyz@gmail.com"
          required
          onChange={(e) =>
            setPostInputs({ ...postInputs, email: e.target.value })
          }
          value={postInputs.email}
        />
        <label htmlFor="" className="mt-1.5">
          Password
        </label>
        <input
          type="password"
          id="first_name"
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          required
          onChange={(e) =>
            setPostInputs({ ...postInputs, password: e.target.value })
          }
          value={postInputs.password}
        />
        <button onClick={sendRequest} className="bg-black text-white mt-1.5 rounded-sm p-1">
          {type === "signup" ? "Signup" : type === "signin" ? "Signin" : ""}
        </button>
        {error && <h2 className="text-center mt-0.5 sm:mt-0 text-red-600 font-semibold">{error}</h2>}
      </div>
    </div>
  );
};


export default Form;
