import  TradingViewWidget  from "@/components/TradingViewWidget"
import TrendingCoinsPage from "@/components/TrendingCoins";
import YouMayLikePage from "@/components/YouMayLike";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between pt-20 bg-secondary">
      <div className="flex flex-row w-full h-full">
      <div className="w-1/2 h-full">
        <TradingViewWidget />
      </div>
      <TrendingCoinsPage />
      </div>
      <h1 className="text-3xl font-semibold font-sans tracking-light p-2">You May Also Like</h1>
      <YouMayLikePage />
      <h1 className="text-3xl font-semibold font-sans tracking-light p-2">Trending Coins</h1>
      <YouMayLikePage />
    </main>
  );
}
