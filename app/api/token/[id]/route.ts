
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const  id  = params.id
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const respData = await res.json()

  const symbol = respData?.symbol;

  if (!symbol) {
    throw new Error(`Symbol not found for ${id}`);
  }

  return Response.json({ symbol })
}

