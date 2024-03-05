import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-1/2">
      <TabsList className="grid w-full grid-cols-7">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
        <TabsTrigger value="news">News Insights</TabsTrigger>
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
            <div className="space-y-1">What is Bitcoin?</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis voluptas doloribus rerum similique sequi provident
              impedit id enim debitis, autem nisi, voluptatibus laudantium odit
              fugiat consequatur iure tenetur eius nesciunt.
            </p>
            <Separator />
            <div className="space-y-1">Lorem ipsum dolor sit amet</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi perferendis odio, dignissimos reprehenderit facilis doloribus aliquid, dolores, doloremque assumenda atque voluptates repellendus accusantium ipsum ipsa corporis? Nobis, corrupti sint?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi perferendis odio, dignissimos reprehenderit facilis doloribus aliquid, dolores, doloremque assumenda atque voluptates repellendus accusantium ipsum ipsa corporis? Nobis, corrupti sint?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi perferendis odio, dignissimos reprehenderit facilis doloribus aliquid, dolores, doloremque assumenda atque voluptates repellendus accusantium ipsum ipsa corporis? Nobis, corrupti sint?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi perferendis odio, dignissimos reprehenderit facilis doloribus aliquid, dolores, doloremque assumenda atque voluptates repellendus accusantium ipsum ipsa corporis? Nobis, corrupti sint?</p>
            <Separator />
            <div className="space-y-1">Already Holding Bitcoin?</div>
            <div className="flex flex-row">
            <Card>
                <CardContent className="flex flex-row">
                    <Image src="/token.webp" alt="img" height={100} width={100} />
                    <div className="flex flex-col items-center text-white">
                        Calculate your Profits
                        <Button className="bg-white text-black">Check now -&gt;</Button>
                    </div>
                </CardContent>
            </Card>
            </div>
            <Separator />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, natus inventore? Nesciunt maxime dolorem ad possimus quidem neque tenetur labore obcaecati exercitationem, dolores iusto ullam placeat praesentium eos? Nulla, illo.</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="fundamentals">
        <Card>
          <CardHeader>
            <CardTitle>Fundamentals</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1"></div>
            <div className="space-y-1"></div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="news">
        <Card>
          <CardHeader>
            <CardTitle>Fundamentals</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
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
            <CardTitle>Fundamentals</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1"></div>
            <div className="space-y-1"></div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="team">
        <Card>
          <CardHeader className="text-3xl font-serif font-bold">
            <CardTitle>Team</CardTitle>
            <CardDescription>Meet our team!</CardDescription>
          </CardHeader>
          <CardContent className="bg-blue-100 p-4 rounded-lg shadow-md m-4 space-y-2 flex flex-row">
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
          <CardContent className="bg-blue-100 p-4 rounded-lg shadow-md m-4 space-y-2 flex flex-row">
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
          <CardContent className="bg-blue-100 p-4 rounded-lg shadow-md m-4 space-y-2 flex flex-row">
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
            <CardTitle>Fundamentals</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
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
