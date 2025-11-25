import React from "react";
import {
  FaChalkboardTeacher,
  FaCertificate,
  FaClock,
  FaBookOpen,
} from "react-icons/fa";
import MyContainer from "../Share/MyContainer";
import MyTitle from "../Share/MyTitle";

const WhyReadBlog = () => {
  const whyReadBlog = [
    {
      id: 1,
      icon: <FaChalkboardTeacher className="text-blue-600" />,
      iconBg: "bg-blue-100",
      title: "Expert Instructors",
      description:
        "Learn from top industry professionals who bring years of real-world experience to the classroom, providing you with the latest tools, techniques, and insights needed to excel in your field.",
    },
    {
      id: 2,
      icon: <FaCertificate className="text-purple-600" />,
      iconBg: "bg-purple-100",
      title: "Career-Boost Certification",
      description:
        "Earn certifications that are highly regarded by employers, helping you enhance your resume, gain industry recognition, and open doors to new career opportunities.",
    },
    {
      id: 3,
      icon: <FaClock className="text-green-600" />,
      iconBg: "bg-green-100",
      title: "Flexible Learning Schedules",
      description:
        "Courses are available on-demand, allowing you to learn at your own pace, anytime and anywhere, fitting your busy lifestyle perfectly.",
    },
    {
      id: 4,
      icon: <FaBookOpen className="text-yellow-600" />,
      iconBg: "bg-yellow-100",
      title: "100+ High Impact Courses",
      description:
        "Our blog offers 100+ courses that cover essential skills. Whether you're a beginner or experienced professional, you can learn and apply skills immediately.",
    },
  ];

  return (
    <MyContainer>
      <MyTitle>Why Read Blog</MyTitle>
      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* item 1, 2 */}
        {whyReadBlog.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className={`${item.iconBg} flex flex-col p-3 rounded-xl gap-2  shadow-md hover:shadow-lg transition`}
          >
            <div
              className={`${item.iconBg} text-4xl  w-15 h-12 flex items-center justify-center rounded-sm`}
            >
              {item.icon}
            </div>
            <div>
              <h5 className="text-lg font-medium text-secondary">
                {item.title}
              </h5>
              <p className="text-gray-400 leading-tight">{item.description}</p>
            </div>
          </div>
        ))}

        {/* item 3 */}
        <div
            className={`${whyReadBlog[2].iconBg} flex flex-col md:justify-center md:items-center md:text-center p-3 rounded-xl gap-2  shadow-md hover:shadow-lg transition md:row-span-2`}
          >
            <div
              className={`${whyReadBlog[2].iconBg} text-4xl  w-15 h-12 flex items-center justify-center rounded-sm`}
            >
              {whyReadBlog[2].icon}
            </div>
            <div>
              <h5 className="text-lg font-medium text-secondary">
                {whyReadBlog[2].title}
              </h5>
              <p className="text-gray-400 leading-tight">{whyReadBlog[2].description}</p>
            </div>
          </div>

        {/* item 4 */}
        <div
            className={`${whyReadBlog[3].iconBg} flex flex-col p-3 rounded-xl gap-2  shadow-md hover:shadow-lg transition md:col-span-2`}
          >
            <div
              className={`${whyReadBlog[3].iconBg} text-4xl  w-15 h-12 flex items-center justify-center rounded-sm`}
            >
              {whyReadBlog[3].icon}
            </div>
            <div>
              <h5 className="text-lg font-medium text-secondary">
                {whyReadBlog[3].title}
              </h5>
              <p className="text-gray-400 leading-tight">{whyReadBlog[3].description}</p>
            </div>
          </div>
      </div>
    </MyContainer>
  );
};

export default WhyReadBlog;
