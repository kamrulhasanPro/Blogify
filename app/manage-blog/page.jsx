'use server'
import ManageBlog from "@/Components/ManageBlog/ManageBlog";
import LoadingSpinner from "@/Components/Share/LoadingSpinner";
import MyContainer from "@/Components/Share/MyContainer";
import MyTitle from "@/Components/Share/MyTitle";
import { axiosPublic } from "@/hook/axiosPublic";
import { authOptions } from "@/lib/auth";
import { useQuery } from "@tanstack/react-query";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    // If user is not logged in
    redirect("/login");
  }
  const email = session.user.email;

  return (
    <MyContainer>
      <MyTitle>Manage Blog</MyTitle>
      <ManageBlog email={email} />
    </MyContainer>
  );
};

export default page;
