"use client";
import MyContainer from "@/Components/Share/MyContainer";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import GoogleBtnProvider from "@/Components/Share/GoogleBtnProvider";

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submitted login
  const onSubmit = async (data) => {
    // send credential route page
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.ok) {
      // login success
      toast.success("Login Success");
      router.push("/");
    } else {
      // login fail
      toast.error("please give me valid email & password");
    }
  };

  return (
    <MyContainer className={"h-full"}>
      <div className="max-w-[600px] m-auto bg-white p-5 rounded-2xl">
        <h2 className="text-2xl md:text-4xl font-semibold mb-1 text-secondary">
          Login
        </h2>
        <p className="mb-4 text-secondary font-medium">Hi, Welcome back✨</p>
        <GoogleBtnProvider/>
        <div className="divider">Or Login With Email</div>

        {/* login form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email */}
          <label htmlFor="email">
            <p className="text-lg">Email</p>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              {...register("email", { required: "Email is required." })}
              className="my_input"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </label>

          {/* password */}
          <label htmlFor="password">
            <p className="text-lg mt-1">Password</p>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
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
              />
              Remember me
            </label>

            <p className="text-indigo-500 hover:border-b cursor-pointer">Forget password</p>
          </div>

          {/* button */}
          <button className="my_btn w-full mt-5">Login</button>
        </form>

        {/* not register */}
        <p className="text-semibold text-center mt-4">
          Not register yet?{" "}
          <Link href={"/register"} className="text-primary">
            Create an Account
          </Link>
        </p>
      </div>
    </MyContainer>
  );
};

export default Login;
