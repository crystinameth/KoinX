import  TradingViewWidget  from "@/components/TradingViewWidget"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-1/2 h-full">
        <TradingViewWidget />
      </div>
    </main>
  );
}
