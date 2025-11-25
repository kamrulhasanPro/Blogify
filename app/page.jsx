import Features from "@/Components/Home/Features";
import Hero from "@/Components/Home/Hero";
import LatestBlogs from "@/Components/Home/LatestBlogs";
import WhyChooseUs from "@/Components/Home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <LatestBlogs />
      <WhyChooseUs />
    </div>
  );
}
