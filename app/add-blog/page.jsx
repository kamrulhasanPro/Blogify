import AddBlogPage from "@/Components/AddBlog/AddBlogPage";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const AddBlog = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    // If user is not logged in
    redirect("/login");
  }
  return <AddBlogPage session={session} />;
};

export default AddBlog;
