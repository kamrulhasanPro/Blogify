"use client";
import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import Link from "next/link";
import { axiosPublic } from "@/hook/axiosPublic";
import { useMutation, useQuery } from "@tanstack/react-query";
import ManageBlogCard from "./ManageBlogCard";
import LoadingSpinner from "../Share/LoadingSpinner";

const ManageBlog = ({ email }) => {
  const { data: blog, isLoading } = useQuery({
    queryKey: ["myBlogs", email],
    queryFn: async () => await axiosPublic(`/blogs?email=${email}`),
  });

  const { mutateAsync } = useMutation({
    mutationKey: ["myBlogs", email],
    mutationFn: async () => await axiosPublic.delete(`/blogs/${_id}`),
  });

  const handleRemove = async () => {
    await mutateAsync();
    // axiosPublic
    //   .delete(`/blogs/${_id}`)
    //   .then((res) => {
    //     if (res.data.deletedCount) {
    //     }
    //   })
    //   .catch((err) => toast.error(err.code));
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : blog.data.length === 0 ? (
        <p className="text-xl text-gray-500 text-center">Data Not Found</p>
      ) : (
        blog.data.map((blog) => (
          <ManageBlogCard
            key={blog._id}
            blog={blog}
            handleRemove={handleRemove}
          />
        ))
      )}
    </>
  );
};

export default ManageBlog;
