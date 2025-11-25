import Card from "@/Components/Share/Card";
import MyContainer from "@/Components/Share/MyContainer";
import MyTitle from "@/Components/Share/MyTitle";
import React from "react";

const Blogs = () => {
const featureBlogs = [
    {
      title: "Mastering JavaScript Basics",
      desc: "Learn core JS concepts with simple examples to build a strong foundation.",
      cta: "Read More",
    },
    {
      title: "Responsive Web Design Tips",
      desc: "Create websites that look perfect on any device with these practical tips.",
      cta: "Explore Article",
    },
    {
      title: "Beginner’s Guide to React",
      desc: "Step-by-step tutorials to help you start building dynamic web apps.",
      cta: "Learn React",
    },
    {
      title: "CSS Tricks You Should Know",
      desc: "Simple CSS techniques to make your web pages look polished and modern.",
      cta: "Discover Tips",
    },
  ];

  return (
    <MyContainer>
      <MyTitle>All Blogs</MyTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            featureBlogs.map((feature, i) => (
                <Card key={i} feature={feature}/>
            ))
        }
      </div>
    </MyContainer>
  );
};

export default Blogs;
