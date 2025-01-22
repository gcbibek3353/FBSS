"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import jwt from "jsonwebtoken";

const ProtectedRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isVerified, setIsVerified] = useState(false); 
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.message("You currently don't have access to the admin page");
      router.push("/admin/login");
      return;
    }

    try {
      const decodedToken = jwt.decode(token); 
      if (!decodedToken) throw new Error("Invalid token");
      // We can also verify the token using an API endpoint or server action
      setIsVerified(true);
    } catch (error) {
      toast.message("Some error occurred while verifying the token");
      console.error(error);
      router.push("/admin/login");
    }
  }, [router]);

  if (!isVerified) {
    return <div>This route is protected</div>; 
  }

  return <>{children}</>;
};

export default ProtectedRoute;
