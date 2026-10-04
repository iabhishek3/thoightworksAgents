import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  if (host.includes("thoughtworks.si") && !request.nextUrl.pathname.startsWith("/moved")) {
    return NextResponse.rewrite(new URL("/moved", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|icon.svg).*)"],
};
