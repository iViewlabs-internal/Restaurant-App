import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="h-12 bg-black text-white">
      <p className="pl-20 pt-3"> &#169; Copyright {year}</p>
    </div>
  );
};

export default Footer;
