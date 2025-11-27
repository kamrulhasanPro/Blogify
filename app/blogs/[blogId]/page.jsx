// 'use client'
import BlogDetails from "@/Components/Blogs/BlogDetails";
import { axiosPublic } from "@/hook/axiosPublic";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }) => {
  const session = await getServerSession(authOptions);
  console.log(session);
   if (!session) {
    // If user is not logged in
    redirect("/login");
  }

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
