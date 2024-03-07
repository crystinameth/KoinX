import  TradingViewWidget  from "@/components/TradingViewWidget"
import TrendingCoinsPage from "@/components/TrendingCoins";
import YouMayLikePage from "@/components/YouMayLike";
import { TabsKoin } from "@/components/tabs";
export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen p-10 md:p-20 md:max-w-screen-2xl md:mx-auto overflow-x-auto">
      <div className="grid grid-cols-1 sm:grid-cols-7 gap-3 justify-between h-full w-full">
      <div className="w-full col-span-5 pt-10 sm:pt-0">
        <TradingViewWidget />
      </div>
      <div className="w-full col-span-4 lg:col-span-2 hidden sm:block">
        <TrendingCoinsPage />
      </div> 
      </div>
      <div className="gap-y-2">
      <TabsKoin/>
      </div>
      <h1 className="text-3xl font-semibold font-sans tracking-light sm:p-2">You May Also Like</h1>
      <YouMayLikePage />
      <h1 className="text-3xl font-semibold font-sans tracking-light sm:p-2">Trending Coins</h1>
      <YouMayLikePage />
      <div className="block sm:hidden">
        <TrendingCoinsPage />
      </div>
    </main>
  );
}
