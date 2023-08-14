import Link from "next/link"

async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      // aysı sayfa içinde 30 saniyede bir çekilecek veriyi güncelleyecek
      // 30 saniye içinde veri değişse bile cache'den eski veri gelecek
      // revalidate: 30,
      revalidate: 0, // use 0 to opt out of using cache
    },
  });

  return res.json()
}

export default async function TicketList() {
  const tickets = await getTickets()

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  )
}
