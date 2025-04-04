import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer text-center bg-primary py-4 text-white text-sm">
      Copyright © {year} ProEducation Consultant. All rights reserved.
    </div>
  );
};

export default Footer;
