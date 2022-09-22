import React from "react";
import { year } from "../../utils";

const Footer = () => {
  return (
    <div className="h-12 bg-black">
    <div className="text-white container text-center">
      <p className="pt-3"> Copyright &#169; {year} Iview Labs Pvt Ltd. All Rights Reserved</p>
    </div>
    </div>
  );
};

export default Footer;
