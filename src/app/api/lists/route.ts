import { NextResponse } from "next/server"

export async function GET() {
  // Mock data for lists
  const lists = [
    { id: "1", name: "New Subscribers" },
    { id: "2", name: "Active Users" },
    { id: "3", name: "VIP Customers" },
  ]

  return NextResponse.json(lists)
}

