import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function requireAdminAPI(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    if ((session.user as any).role !== "admin") {
      return NextResponse.json(
        { error: "Admin access required" },
        { status: 403 }
      );
    }

    return { session, user: session.user };
  } catch (error) {
    console.error("API auth error:", error);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 }
    );
  }
}

export async function withAdminAuth(
  handler: (request: NextRequest, context: any) => Promise<NextResponse>,
  request: NextRequest,
  context: any = {}
) {
  const authResult = await requireAdminAPI(request);
  
  if (authResult instanceof NextResponse) {
    return authResult; // Return error response
  }

  // Add user info to context
  context.user = authResult.user;
  context.session = authResult.session;
  
  return handler(request, context);
}
