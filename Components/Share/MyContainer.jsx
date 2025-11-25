import React from "react";

const MyContainer = ({ children, className }) => {
  return (
    <div className={`max-w-11/12 mx-auto mt-3 md:mt-5 lg:mt-10 ${className}`}>{children}</div>
  );
};

export default MyContainer;
