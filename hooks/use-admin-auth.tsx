"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useAdminAuth() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/auth/sign-in?callbackUrl=" + encodeURIComponent(window.location.pathname));
    } else if (!isPending && session && (session.user as any).role !== "admin") {
      router.push("/unauthorized");
    }
  }, [session, isPending, router]);

  return {
    session,
    isLoading: isPending,
    isAdmin: (session?.user as any)?.role === "admin",
    user: session?.user,
  };
}
