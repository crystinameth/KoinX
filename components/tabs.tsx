import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { CatIcon, DollarSign, Hash, InfoIcon, Percent } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Progress } from "@/components/ui/progress"

export function TabsKoin() {
  return (
    <Tabs defaultValue="overview" className="max-w-full sm:max-w-5xl">
      <TabsList className="grid grid-cols-3 md:grid-cols-6 m-10 gap-x-20 sm:gap-x-3 h-16 sm:h-auto">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
        <TabsTrigger value="sentiments">Sentiments</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
        <TabsTrigger value="technicals">Technicals</TabsTrigger>
        <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>About Bitcoin</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1 text-lg font-semibold">
              What is Bitcoin?
            </div>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis voluptas doloribus rerum similique sequi provident
              impedit id enim debitis, autem nisi, voluptatibus laudantium odit
              fugiat consequatur iure tenetur eius nesciunt.
            </p>
            <Separator />
            <div className="space-y-1 text-lg font-semibold">
              Lorem ipsum dolor sit amet
            </div>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              sequi perferendis odio, dignissimos reprehenderit facilis
              doloribus aliquid, dolores, doloremque assumenda atque voluptates
              repellendus accusantium ipsum ipsa corporis? Nobis, corrupti sint?
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              sequi perferendis odio, dignissimos reprehenderit facilis
              doloribus aliquid, dolores, doloremque assumenda atque voluptates
              repellendus accusantium ipsum ipsa corporis? Nobis, corrupti sint?
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              sequi perferendis odio, dignissimos reprehenderit facilis
              doloribus aliquid, dolores, doloremque assumenda atque voluptates
              repellendus accusantium ipsum ipsa corporis? Nobis, corrupti sint?
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              sequi perferendis odio, dignissimos reprehenderit facilis
              doloribus aliquid, dolores, doloremque assumenda atque voluptates
              repellendus accusantium ipsum ipsa corporis? Nobis, corrupti sint?
            </p>
            <Separator />
            <div className="space-y-1 text-lg font-semibold">
              Already Holding Bitcoin?
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Card className="bg-pink-300 max-w-sm">
                <CardContent className="grid grid-cols-2 items-center p-3">
                  <Image src="/token.webp" alt="img" height={100} width={100} />
                  <div className="grid grid-rows-2 items-center text-white">
                    <h1 className="text-xl">Calculate your Profits</h1>
                    <Button className="bg-white text-black hover:bg-neutral-200">
                      Check now -&gt;
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-blue-300 max-w-sm">
                <CardContent className="grid grid-cols-2 items-center p-3">
                  <Image src="/token.webp" alt="img" height={100} width={100} />
                  <div className="grid grid-rows-2 items-center text-white">
                    <h1 className="text-xl">Calculate your tax liability</h1>
                    <Button className="bg-white text-black hover:bg-neutral-200">
                      Check now -&gt;
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Separator />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              natus inventore? Nesciunt maxime dolorem ad possimus quidem neque
              tenetur labore obcaecati exercitationem, dolores iusto ullam
              placeat praesentium eos? Nulla, illo.
            </p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="fundamentals">
        <Card>
          <CardHeader>
            <CardTitle>Fundamentals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-2">
              <h1 className="text-xl font-semibold flex gap-2">
                Performance
              </h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-3 text-md ">
                  Today&apos;s Low 46,930.22
                  <Progress value={75} />
                  Today&apos;s High 49,343.83
                </div>
                <div className="flex flex-row gap-3 text-md">
                  52W Low 16,930.22
                  <Progress value={65} />
                  52W High 49,743.83
                </div>
              </div>
            </div>
            <Separator/>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold flex gap-y-4">
                Fundamentals <InfoIcon w-2 h-2 fill-primary />
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <div className="w-full flex justify-between">
                      <h1 className="text-neutral-400">Bitcoin Price</h1>
                      <h1 className="flex font-sans"><DollarSign className="w-4"/>16,757.67</h1>
                  </div>
                  <div className="w-full flex justify-between">
                      <h1 className="text-neutral-400">24h Low / 24h High</h1>
                      <h1 className="flex font-sans"><DollarSign className="w-4"/>16,757.67 / <DollarSign className="w-4"/>16,874.12</h1>
                  </div>
                  <div className="w-full flex justify-between">
                      <h1 className="text-neutral-400">7d Low / 7d High</h1>
                      <h1 className="flex font-sans"><DollarSign className="w-4"/>16,382.67 / <DollarSign className="w-4"/>16,874.12</h1>
                  </div>
                  <div className="w-full flex justify-between">
                      <h1 className="text-neutral-400">Trading Volume</h1>
                      <h1 className="flex font-sans"><DollarSign className="w-4"/>23,249,202,782</h1>
                  </div>
                  <div className="w-full flex justify-between">
                      <h1 className="text-neutral-400">Market Cap Rank</h1>
                      <h1 className="flex font-sans"><Hash className="w-4"/>1</h1>
                  </div>
                  <div className="w-full flex justify-between">
                      <h1 className="text-neutral-400">Market Cap</h1>
                      <h1 className="flex font-sans"><DollarSign className="w-4"/>323,507,290,047</h1>
                  </div>
                  <div className="w-full flex justify-between">
                      <h1 className="text-neutral-400">Market Cap Dominance</h1>
                      <h1 className="flex font-sans">38.343<Percent className="w-4"/></h1>
                  </div>
                  <div className="w-full flex justify-between">
                      <h1 className="text-neutral-400">Volume / Market Cap</h1>
                      <h1 className="flex font-sans">0.0718</h1>
                  </div>
                  <div className="w-full flex justify-between">
                      <h1 className="text-neutral-400">All-Time High</h1>
                      <h1 className="flex font-sans"><DollarSign className="w-4"/>69,044.77</h1>
                  </div>
                  <div className="w-full flex justify-between">
                      <h1 className="text-neutral-400">All-Time Low</h1>
                      <h1 className="flex font-sans"><DollarSign className="w-4"/>67.81</h1>
                  </div>                
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="news">
        <Card>
          <CardHeader>
            <CardTitle>Top Stories</CardTitle>
            <CardDescription>
              News!!!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1"></div>
            <div className="space-y-1"></div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="sentiments">
        <Card>
          <CardHeader>
            <CardTitle>Sentiment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-2">
              <h1 className="text-xl font-semibold flex gap-2">
                Key Events <InfoIcon w-2 h-2 fill-primary />
              </h1>
              <div className="w-full p-4">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full rounded-md"
                >
                  <CarouselContent>
                    <CarouselItem className="md:basis-1 lg:basis-1/2">
                      <Card className="max-w-lg bg-blue-200">
                        <CardContent className="grid grid-cols-6">
                          <CatIcon className="h-12 w-12 mt-4 sm:mt-10 col-span-1"/>
                        <div className="grid grid-rows-2 items-center col-span-5">
                          <h1 className="font-semibold text-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </h1>
                          <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fuga sit tempora odit sed voluptate corrupti
                            harum suscipit incidunt. At ea cumque quidem
                            suscipit officia consectetur ipsa id ratione veniam
                            nihil?
                          </p>
                        </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1 lg:basis-1/2">
                      <Card className="max-w-lg bg-blue-200">
                        <CardContent className="grid grid-cols-6">
                          <CatIcon className="h-12 w-12 mt-4 sm:mt-10 col-span-1"/>
                        <div className="grid grid-rows-2 items-center col-span-5">
                          <h1 className="font-semibold text-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </h1>
                          <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fuga sit tempora odit sed voluptate corrupti
                            harum suscipit incidunt. At ea cumque quidem
                            suscipit officia consectetur ipsa id ratione veniam
                            nihil?
                          </p>
                        </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1 lg:basis-1/2">
                      <Card className="max-w-lg bg-blue-200">
                        <CardContent className="grid grid-cols-6">
                          <CatIcon className="h-12 w-12 mt-4 sm:mt-10 col-span-1"/>
                        <div className="grid grid-rows-2 items-center col-span-5">
                          <h1 className="font-semibold text-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </h1>
                          <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fuga sit tempora odit sed voluptate corrupti
                            harum suscipit incidunt. At ea cumque quidem
                            suscipit officia consectetur ipsa id ratione veniam
                            nihil?
                          </p>
                        </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1 lg:basis-1/2">
                      <Card className="max-w-lg bg-blue-200">
                        <CardContent className="grid grid-cols-6">
                          <CatIcon className="h-12 w-12 mt-4 sm:mt-10 col-span-1"/>
                        <div className="grid grid-rows-2 items-center col-span-5">
                          <h1 className="font-semibold text-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </h1>
                          <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fuga sit tempora odit sed voluptate corrupti
                            harum suscipit incidunt. At ea cumque quidem
                            suscipit officia consectetur ipsa id ratione veniam
                            nihil?
                          </p>
                        </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <h1 className="text-xl font-semibold flex gap-2">
                Analyst Estimates <InfoIcon w-2 h-2 fill-primary />
              </h1>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Image src="/token.webp" alt="dummy" width={200} height={200}/>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nihil facere deserunt voluptate, culpa porro maxime esse officiis tempore dolores commodi doloribus modi iste assumenda hic iure ducimus atque eos!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="team">
        <Card>
          <CardHeader className="text-3xl font-serif font-bold">
            <CardTitle>Team</CardTitle>
            <CardDescription>Meet our team!</CardDescription>
          </CardHeader>
          <CardContent className="bg-blue-100 p-4 rounded-lg shadow-md m-4 space-y-2 flex flex-col sm:flex-row">
            <div className="flex flex-col items-center max-h-50">
              <Image
                src="/zayn.webp"
                alt="zaddyyyy"
                height={100}
                width={100}
                className="object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-600">Zaddy</h3>
              <h3 className="text-lg font-semibold text-gray-600 ">
                Designation
              </h3>
            </div>
            <div className="text-justify p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              assumenda, aut eius dignissimos, omnis dolor illum soluta error,
              minus accusamus porro et? Facilis repellendus inventore maiores,
              labore dignissimos officia. Cumque?
            </div>
          </CardContent>
          <CardContent className="bg-blue-100 p-4 rounded-lg shadow-md m-4 space-y-2 flex flex-col sm:flex-row">
            <div className="flex flex-col items-center max-h-50">
              <Image
                src="/zayn.webp"
                alt="zaddyyyy"
                height={100}
                width={100}
                className="object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-600">Zaddy</h3>
              <h3 className="text-lg font-semibold text-gray-600">
                Designation
              </h3>
            </div>
            <div className="text-justify p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              assumenda, aut eius dignissimos, omnis dolor illum soluta error,
              minus accusamus porro et? Facilis repellendus inventore maiores,
              labore dignissimos officia. Cumque?
            </div>
          </CardContent>
          <CardContent className="bg-blue-100 p-4 rounded-lg shadow-md m-4 space-y-2 flex flex-col sm:flex-row">
            <div className="flex flex-col items-center max-h-50">
              <Image
                src="/zayn.webp"
                alt="zaddyyyy"
                height={100}
                width={100}
                className="object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-600">Zaddy</h3>
              <h3 className="text-lg font-semibold text-gray-600">
                Designation
              </h3>
            </div>
            <div className="text-justify p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              assumenda, aut eius dignissimos, omnis dolor illum soluta error,
              minus accusamus porro et? Facilis repellendus inventore maiores,
              labore dignissimos officia. Cumque?
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="technicals">
        <Card>
          <CardHeader>
            <CardTitle>Technicals</CardTitle>
            <CardDescription>
              Technical details here!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1"></div>
            <div className="space-y-1"></div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="tokenomics">
        <Card>
          <CardHeader className="text-3xl font-serif font-bold">
            <CardTitle>Tokenomics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image src="/token.webp" alt="logo" height={200} width={100} />
            <div className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              saepe animi nemo fuga deserunt amet dolorum, praesentium harum
              atque quibusdam laudantium autem distinctio nostrum itaque,
              excepturi ratione beatae ipsa magnam?
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
