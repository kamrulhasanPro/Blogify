import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoPng from "../../public/Logo.png";

const Logo = () => {
  return (
    <>
      <Link href={"/"} className="flex items-start justify-center">
        <Image className="w-5.5" src={LogoPng} alt="logo" />
        <p className="text-lg text-secondary font-semibold  ">logify</p>
      </Link>
    </>
  );
};

export default Logo;
