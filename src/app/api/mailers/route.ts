import { NextResponse } from "next/server"

export async function GET() {
  // Mock data for mailers
  const mailers = [
    { id: "1", name: "Welcome Email" },
    { id: "2", name: "Newsletter" },
    { id: "3", name: "Promotional Offer" },
  ]

  return NextResponse.json(mailers)
}

