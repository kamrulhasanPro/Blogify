import React from "react";

const MyTitle = ({ children, className }) => {
  return <h2 className={`text-3xl text-secondary text-center font-semibold mb-5 `}>{children}</h2>;
};

export default MyTitle;
