"use client";
import { BiSolidCategory } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import Link from "next/link";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosPublic } from "@/hook/axiosPublic";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ManageBlogCard = ({ blog }) => {
  const queryClient = useQueryClient();
  const { _id, title, shortDescription, writer, createdAt } = blog;
  const { mutateAsync } = useMutation({
    mutationFn: async (_id) => await axiosPublic.delete(`/blogs/${_id}`),
    onSuccess: () => {
      toast.success("Delete Success");
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      queryClient.invalidateQueries(["myBlogs"]);
    },
  });

  const handleRemove = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await mutateAsync(_id);
      }
    });
  };
  const btnStyle =
    "py-1 px-1.5 flex items-center justify-center rounded-full gap-1";

  const actionBtn = (
    <>
      <Link href={`blogs/${_id}`} className="my_btn !bg-green-500">
        Details
      </Link>
      <button onClick={handleRemove} className="my_btn !bg-red-500">
        Remove
      </button>
    </>
  );
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between my_bg text-white rounded-xl p-4 mb-4 bg-primary">
        {/* details */}
        <div className="flex-2">
          <h5 className="text-2xl font-medium">{title}</h5>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <button className={`${btnStyle} bg-red-300`}>
              <BiSolidCategory />
              {"Design"}
            </button>
            <button className={`${btnStyle} bg-emerald-300`}>
              <IoPerson />
              {writer.name}
            </button>
            <button className={`${btnStyle} bg-indigo-300`}>
              <MdDateRange />
              {new Date(createdAt).toLocaleDateString()}
            </button>
          </div>
          <p className="mt-2">{shortDescription}</p>
        </div>

        {/* action */}
        <div className="md:flex-1 flex md:justify-end">
          {/* <div className="hidden md:flex flex-col bg-white p-2 rounded-lg gap-2 ">
            {actionBtn}
          </div> */}

          <div className="space-x-2">{actionBtn}</div>
        </div>
      </div>
    </div>
  );
};

export default ManageBlogCard;
