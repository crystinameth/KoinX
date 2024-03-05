import  TradingViewWidget  from "@/components/TradingViewWidget"
import TrendingCoinsPage from "@/components/TrendingCoins";
import YouMayLikePage from "@/components/YouMayLike";
import { TabsDemo } from "@/components/tabs";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between p-24 bg-secondary">
      <div className="flex h-full py-10"> 
      <div className="w-1/2">
         <TradingViewWidget />
      </div>  
      <TrendingCoinsPage />
      </div>
      <TabsDemo/>
      <h1 className="text-3xl font-semibold font-sans tracking-light p-2">You May Also Like</h1>
      <YouMayLikePage />
      <h1 className="text-3xl font-semibold font-sans tracking-light">Trending Coins</h1>
      <YouMayLikePage />
    </main>
  );
}
