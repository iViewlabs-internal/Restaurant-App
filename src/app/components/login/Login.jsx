import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLogin } from "../../redux/actions/index";

const Login = () => {
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  // const myLoginState = useSelector((store) => store);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const loggedIn = () => {
    const login = {
      email: logEmail,
      password: logPassword,
    };
    localStorage.setItem("login", JSON.stringify(login));
    sessionStorage.setItem("timer", 5000);
    dispatch(isLogin(true));
    // console.log(myLoginState.rootReducer.changeLogin.login)
    setTimeout(() => {
      navigate("/search");
    }, 3000);
  };

  const log = () => {
    const myObj = localStorage.getItem("register");
    const registerObj = JSON.parse(myObj);

    if (logEmail === "" && logPassword === "") {
      toast.error("Bad Try! Please Enter your Email and Password. ");
    } else if (logEmail === "") {
      toast.error("Email is missing");
    } else if (logPassword === "") {
      toast.error("Password is missing");
    } else if (
      logEmail !== registerObj.email &&
      logPassword === registerObj.password
    ) {
      toast.error("Incorrect Email");
    } else if (
      logEmail === registerObj.email &&
      logPassword !== registerObj.password
    ) {
      setLogPassword("");
      toast.error("Incorrect Password");
    } else if (
      registerObj.email === logEmail &&
      registerObj.password === logPassword
    ) {
      toast.success("Logged In Successfuly!");
      setLogEmail("");
      setLogPassword("");
      loggedIn();
    } else {
      setLogEmail("");
      setLogPassword("");
      toast.error("incorrect Credencials");
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
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