"use client";
import React, { useState, useEffect } from "react";
import { TrendingCoin } from "@/app/api/trending/route";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

const YouMayLikePage: React.FC = () => {
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch("/api/trending");

        if (!response.ok) {
          throw new Error("Failed to fetch trending coins");
        }

        const data = await response.json();
        setTrendingCoins(data);
      } catch (error: any) {
        console.error("Error fetching trending coins:", error.message);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="w-full whitespace-nowrap rounded-md mb-4">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-auto"
      >
        <CarouselContent>
          {trendingCoins.map((coin) => (
            <CarouselItem
              key={coin.price}
              className="md:basis-1/3 lg:basis-1/6"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-rectangle p-2">
                    <h2 className="text-xl font-semibold p-3 justify-between flex flex-row">
                      <Image
                        src={coin.thumb}
                        alt="thumb"
                        height={20}
                        width={40}
                      />
                      {coin.symbol}
                      <Button className="percentage-button bg-secondary text-green-500">
                        {coin.priceChangePercentage.toFixed(2)}%
                      </Button>
                    </h2>
                    <h2 className="text-2xl font-bold p-3">{coin.price}</h2>
                      <Image
                      src={coin.sparkline}
                      alt="graph"
                      height={200}
                      width={200}
                    />  
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default YouMayLikePage;
