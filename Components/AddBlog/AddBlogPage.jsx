"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MyContainer from "../Share/MyContainer";
import MyTitle from "../Share/MyTitle";
import { useMutation } from "@tanstack/react-query";
import { axiosPublic } from "@/hook/axiosPublic";
import { toast } from "react-toastify";
import LoadingSpinner from "../Share/LoadingSpinner";
import Swal from "sweetalert2";

const AddBlogForm = ({ session }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["blogs", session.user.email],
    mutationFn: async (blog) => await axiosPublic.post("/blogs", blog),
    onSuccess: () => {
      reset();
      Swal.fire({
        title: "Posted!",
        text: "Your blog has been posted.",
        icon: "success",
      });
      toast.success("Post Success");
    },
    onError: () => toast.error("Something Error."),
  });

  const randomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };

  // Submit handler
  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    const generateViews = `${randomNumber(80)}k`;
    const { title, shortDescription, big_blog, name, email, avatar, image } =
      data;
    const newBlog = {
      title,
      shortDescription,
      image,
      big_blog,
      writer: {
        name,
        email,
        avatar,
      },
      views: generateViews,
      rating: randomNumber(5),
      createdAt: new Date(),
    };
    console.log(newBlog);
    Swal.fire({
      title: "Are you sure?",
      text: "this a public blog!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await mutateAsync(newBlog);
      }
    });
  };

  return (
    <MyContainer className="md:!max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
      <MyTitle className="">✍️ Create a New Blog</MyTitle>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Blog Title */}
        <div>
          <label className="font-semibold text-gray-700">Blog Title</label>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Enter blog title..."
            className="input_form"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">Title required</p>
          )}
        </div>

        {/* Short Description */}
        <div>
          <label className="font-semibold text-gray-700">
            Short Description
          </label>
          <textarea
            {...register("shortDescription", { required: true })}
            placeholder="Enter a short blog summary..."
            className="input_form h-24"
          ></textarea>
          {errors.shortDescription && (
            <p className="text-red-500 text-sm">Description required</p>
          )}
        </div>

        {/* Full Content */}
        <div>
          <label className="font-semibold text-gray-700">
            Full Blog Content
          </label>
          <textarea
            {...register("big_blog", { required: true })}
            placeholder="Write full blog content here..."
            className="input_form h-40"
          ></textarea>
          {errors.big_blog && (
            <p className="text-red-500 text-sm">Content required</p>
          )}
        </div>

        {/* Writer Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="font-semibold text-gray-700">Writer Name</label>
            <input
              value={session.user.name}
              {...register("name", { required: true })}
              type="text"
              placeholder="Writer name..."
              className="input_form"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Writer Email</label>
            <input
              value={session.user.email}
              {...register("email", { required: true })}
              type="email"
              placeholder="Writer email..."
              className="input_form"
            />
          </div>
        </div>

        {/* Writer Avatar */}
        <div>
          <label className="font-semibold text-gray-700">
            Writer Avatar URL
          </label>
          <input
            defaultValue={session.user.image}
            {...register("avatar", { required: true })}
            type="url"
            placeholder="Image URL..."
            onChange={(e) => setImagePreview(e.target.value)}
            className="input_form"
          />
          {errors.avatar && (
            <p className="text-red-500 text-sm">Writer Avatar required</p>
          )}

          {/* Preview
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-3 w-24 h-24 object-cover rounded-full border"
            />
          )} */}
        </div>

        {/* Blog Image */}
        <div>
          <label className="font-semibold text-gray-700">Blog Image URL</label>
          <input
            {...register("image", { required: true })}
            type="url"
            placeholder="Blog image URL..."
            className="input_form"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">Blog Image required</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="my_btn w-full flex gap-1.5 justify-center"
        >
          {isPending && (
            <span className="loading loading-spinner loading-md"></span>
          )}{" "}
          Publish Blog 🚀
        </button>
      </form>
    </MyContainer>
  );
};

export default AddBlogForm;
