import Link from "next/link";
import React from "react";
import { TiEye } from "react-icons/ti";

const Card = ({ feature }) => {
  return (
    <>
      <div className="flex flex-col gap-2 shadow-md rounded-xl overflow-hidden bg-white">
        <figure className="h-50 overflow-hidden ">
          <img
            src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=809&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="banner"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="p-4 grow flex flex-col">
          {/* category */}
          <div className="mb-3">
            <span className="text-white bg-primary rounded-full px-5 py-0.5">
              Design
            </span>
          </div>

          {/* title */}
          <Link href={'/blogs/7'} className="text-xl text-secondary font-bold mb-1">
            {feature.title}
          </Link>

          {/* short description */}
          <p className="mb-3 text-gray-400 grow">{feature.desc}</p>

          {/* cta */}
          <div className="flex justify-between items-center mt-3">
            <Link href={'/blogs/5'} className="my_btn_outline">Read More</Link>
            <div className="flex items-center justify-center gap-2">
              <TiEye fill="green"/>
              <span>10k</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
