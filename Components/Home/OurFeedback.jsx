"use client"

import React from "react";
import MyTitle from "../Share/MyTitle";
import MyContainer from "../Share/MyContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "David Miller",
    role: "Business Blogger",
    image:
      "https://i.postimg.cc/bNFVms3Z/photo-1500648767791-00dcc994a43e-q-80-w-387-auto-format-fit-crop-ixlib-rb-4-1.jpg",
    testimonial:
      "This blog has been a game-changer for my business insights. The articles are well-researched and extremely practical.",
  },
  {
    name: "Maya Fernandez",
    role: "Lifestyle Writer",
    image:
      "https://i.postimg.cc/2yk9KWsb/premium-photo-1689977968861-9c91dbb16049-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-1.jpg",
    testimonial:
      "I love how engaging and inspiring the content is. Every post motivates me to try new things and explore ideas.",
  },
  {
    name: "Nusrat Jahan",
    role: "Student Blogger",
    image:
      "https://i.postimg.cc/T3FS3pbL/premium-photo-1688572454849-4348982edf7d-q-80-w-388-auto-format-fit-crop-ixlib-rb-4-1.jpg",
    testimonial:
      "As a student, I find the blog extremely helpful for learning new trends and staying updated in my field.",
  },
  {
    name: "Sophia Turner",
    role: "Travel Blogger",
    image:
      "https://i.postimg.cc/ZYHMyfNN/photo-1603415526960-f7e0328c63b1-q-80-w-870-auto-format-fit-crop-ixlib-rb-4-1.jpg",
    testimonial:
      "The blog’s travel stories are captivating! I get practical tips and amazing inspiration for my trips every week.",
  },
  {
    name: "Tanvir Ahmed",
    role: "Photography Blogger",
    image:
      "https://i.postimg.cc/HsLP0Q4C/premium-photo-1689539137236-b68e436248de-q-80-w-871-auto-format-fit-crop-ixlib-rb-4-1.jpg",
    testimonial:
      "I enjoy reading photography tips and tutorials here. The content is visually appealing and very informative.",
  },
  {
    name: "Rahul Sharma",
    role: "Tech Blogger",
    image:
      "https://i.postimg.cc/hPC6NCPb/photo-1619895862022-09114b41f16f-q-80-w-870-auto-format-fit-crop-ixlib-rb-4-1.jpg",
    testimonial:
      "A fantastic source for tech reviews and insights. It’s my go-to blog for staying ahead in the tech world.",
  },
  {
    name: "Mohammad Al-Karim",
    role: "Entrepreneur Blogger",
    image:
      "https://i.postimg.cc/Hx4Pzzhg/photo-1654110455429-cf322b40a906-q-80-w-580-auto-format-fit-crop-ixlib-rb-4-1.jpg",
    testimonial:
      "The blog provides valuable advice for startups and entrepreneurs. I love the mix of practical and motivational content.",
  },
  {
    name: "Emily Johnson",
    role: "Marketing Blogger",
    image:
      "https://i.postimg.cc/NMwzRSb1/photo-1639747280804-dd2d6b3d88ac-q-80-w-387-auto-format-fit-crop-ixlib-rb-4-1.jpg",
    testimonial:
      "Informative and insightful! I always learn new marketing strategies and techniques from the blog posts.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 mt-10 ">
      <div className="max-w-6xl mx-auto">
        <MyTitle>What Our Readers Say</MyTitle>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={1500}
          loop={true}
          spaceBetween={32}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-2xl"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
                <div
              
              className="bg-white rounded-2xl  p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-primary"
              />
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "{testimonial.testimonial}"
              </p>
              <h3 className="text-lg font-semibold text-secondary">
                {testimonial.name}
              </h3>
              <span className="text-primary text-sm">
                {testimonial.role}
              </span>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
