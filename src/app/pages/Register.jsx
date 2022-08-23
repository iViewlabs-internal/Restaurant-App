import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const reg = () => {
    if (password === confirmPassword && email !== "" && name !== "") {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      alert(
        "You gets register Successfully . Now you Can Login with your Credencials!"
      );
    } else {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      alert("incorrect");
    }
  };

  return (
    <>
      <input
        type="name"
        placeholder="Your Name"
        className="w-full h-12 border border-solid placeholder:pl-3 text-lg"
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
        className="w-full h-12 border border-solid placeholder:pl-3 text-lg"
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
        className="w-full h-12 border border-solid placeholder:pl-3 text-lg"
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
        className="w-full h-12 border border-solid placeholder:pl-3 text-lg"
        id="cPass"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <button
        onClick={reg}
        data-bs-dismiss="modal"
        className="h-12 w-full border border-solid bg-orange-600 text-white font-bold hover:bg-orange-700"
      >
        Register
      </button>
    </>
  );
};

export default Register;
