import React from "react";

const MyTitle = ({ children, className }) => {
  return <h2 className={`text-2xl text-secondary text-center`}>{children}</h2>;
};

export default MyTitle;
