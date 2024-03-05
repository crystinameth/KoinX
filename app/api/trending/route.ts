export type TrendingCoin = {
    symbol: string;
    thumb: string;
    price: number;
    sparkline: string;
    priceChangePercentage: {
      toFixed(arg0: number): import("react").ReactNode;
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
    
    const top7TrendingCoins: TrendingCoin[] = data.coins.map((coin: any) => ({
        price: coin.item.data.price,
        symbol: coin.item.symbol,
        thumb: coin.item.thumb,
        priceChangePercentage: coin.item.data.price_change_percentage_24h.usd,
        sparkline: coin.item.data.sparkline,
      }));
    
      return new Response(JSON.stringify(top7TrendingCoins), {
        headers: { "Content-Type": "application/json" },
      });
  } catch (error: any) {
    console.error("Error fetching trending coins:", error.message);
    throw new Error("Internal Server Error");
  }
}
