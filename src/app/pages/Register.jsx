import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const reg = () => {
    if (name === "") {
      alert("Name is Missing.");
    } else if (email === "") {
      alert("Email is Missing.");
    } else if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      alert("Password is not matching.");
    } else if (name !== "" && email !== "" && password === confirmPassword) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      alert(
        "You gets register Successfully . Now you Can Login with your Credentials!"
      );
      window.location.href="/"
    } else {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      alert("Incorrect");
    }
  };
  return (
    <>
      <input
        type="name"
        placeholder="Your Name"
        className="w-full h-12 border border-solid pl-3 text-lg"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <input
        type="email"
        placeholder="Your Email Address"
        className="w-full h-12 border border-solid pl-3 text-lg"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <input
        type="password"
        placeholder="Your Password"
        className="w-full h-12 border border-solid pl-3 text-lg"
        id="pass"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <input
        type="password"
        placeholder="Password confrimation"
        className="w-full h-12 border border-solid pl-3 text-lg"
        id="cPass"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <Link to="/">
        <button
          onClick={reg}
          className="h-12 w-full border border-solid bg-orange-600 text-white font-bold hover:bg-orange-700"
        >
          Register
        </button>
      </Link>
    </>
  );
};

export default Register;




