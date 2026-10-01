import { NextRequest, NextResponse } from "next/server";

const guestOnlyRoutes = ["/", "/login", "/register"];

const publicRoutes = [
  "/how-it-works",
  "/about-us",
  "/terms",
  "/privacy",
  "/faq",
];

export function proxy(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  const pathname = request.nextUrl.pathname;

  const isGuestOnly = guestOnlyRoutes.includes(pathname);
  const isPublic = publicRoutes.includes(pathname);

  if (token && isGuestOnly) {
    return NextResponse.redirect(new URL("/newsfeed", request.url));
  }
  if (!token && !isGuestOnly && !isPublic) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
