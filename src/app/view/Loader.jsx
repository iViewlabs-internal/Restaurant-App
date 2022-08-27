import React from "react";
import { RotatingSquare } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex flex-row justify-center h-[25.3vh] items-center">
      <h1 className="text-2xl font-bold text-black">Loading...</h1>
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
