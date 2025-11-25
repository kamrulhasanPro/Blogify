import React from "react";
import heroPng from "../../public/heroPng.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center gap-5 py-10 px-5 relative`}
    >
      {/* heroPng */}
      <Image
        src={heroPng}
        className="w-full absolute object-cover h-full -z-10 opacity-20 left-0 rotate-z-180"
        alt="heroPng"
      />
      <Image
        src={heroPng}
        className="w-full absolute object-cover h-full -z-10 right-0 opacity-20"
        alt="heroPng"
      />

      {/* headline */}
      <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold">
        LEVEL UP YOUR <span className="text-primary">KNOWLEDGE,</span> <br />
        ONE POST AT A TIME
      </h1>
      {/* subtile */}
      <p className="text-lg md:text-2xl text-secondary-content">
        Discover practical tips, beginner-friendly tutorials, and deep insights
        that guide you in growing your skills, exploring new possibilities, and
        staying ahead in the ever-changing digital landscape.
      </p>
      {/* CTA */}
      <button className="my_btn_outline">Start Reading</button>
    </div>
  );
};

export default Hero;
