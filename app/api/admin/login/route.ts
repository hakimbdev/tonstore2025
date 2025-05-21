import { cookies } from "next/headers"
import { NextResponse } from "next/server"

// In a real application, these would be stored securely in a database
const ADMIN_CREDENTIALS = {
  email: "admin@tonstore.com",
  password: "admin123",
}

export async function POST(request: Request) {
  const body = await request.json()
  const { email, password } = body

  // Simple validation - in a real app, this would check against a database
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    // Set a cookie to maintain the session
    // In a real app, this would be a secure JWT token
    cookies().set({
      name: "admin_session",
      value: "authenticated",
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
    })

    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
}

