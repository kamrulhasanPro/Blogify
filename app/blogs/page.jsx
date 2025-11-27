"use client";
import Search from "@/Components/Blogs/Search";
import Card from "@/Components/Share/Card";
import LoadingSpinner from "@/Components/Share/LoadingSpinner";
import MyContainer from "@/Components/Share/MyContainer";
import MyTitle from "@/Components/Share/MyTitle";
import { axiosPublic } from "@/hook/axiosPublic";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Blogs = () => {
  const [search, setSearch] = useState("");

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["allBlogs", search],
    queryFn: async () => (await axiosPublic(`/blogs?search=${search}`)).data,
  });

  console.log(blogs, isLoading);

  return (
    <MyContainer>
      <MyTitle>All Blogs</MyTitle>

      {/* searching */}
      <Search setSearch={setSearch} />
      
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {blogs.map((blog, i) => (
            <Card key={i} blog={blog} />
          ))}
        </div>
      )}
    </MyContainer>
  );
};

export default Blogs;
