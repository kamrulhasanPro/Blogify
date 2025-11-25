import Features from "@/Components/Home/Features";
import Hero from "@/Components/Home/Hero";
import LatestBlogs from "@/Components/Home/LatestBlogs";
import Testimonials from "@/Components/Home/OurFeedback";
import WhyChooseUs from "@/Components/Home/WhyChooseUs";
import WhyReadBlog from "@/Components/Home/WhyReadBlog";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <LatestBlogs />
      <WhyChooseUs />
      <WhyReadBlog />
      <Testimonials />
    </div>
  );
}
