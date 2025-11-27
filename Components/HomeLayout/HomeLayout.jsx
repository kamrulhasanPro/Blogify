import Navbar from "@/Components/Share/Navbar";
import Footer from "@/Components/Share/Footer";
import { ToastContainer } from "react-toastify";
import React from "react";
import FirstLoader from "../Share/FirstLoader";

const HomeLayout = ({ children }) => {
    
  return (
    <FirstLoader>
      <ToastContainer />
      <Navbar />
      <main className="min-h-[calc(100vh-80px-278px)]">{children}</main>
      <Footer />
    </FirstLoader>
  );
};

export default HomeLayout;
