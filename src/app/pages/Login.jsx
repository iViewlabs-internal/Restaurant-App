import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Login = (props) => {
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");

  const log = () => {
    if (
      logEmail === localStorage.getItem("email") &&
      logPassword === localStorage.getItem("password")
    ) {
      window.location.href = "/search"
      props.loggedIn();
      setLogEmail("");
      setLogPassword("");
    } else {
      setLogEmail("");
      setLogPassword("");
      alert("incorrect Credencials");
    }
  };
  Login.propTypes = {
    loggedIn: PropTypes.func.isRequired,
    login:PropTypes.bool.isRequired
  };

  return (
    <>
      <input
        type="email"
        placeholder="Email"
        className="w-full h-12 border border-solid placeholder:pl-3 text-lg"
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
        className="w-full h-12 border border-solid placeholder:pl-3 text-lg"
        value={logPassword}
        onChange={(e) => {
          setLogPassword(e.target.value);
        }}
      />
      <br />
      <br />
      <Link to={props.login? "/search":"/"}>
        <button  onClick={log} className="h-12 w-full border border-solid bg-orange-500 text-white font-bold hover:bg-orange-600">
          Login
        </button>
      </Link>
    </>
  );
};

export default Login;