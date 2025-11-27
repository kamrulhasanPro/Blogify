"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`${
        pathName === href ? "text-primary" : "text-secondary"
      } font-semibold transition-all`}
    >
      {children}
    </Link>
  );
};

export default MyLink;
