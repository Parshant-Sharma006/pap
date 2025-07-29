import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  const protectedPaths = [
    "/app/Wallet",
    "/app/Utilities",
    "/app/Settings",
    "/app/Shipment",
    "/app/Billings",
    "/app/NDR",
    "/app/Reports",
    "/app/Dashboard",
    "/admin",
    "/app/AddOrders",
  ];

  const currentPath = request.nextUrl.pathname;

  const isProtected = protectedPaths.some(
    (path) => currentPath === path || currentPath.startsWith(`${path}/`)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/app/Wallet",
    "/app/Wallet/:path*",
    "/app/Utilities",
    "/app/Utilities/:path*",
    "/app/Settings",
    "/app/Settings/:path*",
    "/app/Shipment",
    "/app/Shipment/:path*",
    "/app/Billings",
    "/app/Billings/:path*",
    "/app/NDR",
    "/app/NDR/:path*",
    "/app/Reports",
    "/app/Reports/:path*",
    "/app/Dashboard",
    "/app/Dashboard/:path*",
    "/app/AddOrders",
    "/app/AddOrders/:path*",
    "/admin",
    "/admin/:path*",
  ],
};
