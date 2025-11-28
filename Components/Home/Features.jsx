"use client";
import React from "react";
import MyTitle from "../Share/MyTitle";
import MyContainer from "../Share/MyContainer";
import Card from "../Share/Card";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "@/hook/axiosPublic";
import LoadingSpinner from "../Share/LoadingSpinner";
import Link from "next/link";

const Features = () => {
  const { data: featureBlogs = [], isLoading } = useQuery({
    queryKey: ["myBlogs"],
    queryFn: async () => (await axiosPublic("/features-blog")).data,
  });

  return (
    <MyContainer>
      <MyTitle>Featured Blogs</MyTitle>

      {/* grid layout */}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* first blog */}
          <div className="hidden md:flex flex-col md:flex-row gap-4 items-center justify-center col-span-auto md:col-span-2 lg:col-span-3">
            <figure className="flex-1 h-72 overflow-hidden rounded-2xl">
              <img
                src={featureBlogs[0].image}
                alt="banner"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="flex-1">
              {/* title */}
              <h3 className="text-2xl text-secondary font-semibold mb-2">
                {featureBlogs[0].title}
              </h3>

              {/* short description */}
              <p className="mb-4 text-gray-400">
                {featureBlogs[0].shortDescription}
              </p>

              {/* cta */}
              <Link href={`/blogs/${featureBlogs[0]._id}`} className="my_btn_outline">Read More</Link>
            </div>
          </div>

          {/* just mobile device */}
          <div className="md:hidden">
            <Card blog={featureBlogs[0]} />
          </div>

          {/* other blog */}
          {featureBlogs.slice(1).map((blog, i) => (
            <Card key={i} blog={blog} />
          ))}
        </div>
      )}
    </MyContainer>
  );
};

export default Features;
