'use client'
import Card from "@/Components/Share/Card";
import LoadingSpinner from "@/Components/Share/LoadingSpinner";
import MyContainer from "@/Components/Share/MyContainer";
import MyTitle from "@/Components/Share/MyTitle";
import { axiosPublic } from "@/hook/axiosPublic";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Blogs = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: async () => await axiosPublic("/blogs"),
  });

  if (isLoading){
    return <LoadingSpinner />;
  } 
    
  const res = data;
  console.log(data, isLoading);
  const featureBlogs = res.data;

  return (
    <MyContainer>
      <MyTitle>All Blogs</MyTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featureBlogs.map((feature, i) => (
          <Card key={i} feature={feature} />
        ))}
      </div>
    </MyContainer>
  );
};

export default Blogs;
