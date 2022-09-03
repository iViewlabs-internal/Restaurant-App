import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/index";

const Navbar = () => {
  const myLogOutState = useSelector((state) => state.changeLogOut);
  console.log(myLogOutState);
  const dispatch = useDispatch();
  return (
    <div className="h-[9vh] bg-black flex items-center">
      <div className="flex flex-row justify-between container mx-auto px-14 ">
        <div className="self-center">
          <h2 className="text-lime-500 lg:text-2xl font-bold md:text-xl font-sans">
            <span className="text-white">My</span> RESTAU
            <span className="text-white">RANTs!</span>
          </h2>
        </div>
        <div className="flex">
          {window.location.href === "https://my-restaurant1.netlify.app/search" ? (
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
          <Link to="/">
            <button
              className="bg-white text-black font-bold h-9 w-24 rounded-md hover:bg-green-500 hover:text-white"
              onClick={() => {
                dispatch(logout());
              }}
            >
              LogOut
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
