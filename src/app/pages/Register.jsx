import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const reg = () => {
    if (
      name === "" &&
      email === "" &&
      password === "" &&
      confirmPassword === ""
    ) {
      alert("Empty Fields! Please fill every fields. ");
    } else if (name === "") {
      alert("Name is Missing.");
    } else if (name.length < 3) {
      alert("Name should contain atleast 3 characters");
    } else if (email === "") {
      alert("Email is Missing.");
    } else if (!email.includes(".") || !email.includes("@")) {
      alert("Email is not conventional");
    } else if (password === "") {
      alert("Password is missing");
    } else if (confirmPassword === "") {
      alert("confirm Password is missing");
    } else if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      alert("Password is not matching.");
    } else if (password === confirmPassword) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      alert(
        "You gets register Successfully . Now you Can Login with your Credentials!"
      );
      window.location.href = "/";
    } else {
      alert("something is wrong! Try Again");
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
        placeholder="Password confirmation"
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

// import { useForm } from "react-hook-form";

// const Register = () => {

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = () => {

//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register('firstName',{ required: true })} type="text" placeholder="Your Name" className="w-full h-12 border border-solid pl-3 text-lg mt-2" />
//       {errors.firstName ? <span className="text-red-500 pl-2">*This field is required.</span>:""}

//       <input {...register('email', { required: true })} type="email" placeholder="Your Email" className="w-full h-12 border border-solid pl-3 text-lg mt-2"/>
//       {errors.email && <p className="text-red-500 pl-2">*This field is required.</p>}

//       <input {...register('password', {required: true})}  type="password" placeholder="Your Password" className="w-full h-12 border border-solid pl-3 text-lg mt-2"/>
//       {errors.password && <p className="text-red-500 pl-2">*This field is required</p>}

//       <input {...register('confirmPassword', {required: true})}  type="password" placeholder="Password Confirmation" className="w-full h-12 border border-solid pl-3 text-lg mt-2"/>
//       {errors.confirmPassword && <p className="text-red-500 pl-2">*This field is required</p>}

//       <button type="submit" className="h-12 w-full border border-solid bg-orange-600 text-white font-bold hover:bg-orange-700 mb-2">Register</button>
//     </form>
//   );
// };

// export default Register;
