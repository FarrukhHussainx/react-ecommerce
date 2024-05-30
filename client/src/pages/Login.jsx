import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../context/UserContext";
const Login = () => {
  const context = useContext(userContext);
  const { userLogin } = context;
  const [credentails, setCredentails] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: credentails.email,
        password: credentails.password,
      }),
    });
    const json = await response.json();

    if (json.success) {
      //redirect
      //   localStorage.setItem("token", json.token);
      userLogin(json.user);
      navigate("/");
      console.log("redirect");
    } else {
      alert("invalid");
    }
  };
  const onChange = (e) => {
    // console.log([...credentails]);
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
