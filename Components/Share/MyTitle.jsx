import React from "react";

const MyTitle = ({ children, className }) => {
  return <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 text-secondary ${className}`}>{children}</h2>;
};

export default MyTitle;
