import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const Navbar = (props) => {
    Navbar.propTypes = {
        logout: PropTypes.func.isRequired,
      };
    
  return (
    <div className="h-[9vh] bg-black flex flex-row justify-between items-center">
    <div>
      <h2 className="text-lime-500 lg:text-2xl ml-4 font-bold md:text-xl font-sans">
        <span className="text-white">My</span> RESTAU
        <span className="text-white">RANTs!</span>
      </h2>
    </div>
    <div className="flex">
       {window.location.href === "https://my-restaurant1.netlify.app/search" ? 
      <Link to="/settings">
        <button className="bg-white text-black font-bold h-9 w-24 mr-9 rounded-md hover:bg-green-500 hover:text-white">
          Settings
        </button>
      </Link>
      :
      <Link to="/search">
            <button className="bg-white text-black font-bold h-9 w-28 mr-9 rounded-md hover:bg-green-500 hover:text-white">
              Search Page
            </button>
          </Link>
      }
      <Link to="/">
        <button
          className="bg-white text-black font-bold h-9 w-24 mr-4 rounded-md hover:bg-green-500 hover:text-white"
          onClick={props.logout}
        >
          LogOut
        </button>
      </Link>
    </div>
  </div>
  );
}

export default Navbar;
