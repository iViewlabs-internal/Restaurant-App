import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="h-12 bg-black">
    <div className="text-white container">
      <p className="pt-3"> &#169; Copyright {year}</p>
    </div>
    </div>
  );
};

export default Footer;
