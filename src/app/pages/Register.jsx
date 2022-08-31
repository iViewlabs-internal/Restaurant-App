// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const reg = () => {
//     if (
//       name === "" &&
//       email === "" &&
//       password === "" &&
//       confirmPassword === ""
//     ) {
//       alert("Empty Fields! Please fill every fields. ");
//     } else if (name === "") {
//       alert("Name is Missing.");
//     } else if (name.length < 3) {
//       alert("Name should contain atleast 3 characters");
//     } else if (email === "") {
//       alert("Email is Missing.");
//     } else if (!email.includes(".") || !email.includes("@")) {
//       alert("Email is not conventional");
//     } else if (password === "") {
//       alert("Password is missing");
//     } else if (confirmPassword === "") {
//       alert("confirm Password is missing");
//     } else if (password !== confirmPassword) {
//       setPassword("");
//       setConfirmPassword("");
//       alert("Password is not matching.");
//     } else if (password === confirmPassword) {
//       localStorage.setItem("email", email);
//       localStorage.setItem("password", password);
//       setName("");
//       setEmail("");
//       setPassword("");
//       setConfirmPassword("");
//       alert(
//         "You gets register Successfully . Now you Can Login with your Credentials!"
//       );
//       window.location.href = "/";
//     } else {
//       alert("something is wrong! Try Again");
//     }
//   };
//   return (
//     <>
//       <input
//         type="name"
//         placeholder="Your Name"
//         className="w-full h-12 border border-solid pl-3 text-lg"
//         id="name"
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />{" "}
//       <br /> <br />
//       <input
//         type="email"
//         placeholder="Your Email Address"
//         className="w-full h-12 border border-solid pl-3 text-lg"
//         id="email"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />{" "}
//       <br /> <br />
//       <input
//         type="password"
//         placeholder="Your Password"
//         className="w-full h-12 border border-solid pl-3 text-lg"
//         id="pass"
//         value={password}
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />{" "}
//       <br /> <br />
//       <input
//         type="password"
//         placeholder="Password confirmation"
//         className="w-full h-12 border border-solid pl-3 text-lg"
//         id="cPass"
//         value={confirmPassword}
//         onChange={(e) => {
//           setConfirmPassword(e.target.value);
//         }}
//       />{" "}
//       <br /> <br />
//       <Link to="/">
//         <button
//           onClick={reg}
//           className="h-12 w-full border border-solid bg-orange-600 text-white font-bold hover:bg-orange-700"
//         >
//           Register
//         </button>
//       </Link>
//     </>
//   );
// };

// export default Register;

import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function Register() {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(15, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required")
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = (data) => {
    // console.log(JSON.stringify(data, null, 2));
    localStorage.setItem("email", data.email);
          localStorage.setItem("password", data.password);
    alert(
              "You gets register Successfully . Now you Can Login with your Credentials!"
            );
            window.location.href = "/";
  };
  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
         
          <input
            name="username"
            type="text"
            placeholder="Your Username"
            {...register("username")}
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
          /><br/>
          <div className="invalid-feedback">{errors.username?.message}</div>
        </div>
        <div className="form-group">
         
          <input
            name="email"
            type="text"
            placeholder="Your Email"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          /><br/>
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div className="form-group">
         
          <input
            name="password"
            type="password"
            placeholder="Your Password"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          /><br/>
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>

        <div className="form-group">
        
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
            className={`form-control ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
          /><br/>
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="mt-5 h-12 w-full border border-solid bg-green-600 text-white font-bold hover:bg-green-500">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
export default Register;
