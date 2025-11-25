"use client";

import React from "react";
import MyContainer from "../Share/MyContainer";
import MyTitle from "../Share/MyTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Card from "../Share/Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";

const LatestBlogs = () => {
  const data = {
    title: "Mastering JavaScript Basics",
    desc: "Learn core JS concepts with simple examples to build a strong foundation.",
    cta: "Read More",
  };

  return (
    <MyContainer>
      <MyTitle>Latest Blogs</MyTitle>

      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={1500}
          loop={true}
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <SwiperSlide>
              <Card feature={data} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom buttons */}
        <button className="hidden md:inline-block custom-prev absolute -left-5 top-1/2 -translate-y-1/2 bg-black/20 text-primary p-2 rounded-full z-50 cursor-pointer">
          <IoIosArrowBack />
        </button>
        <button className="hidden md:inline-block custom-next absolute -right-5 top-1/2 -translate-y-1/2 bg-black/20 text-primary p-2 rounded-full z-50 cursor-pointer">
          <IoIosArrowForward size={20} />
        </button>
      </div>
    </MyContainer>
  );
};

export default LatestBlogs;
