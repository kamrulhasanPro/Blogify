"use client";
import { Menu, Transition } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";
import { IoIosAddCircle, IoMdSettings } from "react-icons/io";
import LoadingSpinner from "./LoadingSpinner";

export default function ProfileDropdown() {
  const { data: session, status } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const handleLogout = () => {
    signOut({ redirect: false });
    if (pathName == "/add-blog" || "/manage-blog") {
      router.push("/login");
    }
  };

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  // If user not logged in
  if (!session) return null;

  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="rounded-full outline-2 outline-primary">
            <figure className="w-8 h-8 overflow-hidden rounded-full">
              <Image
                width={32}
                height={32}
                className="w-full h-full object-cover"
                src={session.user.image ?? "/default-profile.png"}
                alt="user profile"
              />
            </figure>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <div className="flex gap-2 items-center">
                    <figure className="w-8 h-8 overflow-hidden rounded-full">
                      <Image
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                        src={session.user.image ?? "/default-profile.png"}
                        alt="user profile"
                      />
                    </figure>
                    <div>
                      <h6 className="font-semibold text-secondary">
                        {session.user.name}
                      </h6>
                      <p className="text-sm text-secondary-content">
                        {session.user.email}
                      </p>
                    </div>
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={"/manage-blog"}
                    className={`${
                      active ? "bg-primary text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold cursor-pointer`}
                  >
                    {active ? (
                      <IoMdSettings
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <IoMdSettings
                        className="mr-2 h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    )}
                    Blog Manage
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={"/add-blog"}
                    className={`${
                      active ? "bg-primary text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold cursor-pointer`}
                  >
                    {active ? (
                      <IoIosAddCircle
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <IoIosAddCircle
                        className="mr-2 h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    )}
                    Add Blog
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={`${
                      active ? "bg-primary" : "text-secondary"
                    } group btn w-full bg-red-500 text-white`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
