import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MobileNav } from "./MobileNav"

export const Navbar = () => {
return (
    <div className="fixed w-full border-b px-4 border-primary/10 bg-white h-16">
        <div className="flex items-center justify-between h-full md:max-w-screen-xl md:mx-auto">
            <Link href="/">
            <Image src="/Koinx.png" alt="logo" height={40} width={100} />
            </Link> 
        <div className="hidden md:flex items-center gap-x-4">
            <span className="text-lg font-medium ">Crypto Taxes</span>
            <span className="text-lg font-medium ">Free Tools</span>
            <span className="text-lg font-medium ">Resource Center</span>
            <div className="px-4">
                <Button className="bg-blue-500 font-white">Get Started</Button>
            </div>
        </div>
        <MobileNav />
        </div>
    </div>
)
}