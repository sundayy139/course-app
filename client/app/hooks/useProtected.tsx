import { redirect } from "next/navigation";
import useUserAuth from "./useUserAuth";
import { ReactNode } from "react";

interface ProtectedProps {
  children: ReactNode;
}

export default function Protected({ children }: ProtectedProps) {
  const isAuthenticated = useUserAuth();

  return isAuthenticated ? children : redirect("/");
}
