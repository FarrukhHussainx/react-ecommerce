import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../context/UserContext";
const Register = () => {
  const context = useContext(userContext);
  const { userLogin } = context;
  const [credentails, setCredentails] = useState({
    email: "",
    password: "",
    username: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://react-ecommerce-five-puce.vercel.app/api/signup";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: credentails.email,
        password: credentails.password,
        username: credentails.username,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      //redirect
      //   localStorage.setItem("token", json.token);
      //   userLogin(json.user);
      navigate("/login");
      console.log("redirect");
    } else {
      alert("invalid or already exist");
    }
  };
  const onChange = (e) => {
    // console.log([...credentails]);
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="flex w-screen h-[100vh]">
        <div className="w-6/12 bg-blue-900 rounded-e-[50px] flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-96 h-96  flex flex-col justify-center items-center gap-8"
          >
            <h1 className="text-2xl text-white font-bold">Register Now</h1>
            <div className="-mb-5">
              <label htmlFor="username" className="form-label"></label>
              <input
                type="text"
                className=" bg-blue-200  p-2 w-64 rounded-md"
                placeholder="Farrukh Hussain"
                name="username"
                id="username"
                onChange={onChange}
              />
            </div>
            <div className="-mb-5">
              <label htmlFor="email" className="form-label"></label>
              <input
                type="email"
                className=" bg-blue-200  p-2 w-64 rounded-md"
                placeholder="farrukhhussainofficial@gmail.com"
                name="email"
                id="email"
                aria-describedby="emailHelp"
                onChange={onChange}
              />
            </div>
            <div className="-mb-5">
              <label htmlFor="password" className="form-label"></label>
              <input
                type="password"
                className=" bg-blue-200  p-2 w-64 rounded-md"
                placeholder="********"
                id="password"
                name="password"
                onChange={onChange}
              />
            </div>
            <button
              type="submit"
              className="p-2 pr-5 pl-5 bg-blue-500 rounded-md"
            >
              Submit
            </button>
            <h1 className="text-sm ">
              Already a member?{" "}
              <Link to="/login" className="text-white">
                Login now
              </Link>
            </h1>
          </form>
        </div>
        <div className="w-6/12 flex justify-center items-center">
          <img
            src="/public/login.gif"
            alt=""
            className="w-96 h-96 bg-blue-950"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
