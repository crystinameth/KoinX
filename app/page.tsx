import  TradingViewWidget  from "@/components/TradingViewWidget"
import TrendingCoinsPage from "@/components/TrendingCoins";
import YouMayLikePage from "@/components/YouMayLike";
import { TabsKoin } from "@/components/tabs";
export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen p-20 bg-secondary md:max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-3 py-6 items-center justify-between h-full w-full">
      <div className="w-full h-full col-span-5">
         <TradingViewWidget />
      </div> 
      <div className="w-full col-span-2">
        <TrendingCoinsPage />
      </div> 
      </div>
      <TabsKoin/>
      <h1 className="text-3xl font-semibold font-sans tracking-light p-2">You May Also Like</h1>
      <YouMayLikePage />
      <h1 className="text-3xl font-semibold font-sans tracking-light p-2">Trending Coins</h1>
      <YouMayLikePage />
    </main>
  );
}
