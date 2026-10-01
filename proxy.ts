import { NextResponse, type NextRequest } from "next/server";

const PROTECTED_ROUTES = ["/newsfeed", "/profile"];
const GUEST_ONLY_ROUTES = ["/login", "/register"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = !!request.cookies.get("accessToken")?.value;

  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route),
  );
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const isGuestOnlyRoute = GUEST_ONLY_ROUTES.some((route) =>
    pathname.startsWith(route),
  );
  if (isGuestOnlyRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/newsfeed", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/newsfeed/:path*", "/profile/:path*", "/login", "/register"],
};
