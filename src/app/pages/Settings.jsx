import React from "react";
import Footer from "../components/footer/Footer";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Settings = (props) => {
  Settings.propTypes = {
    logout: PropTypes.func.isRequired,
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="bg-slate-500 h-screen">
        <div className="h-14 bg-neutral-700 flex justify-between">
          <div>
            <h2 className="text-yellow-400 text-2xl ml-4 pt-2 font-bold">
              <span className="text-white">My</span> RESTAU
              <span className="text-white">RANTs!</span>
            </h2>
          </div>
          <div className="flex">
            <Link to="/search">
              <button className="bg-white text-black font-bold h-9 w-28 mt-[2vh] mr-9 rounded-md hover:bg-black hover:text-white">
                Search Page
              </button>
            </Link>
            <Link to="/">
              <button
                className="bg-white text-black font-bold h-9 w-20 mt-[2vh] mr-2 rounded-md hover:bg-black hover:text-white"
                onClick={props.logout}
              >
                LogOut
              </button>
            </Link>
          </div>
        </div>
        <div className="h-[61vh] w-auto flex flex-col items-center mt-40">
          <h3 className="text-lg mb-5 text-white font-bold">
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
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
