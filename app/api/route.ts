export async function GET(request: Request) {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true')
    const data = await res.json()
   
    return Response.json({ data })
  }