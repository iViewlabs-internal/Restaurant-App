import React from "react";
import Footer from "../components/footer/Footer";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Settings = (props) => {
  Settings.propTypes = {
    logout: PropTypes.func.isRequired,
  };

  return (
    <div className="h-screen container">
      <div className="h-[9vh] bg-black flex flex-row justify-between items-center">
        <div>
          <h2 className="text-lime-500 lg:text-2xl ml-4 font-bold md:text-xl">
            <span className="text-white">My</span> RESTAU
            <span className="text-white">RANTs!</span>
          </h2>
        </div>
        <div className="flex">
          <Link to="/search">
            <button className="bg-white text-black font-bold h-9 w-28 mr-9 rounded-md hover:bg-green-500 hover:text-white">
              Search Page
            </button>
          </Link>
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

      <div className="bg-slate-500 h-[83.7vh] w-auto flex flex-col items-center pt-36">
        <h3 className="text-lg mb-5 text-[#f2ffed] font-bold">
          Set The Interval (Refresh) Time of Fetching Data
        </h3>
        <select
          className="w-72 h-9 bg-zinc-600 text-white"
          onChange={(e) => {
            sessionStorage.setItem("timer", e.target.value);
          }}
        >
          <option className="h-8 bg-slate-500">
            -----------------Select-----------------
          </option>
          <option value={5000} className="h-8 bg-slate-500">
            05 Seconds
          </option>
          <option value={10000} className="h-8 bg-slate-500">
            10 Seconds
          </option>
          <option value={15000} className="h-8 bg-slate-500">
            15 Seconds
          </option>
        </select>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
