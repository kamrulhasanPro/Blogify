import React from "react";

const Card = ({ feature }) => {
  return (
    <>
      <div className="flex flex-col gap-2 shadow rounded-2xl overflow-hidden">
        <figure className="h-76 overflow-hidden ">
          <img
            src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=809&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="banner"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="p-4">
          {/* title */}
          <h3 className="text-xl text-secondary mb-1">{feature.title}</h3>

          {/* short description */}
          <p className="mb-3 text-gray-400">{feature.desc}</p>

          {/* cta */}
          <button className="my_btn !btn-block">Read More</button>
        </div>
      </div>
    </>
  );
};

export default Card;
