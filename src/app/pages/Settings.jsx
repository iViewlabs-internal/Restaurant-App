import React from "react";
import Footer from "../components/footer/Footer";

import Navbar from "../components/navbar/Navbar";

const Settings = () => {
  return (
    <div className="h-screen">
      <Navbar />

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
