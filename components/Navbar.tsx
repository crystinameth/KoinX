import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MobileNav } from "./MobileNav"

export const Navbar = () => {
return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b  border-primary/10 bg-white h-16">
        <div className="flex items-center pl-20">
            <Link href="/">
            <Image src="/Koinx.png" alt="logo" height={40} width={100} />
            </Link>
        </div>
        <div className="sm:hidden md:flex items-center px-10">
            <h1 className="text-lg font-semibold px-3">Crypto Taxes</h1>
            <h1 className="text-lg font-semibold px-3">Free Tools</h1>
            <h1 className="text-lg font-semibold px-3">Resource Center</h1>
            <div className="px-4">
                <Button className="bg-blue-500 font-white">Get Started</Button>
            </div>
        </div>
        <MobileNav />
    </div>
)
}