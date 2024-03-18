import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  const token = cookies().get("token");

  console.log(token);

  // if (!token) {
  //   const url = request.nextUrl.clone();
  //   url.pathname = "/";
  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
