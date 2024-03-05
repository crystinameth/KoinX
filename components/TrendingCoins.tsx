"use client"
import React, { useState, useEffect } from 'react';
import { CoinData } from '@/app/api/getCoins/route'; 
import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

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
    <div className='flex flex-col py-4 sm:hidden md:block'>
      
      <Card className='w-1/2 bg-blue-600 text-white p-4 mb-6'>
        <CardHeader className='text-center'>
          <CardTitle>Get Started With KoinX for FREE</CardTitle>
          <CardDescription className='text-white p-2'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col items-center'>
          <Image src="/search.svg" alt="img" height={200} width={200}/>
          <Button className='bg-white text-black hover:bg-blue-200 mt-10'>Get Started for Free -&gt;</Button>
        </CardContent>
      </Card>

      <Card className='w-1/2'>
        <CardContent className="flex flex-col aspect-rectangle p-2">
          <h1 className='text-2xl font-semibold'>Trending Coins (24h)</h1>
          {trendingCoins.map((coin) => (
            <div key={coin.name} className='flex flex-row p-2'>
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
