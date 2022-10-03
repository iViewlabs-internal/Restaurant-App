import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLogin } from "../../redux/actions/index";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    toast.success("Logged Out Successfuly!");
    dispatch(isLogin(false));
    localStorage.removeItem("login");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (localStorage.getItem("login") === null) {
        setTimeout(() => {
          navigate("/");
        },3000);
      }
    }, 300);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="h-[9vh] bg-black flex items-center">
        <div className="flex flex-row justify-between container mx-auto px-14 ">
          <div className="self-center">
            <h2 className="text-lime-500 lg:text-2xl font-bold md:text-xl font-sans">
              <span className="text-white">My</span> RESTAU
              <span className="text-white">RANTs!</span>
            </h2>
          </div>
          <div className="flex">
            {/* {window.location.href === "http://localhost:3000/search" ? ( */}
            {window.location.href === 
          "https://my-restaurant1.netlify.app/search" ? (
              <Link to="/settings">
                <button className="bg-white text-black font-bold h-9 w-24 mr-9 rounded-md hover:bg-green-500 hover:text-white">
                  Settings
                </button>
              </Link>
            ) : (
              <Link to="/search">
                <button className="bg-white text-black font-bold h-9 w-28 mr-9 rounded-md hover:bg-green-500 hover:text-white">
                  Search Page
                </button>
              </Link>
            )}
            <button
              className="bg-white text-black font-bold h-9 w-24 rounded-md hover:bg-green-500 hover:text-white"
              onClick={logOut}
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;