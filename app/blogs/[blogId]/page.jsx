// 'use client'
import BlogDetails from "@/Components/Blogs/BlogDetails";
import { axiosPublic } from "@/hook/axiosPublic";
import React from "react";

const page = async ({ params }) => {
  const id = await params;
  console.log(id.blogId);
  const res = await axiosPublic(`/blog/${id.blogId}`);
  const blog = res.data;
  console.log(blog);

  return (
    <div>
      <BlogDetails blog={blog} />
      {/* <BlogDetails blog={blog} /> */}
    </div>
  );
};

export default page;
