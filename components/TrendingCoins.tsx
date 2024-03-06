"use client"
import React, { useState, useEffect } from 'react';
import { CoinData } from '@/app/api/getCoins/route'; 
import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowRight } from 'lucide-react';

const TrendingCoinsPage: React.FC = () => {
  const [trendingCoins, setTrendingCoins] = useState<CoinData[]>([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('/api/getCoins'); 

        if (!response.ok) {
          throw new Error('Failed to fetch trending coins');
        }

        const data = await response.json();
        setTrendingCoins(data);
      } catch (error: any) {
        console.error('Error fetching trending coins:', error.message);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className='md:flex flex-col w-full gap-3'>
      
      <Card className='w-full bg-blue-600 text-neutral-100 p-4'>
        <CardHeader className='text-center'>
          <CardTitle>Get Started With KoinX for FREE</CardTitle>
          <CardDescription className='text-white p-2'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col items-center'>
          <Image src="/search.svg" alt="img" height={200} width={200}/>
          <Button className="bg-white text-black hover:bg-white/90 mt-10 flex items-center justify-center">
            Get Started for Free <ArrowRight className="h-4 w-4 ml-1" />
          </Button>        
          </CardContent>
      </Card>

      <Card className='w-full p-3 flex flex-col items-start bg-neutral-100'>
        <CardContent className="grid grid-rows-4">
          <h1 className='text-2xl font-semibold'>Trending Coins (24h)</h1>
          {trendingCoins.map((coin) => (
            <div key={coin.name} className='grid grid-cols-3 items-center overflow-hidden'>
              <Image src={coin.thumb} alt="thumb" height={20} width={40}/>
              <h2 className='text-lg text-bold p-2'>
                {coin.name} ({coin.symbol})
              </h2>
                <Button className="percentage-button bg-secondary text-green-500">
                {coin.priceChangePercentage.toFixed(2)}%
                </Button>
            </div>
          ))}
        </CardContent>
      </Card>
  
    </div>
  );
};

export default TrendingCoinsPage;
