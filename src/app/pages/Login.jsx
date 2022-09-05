import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions/index";

const Login = () => {
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const myLoginState = useSelector((state) => state.changeLogin);
  console.log(myLoginState);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const loggedIn = () => {
    sessionStorage.setItem("timer", 5000);
    dispatch(login());
    navigate("/search");
  };

  const log = () => {
    if (logEmail === "" && logPassword === "") {
      alert("Bad Try! Please Enter your Email and Password. ");
    } else if (logEmail === "") {
      alert("Email is missing");
    } else if (logPassword === "") {
      alert("Password is missing");
    } else if (
      logEmail !== localStorage.getItem("email") &&
      logPassword === localStorage.getItem("password")
    ) {
      alert("Incorrect Email");
    } else if (
      logEmail === localStorage.getItem("email") &&
      logPassword !== localStorage.getItem("password")
    ) {
      setLogPassword("");
      alert("Incorrect Password");
    } else if (
      logEmail === localStorage.getItem("email") &&
      logPassword === localStorage.getItem("password")
    ) {
      loggedIn();
      setLogEmail("");
      setLogPassword("");
    } else {
      setLogEmail("");
      setLogPassword("");
      alert("incorrect Credencials");
    }
  };

  return (
    <>
      <input
        type="email"
        placeholder="Email"
        className="w-full h-12 border border-solid pl-4 text-lg"
        value={logEmail}
        onChange={(e) => {
          setLogEmail(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        className="w-full h-12 border border-solid pl-4 text-lg"
        value={logPassword}
        onChange={(e) => {
          setLogPassword(e.target.value);
        }}
      />
      <br />
      <br />

      <button
        onClick={log}
        className="h-12 w-full border border-solid bg-green-600 text-white font-bold hover:bg-green-500"
      >
        Login
      </button>
    </>
  );
};

export default Login;
