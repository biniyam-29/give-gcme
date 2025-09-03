"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function useAdminCheck() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function checkAdmin() {
      try {
        // Skip auth check during build time
        if (typeof window === 'undefined') {
          setIsLoading(false);
          return;
        }

        const session = await authClient.getSession();
        
        if (!session.data) {
          router.push("/auth/sign-in?callbackUrl=/admin");
          return;
        }

        const userRole = (session.data.user as any).role;
        if (userRole !== "admin") {
          router.push("/unauthorized");
          return;
        }

        setIsAdmin(true);
      } catch (error) {
        console.error("Admin check failed:", error);
        // Only redirect on client-side
        if (typeof window !== 'undefined') {
          router.push("/auth/sign-in?callbackUrl=/admin");
        }
      } finally {
        setIsLoading(false);
      }
    }

    checkAdmin();
  }, [router]);

  return { isLoading, isAdmin };
}
