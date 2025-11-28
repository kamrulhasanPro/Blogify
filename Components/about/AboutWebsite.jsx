"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import MyContainer from "../Share/MyContainer";
import MyTitle from "../Share/MyTitle";

const AboutWebsite = () => {
  return (
    <MyContainer className="w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">

        {/* IMAGE / GIF SIDE */}
        <div className="flex justify-center">
          <Image
            src="/about-our-gif.gif"
            alt="About our website"
            width={500}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* TEXT SIDE */}
        <div>
          <MyTitle className="!mb-2 text-left">
            About Our Website
          </MyTitle>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Welcome to{" "}
            <span className="font-semibold text-primary">Blogify</span>, a
            modern platform designed to provide high-quality articles,
            informative guides, and meaningful content for readers around the
            world.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Our website focuses on simplicity, clean storytelling, and useful
            information that helps readers stay updated, learn new skills, and
            explore trending topics in technology, lifestyle, and creativity.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We are committed to creating a safe, fast, and enjoyable reading
            experience for everyone — whether you're here to learn, explore, or
            simply get inspired.
          </p>

          <Link href={"/blogs"} className="my_btn">
            Learn More
          </Link>
        </div>
      </div>
    </MyContainer>
  );
};

export default AboutWebsite;
