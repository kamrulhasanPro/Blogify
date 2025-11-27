import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

const ProtectPage = async ({ children }) => {
  const session = await getServerSession(authOptions);

  // Redirect to login if user is not logged in
  if (!session) redirect("/login");

  // User is authenticated, render children
  return children;
};

export default ProtectPage;
