"use client";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import MyContainer from "@/Components/Share/MyContainer";
import MyTitle from "@/Components/Share/MyTitle";
import { IoArrowBackCircle } from "react-icons/io5";
import { useRouter } from "next/navigation";

const BlogDetails = ({ blog }) => {
  if (!blog) return <p>No Blog Found!</p>;
  const router = useRouter()
  return (
    <MyContainer className="">
      {/* Title */}
      <div className="flex items-center gap-4">
        <IoArrowBackCircle
        onClick={() => router.back()}
          size={30}
          className="text-primary cursor-pointer hover:brightness-110 duration-150"
        />
        <MyTitle className={"text-left !mb-2"}>{blog.title}</MyTitle>
      </div>

      {/* Writer & Meta Info */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* Writer */}
        <div className="flex items-center gap-2">
          <img
            src={blog.writer.avatar}
            width={45}
            height={45}
            alt="writer"
            className="rounded-full object-cover"
          />
          <p className="font-semibold text-gray-700">{blog.writer.name}</p>
        </div>

        <span className="h-2 w-2 rounded-full bg-gray-400"></span>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 font-medium">
          <AiFillStar size={18} /> {blog.rating}
        </div>

        <span className="h-2 w-2 rounded-full bg-gray-400"></span>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-600">
          <FiEye size={18} /> {blog.views}
        </div>

        <span className="h-2 w-2 rounded-full bg-gray-400"></span>

        {/* Date */}
        <p className="text-gray-500 text-sm">{blog.createdAt}</p>
      </div>

      {/* Image */}
      <div className="w-full mb-8">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-xl shadow-md object-cover"
        />
      </div>

      {/* Short Description */}
      <p className="text-lg text-gray-700 font-medium mb-5 leading-relaxed">
        {blog.shortDescription}
      </p>

      {/* Big Blog Content */}
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        {blog.big_blog}
      </div>

      {/* Footer underline */}
      <div className="w-full mt-10 h-[2px] bg-gray-300 rounded"></div>
    </MyContainer>
  );
};

export default BlogDetails;
