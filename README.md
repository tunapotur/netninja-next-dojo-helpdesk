## Next.js Master Class

This repo contains all the course files for the Next.js Master Class on Net Ninja Pro. There is a branch for every lesson. Select the lesson you need from the branch dropdown.

Visit [Net Ninja Pro](https://netninja.dev) to view this course and many more.

## Getting Started with the Project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Ders Notları

```
npm install json-server -g // json-server kurulumu
json-server --watch \_data/db.json --port 4000 // json-server çalıştırma
http://localhost:4000/tickets

// imitate delay
await new Promise((resolve) => setTimeout(resolve, 3000));

## \app\(dashboard)\tickets\[id]\page.jsx

// Nextjs Function nextjs tarahfından bu fonksiyon görüldüğünde bu safyanın meta datasını değiştiriyor.
export async function generateMetadata({ params }) {
const id = params.id

const res = await fetch(`http://localhost:4000/tickets/${id}`)
const ticket = await res.json()

return {
title: `Dojo Helpdesk | ${ticket.title}`
}
}

//Nextjs Function nextjs tarahfından bu fonksiyon görüldüğünde veriler hazırlanıyor
export async function generateStaticParams() {
const res = await fetch('http://localhost:4000/tickets')

const tickets = await res.json()

return tickets.map((ticket) => ({
id: ticket.id
}))
}

## \app\(dashboard)\tickets\TicketList.jsx
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

## \app\api\tickets\route.js

// api her kullanıldığında en güncel veri çekilmesi için gereken ayar kodu
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = "force-dynamic";

export async function GET() {
  const res = await fetch('http://localhost:4000/tickets')

  const tickets = await res.json()

  return NextResponse.json(tickets, {
    status: 200
  })
}



```