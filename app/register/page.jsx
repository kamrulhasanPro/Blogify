"use client";
import { axiosPublic } from "@/hook/axiosPublic";
import MyContainer from "@/Components/Share/MyContainer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import GoogleBtnProvider from "@/Components/Share/GoogleBtnProvider";
import { signOut } from "next-auth/react";

const Register = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axiosPublic.post("/register", data);
      console.log(res);
      if (res.data.insertedId) {
        signOut({redirect: false})
        reset();
        toast.success("Register Success please login");
        router.push('/login')
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || error.code);
    }
  };
  return (
    <MyContainer className={"h-full"}>
      <div className="max-w-[600px] m-auto bg-white shadow-lg p-5 rounded-2xl">
        <h2 className="text-2xl md:text-4xl font-semibold mb-1 text-secondary">
          Register
        </h2>
        <p className="mb-4 text-secondary font-medium">Create a new account</p>
        {/* Google */}
        <GoogleBtnProvider/>


        <div className="divider">Or Login With Email</div>

        {/* login form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <label htmlFor="name mt-2">
            <p className="text-lg">Name</p>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required." })}
              className="my_input"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </label>

          {/* profile */}
          <label htmlFor="profile">
            <p className="text-lg mt-2">Profile (URL)</p>
            <input
              type="url"
              id="profile"
              placeholder="Enter your profile url"
              {...register("profile", { required: "profile is required." })}
              className="my_input"
            />
            {errors.profile && (
              <p className="text-red-500">{errors.profile.message}</p>
            )}
          </label>
          {/* email */}
          <label htmlFor="email">
            <p className="text-lg mt-2">Email</p>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required." })}
              className="my_input"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </label>

          {/* password */}
          <label htmlFor="password">
            <p className="text-lg mt-2">Password</p>
            <input
              type="password"
              id="password"
              placeholder="Enter New password"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Minimum 6 character or longer.",
                },
              })}
              className="my_input"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </label>

          {/* check and forget */}
          <div className="flex items-center justify-between mt-2">
            <label htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                defaultChecked
                className="checkbox checkbox-primary w-5 h-5"
                {...register("terms", {
                  required: "Must be accept terms & condition.",
                })}
              />
              Terms & Condition
              {errors.terms && (
                <p className="text-red-500">{errors.terms.message}</p>
              )}
            </label>
          </div>

          {/* button */}
          <button className="my_btn w-full mt-5">Register</button>
        </form>
        {/* already create */}
        <p className="text-semibold text-center mt-4">
          Already register yet?{" "}
          <Link href={"/login"} className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </MyContainer>
  );
};

export default Register;
