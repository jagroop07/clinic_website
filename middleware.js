// import { NextResponse } from 'next/server';

import { NextResponse } from "next/server";

// const loginPath = "/login"

// export function middleware(request) {
//   const cookies = request.cookies.getAll();
//   console.log(cookies, "----cokeis")
//   const authToken = cookies.find((cookie) => cookie.name === 'admin_token');
//   const expires = cookies.find((cookie) => cookie.name === 'admin_token_expires');
//   // Exclude requests to static files (_next/static, favicon, etc.)
//   const isStaticAsset = request.nextUrl.pathname.startsWith('/_next') ||
//     request.nextUrl.pathname.startsWith('/static') ||
//     request.nextUrl.pathname.startsWith('/favicon.ico') ||
//     request.nextUrl.pathname.startsWith('/api/login');

//   // Allow requests to static assets
//   if (isStaticAsset) {
//     return NextResponse.next();
//   }
//   if (request.nextUrl.pathname === loginPath) {
//     if (authToken) {
//       const expiryDate = new Date(expires.value);
//       if (expiryDate > new Date()) {
//         return NextResponse.redirect(new URL('/admin', request.url));
//       }
//     }
//   } else if (request.nextUrl.pathname.startsWith("/admin")) {
//     if (!authToken) {
//       return NextResponse.redirect(new URL(loginPath, request.url));
//     }
//     const expiryDate = new Date(expires);
//     if (expiryDate < new Date()) {
//       return NextResponse.redirect(new URL(loginPath, request.url));
//     }
//   }
//   return NextResponse.next();
// }

// // Define the paths where the middleware should not be applied
// export const config = {
//   matcher: [loginPath, '/((?!.next|static/|public/|favicon.ico|api).*)'],
// };

export function middleware(request) {
  const cookies = request.cookies.getAll();

  const isStaticAsset =
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/static") ||
    request.nextUrl.pathname.startsWith("/favicon.ico");

  const isAdminPage = request.nextUrl.pathname.startsWith("/admin");

  const isLoginPage = request.nextUrl.pathname.startsWith("/login");

  const authToken = cookies.find((cookie) => cookie.name === "admin_token");

  if (isAdminPage && !authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  
  if (isLoginPage && authToken) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}
