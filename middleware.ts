import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request is for an admin route
  if (pathname.startsWith("/admin")) {
    try {
      // Check for session cookie
      const sessionCookie = request.cookies.get("better-auth.session_token");
      
      if (!sessionCookie) {
        const signInUrl = new URL("/auth/sign-in", request.url);
        signInUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(signInUrl);
      }

      // For now, allow access if session cookie exists
      // Role-based authorization will be handled in the actual admin pages
      return NextResponse.next();
    } catch (error) {
      console.error("Auth middleware error:", error);
      const signInUrl = new URL("/auth/sign-in", request.url);
      signInUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
