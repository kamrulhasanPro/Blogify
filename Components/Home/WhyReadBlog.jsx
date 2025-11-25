import React from 'react';
import { 
  FaChalkboardTeacher, 
  FaCertificate, 
  FaClock, 
  FaBookOpen 
} from "react-icons/fa";
import MyContainer from '../Share/MyContainer';
import MyTitle from '../Share/MyTitle';

const WhyReadBlog = () => {

const whyReadBlog = [
  {
    id: 1,
    icon: <FaChalkboardTeacher className="text-blue-600" />,
    iconBg: "bg-blue-100",
    title: "Expert Instructors",
    description: "Learn from top industry professionals who bring years of real-world experience to the classroom, providing you with the latest tools, techniques, and insights needed to excel in your field."
  },
  {
    id: 2,
    icon: <FaCertificate className="text-purple-600" />,
    iconBg: "bg-purple-100",
    title: "Career-Boost Certification",
    description: "Earn certifications that are highly regarded by employers, helping you enhance your resume, gain industry recognition, and open doors to new career opportunities."
  },
  {
    id: 3,
    icon: <FaClock className="text-green-600" />,
    iconBg: "bg-green-100",
    title: "Flexible Learning Schedules",
    description: "Courses are available on-demand, allowing you to learn at your own pace, anytime and anywhere, fitting your busy lifestyle perfectly."
  },
  {
    id: 4,
    icon: <FaBookOpen className="text-yellow-600" />,
    iconBg: "bg-yellow-100",
    title: "100+ High Impact Courses",
    description: "Our blog offers 100+ courses that cover essential skills. Whether you're a beginner or experienced professional, you can learn and apply skills immediately."
  }
];


    return (
        <MyContainer>
            <MyTitle/>
        </MyContainer>
    );
};

export default WhyReadBlog;