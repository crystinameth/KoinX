export type CoinData = {
    name: string;
    symbol: string;
    thumb: string;
    priceChangePercentage: {
      usd: number;
    };
  };

export async function GET(request: Request) {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch trending coins");
    }

    const data = await response.json();
    
    const top3TrendingCoins: CoinData[] = data.coins.slice(0, 3).map((coin: any) => ({
        name: coin.item.name,
        symbol: coin.item.symbol,
        thumb: coin.item.thumb,
        priceChangePercentage: coin.item.data.price_change_percentage_24h.usd,
      }));
    
      return new Response(JSON.stringify(top3TrendingCoins), {
        headers: { "Content-Type": "application/json" },
      });
  } catch (error: any) {
    console.error("Error fetching trending coins:", error.message);
    throw new Error("Internal Server Error");
  }
}
