import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    const register = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    localStorage.setItem("register", JSON.stringify(register));
    toast.success("You Gets Registered Successfuly");
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              name="username"
              type="text"
              placeholder="Your Username"
              {...register("username")}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
            />

            <div className="invalid-feedback">{errors.username?.message}</div>
            <br />
          </div>
          <div className="form-group">
            <input
              name="email"
              type="text"
              placeholder="Your Email"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />

            <div className="invalid-feedback">{errors.email?.message}</div>
            <br />
          </div>
          <div className="form-group">
            <input
              name="password"
              type="password"
              placeholder="Your Password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />

            <div className="invalid-feedback">{errors.password?.message}</div>
            <br />
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
            />
            <div className="invalid-feedback">
              {errors.confirmPassword?.message}
            </div>
            <br />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="mt-5 h-12 w-full border border-solid bg-green-600 text-white font-bold hover:bg-green-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Register;