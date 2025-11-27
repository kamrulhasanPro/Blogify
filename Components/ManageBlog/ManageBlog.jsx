"use client";
import React from "react";
import { axiosPublic } from "@/hook/axiosPublic";
import { useMutation, useQuery } from "@tanstack/react-query";
import ManageBlogCard from "./ManageBlogCard";
import LoadingSpinner from "../Share/LoadingSpinner";

const ManageBlog = ({ email }) => {
  const { data: blog, isLoading } = useQuery({
    queryKey: ["myBlogs", email],
    queryFn: async () => await axiosPublic(`/blogs?email=${email}`),
    enabled: !!email,
  });

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : blog.data.length === 0 ? (
        <p className="text-xl text-gray-500 text-center">Data Not Found</p>
      ) : (
        blog.data.map((blog) => <ManageBlogCard key={blog._id} blog={blog} />)
      )}
    </>
  );
};

export default ManageBlog;
