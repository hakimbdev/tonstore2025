import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check if the request is for the admin dashboard
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // In a real application, this would verify JWT tokens or session cookies
    // For this demo, we'll just check for a specific header that our client sets
    const isAuthenticated = request.cookies.has("admin_session")

    // If not authenticated, redirect to the home page
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/admin/:path*",
}

