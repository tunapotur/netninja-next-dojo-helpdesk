import { NextResponse } from "next/server";

// api her kullanıldığında en güncel veri çekilmesi için gereken ayar kodu
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = "force-dynamic";

export async function GET() {
  const res = await fetch("http://localhost:4000/tickets");

  const tickets = await res.json();

  return NextResponse.json(tickets, { status: 200 });
}

export async function POST(request) {
  const ticktet = await request.json();

  const res = await fetch("http://localhost:4000/tickets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ticktet),
  });

  const newTicket = await res.json();

  return NextResponse.json(newTicket, { status: 201 });
}
