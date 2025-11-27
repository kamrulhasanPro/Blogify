"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import LoadingSpinner from "./LoadingSpinner";

const FirstLoader = ({ children }) => {
  const { status } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status !== "loading") {
      setIsLoading(false);
    }
  }, [status]);

  if (isLoading) return <LoadingSpinner className={'!h-screen'}/>;

  return <>{children}</>;
};

export default FirstLoader;
