import React from "react";
import Logo from "./Logo";
import MyLink from "./MyLink";
import Link from "next/link";

const Navbar = () => {
  const navigateList = (
    <>
      <li>
        <MyLink href={"/"}>Home</MyLink>
      </li>
      <li>
        <MyLink href={"/blogs"}>Blogs</MyLink>
      </li>
      <li>
        <MyLink href={"/about"}>About</MyLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navigateList}
            </ul>
          </div>
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-5 menu-horizontal px-1">
            {navigateList}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={'/'} className="bg-primary text-white shadow-none py-1 px-4 rounded-sm hover:brightness-110 transition-all duration-200">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
