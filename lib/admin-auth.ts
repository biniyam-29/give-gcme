import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function requireAdmin() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      redirect("/auth/sign-in?callbackUrl=/admin");
    }

    if ((session.user as any).role !== "admin") {
      redirect("/unauthorized");
    }

    return session;
  } catch (error) {
    console.error("Admin auth error:", error);
    redirect("/auth/sign-in?callbackUrl=/admin");
  }
}

export async function isAdmin() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    return session && (session.user as any).role === "admin";
  } catch (error) {
    return false;
  }
}
