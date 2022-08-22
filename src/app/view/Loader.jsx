import React from "react";
import { RotatingSquare } from "react-loader-spinner";


const Loader = () => {
  return (
    <div className="flex justify-center w-[100vw] mb-9">
      <h1 className="text-2xl font-bold text-white pt-2">Loading...</h1>
      <RotatingSquare
        height="50"
        width="50"
        radius="9"
        color="white"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loader;
