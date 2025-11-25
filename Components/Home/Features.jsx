import React from "react";
import MyTitle from "../Share/MyTitle";
import MyContainer from "../Share/MyContainer";
import Card from "../Share/Card";

const Features = () => {
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
      <MyTitle>Featured Blogs</MyTitle>

      {/* grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* first blog */}
        <div className="hidden md:flex flex-col md:flex-row gap-4 items-center justify-center col-span-auto md:col-span-2 lg:col-span-3">
          <figure className="flex-1 h-72 overflow-hidden rounded-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=809&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="banner"
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="flex-1">
            {/* title */}
            <h3 className="text-2xl text-secondary mb-2">
              {featureBlogs[0].title}
            </h3>

            {/* short description */}
            <p className="mb-4 text-gray-400">{featureBlogs[0].desc}</p>

            {/* cta */}
            <button className="my_btn_outline">Read More</button>
          </div>
        </div>

        {/* just mobile device */}
        <div className="md:hidden">
        <Card feature={featureBlogs[0]}/>
        </div>

        {/* other blog */}
        {featureBlogs.slice(1).map((feature, i) => (
          <Card key={i} feature={feature} />
        ))}
      </div>
    </MyContainer>
  );
};

export default Features;
