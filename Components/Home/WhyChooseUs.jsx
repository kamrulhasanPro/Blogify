import React from "react";
import MyContainer from "../Share/MyContainer";
import MyTitle from "../Share/MyTitle";
import {
  FaThumbsUp,
  FaUserShield,
  FaClock,
  FaTools,
  FaChartLine,
  FaHandHoldingHeart,
} from "react-icons/fa";
import blogImage from "../../public/blogImage.jpg";
import Image from "next/image";

const WhyChooseUs = () => {
  const whyChooseUs = [
    {
      id: 1,
      icon: <FaThumbsUp className="text-blue-600" />,
      iconBg: "bg-blue-100",
      title: "Trusted Content",
      description:
        "Every article is carefully researched and written to provide clear, reliable, and valuable information.",
    },
    {
      id: 2,
      icon: <FaUserShield className="text-green-600" />,
      iconBg: "bg-green-100",
      title: "User-Focused Approach",
      description:
        "We create content based on real problems and real questions to give you exactly what you need.",
    },
    {
      id: 3,
      icon: <FaClock className="text-yellow-600" />,
      iconBg: "bg-yellow-100",
      title: "Time-Saving Guides",
      description:
        "No long, confusing explanations—only quick, effective solutions that save your time and effort.",
    },
    {
      id: 4,
      icon: <FaTools className="text-red-600" />,
      iconBg: "bg-red-100",
      title: "Practical Learning",
      description:
        "Everything you read can be applied directly to real projects, helping you build confidence faster.",
    },
    {
      id: 5,
      icon: <FaChartLine className="text-purple-600" />,
      iconBg: "bg-purple-100",
      title: "Consistent Growth",
      description:
        "Our guides help you learn step-by-step so you can grow your skills and stay ahead in your career.",
    },
    {
      id: 6,
      icon: <FaHandHoldingHeart className="text-pink-600" />,
      iconBg: "bg-pink-100",
      title: "Supportive Community",
      description:
        "We focus on helping beginners and learners feel supported, motivated, and confident every day.",
    },
  ];

  return (
    <MyContainer>
      <MyTitle>Why Choose Us</MyTitle>
      <div className="flex flex-col-reverse md:flex-row gap-10 ">
        {/* card */}
        <div className="flex-3 space-y-4">
          {whyChooseUs.map((item) => (
            <div
              className={`bg-white flex flex-col p-3 rounded-sm gap-2  shadow-md hover:shadow-lg transition`}
            >
              <div
                className={`${item.iconBg} text-xl  w-15 h-12 flex items-center justify-center rounded-sm`}
              >
                {item.icon}
              </div>
              <div>
                <h5 className="text-lg font-medium text-secondary">
                  {item.title}
                </h5>
                <p className="text-gray-400 leading-tight">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* image */}
        <figure className="flex-2 rounded-ss-[100px] rounded-ee-[100px] rounded-bl-sm rounded-tr-sm overflow-hidden ">
          <Image
            src={blogImage}
            alt="blogImage"
            className="h-full object-cover"
          />
        </figure>
      </div>
    </MyContainer>
  );
};

export default WhyChooseUs;
