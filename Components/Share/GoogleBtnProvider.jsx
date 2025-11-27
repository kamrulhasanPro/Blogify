import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const GoogleBtnProvider = () => {
  const route = useRouter();
  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <>
      {/* Google */}
      <button
        onClick={handleGoogleLogin}
        className="btn bg-white btn-block text-black border-[#e5e5e5]"
      >
        <FcGoogle size={26} />
        Connect with Google
      </button>
    </>
  );
};

export default GoogleBtnProvider;
