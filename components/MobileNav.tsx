import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

export const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4">
                <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="bg-secondary pt-10 gap-y-5 flex flex-col w-1/2">
            <span className="text-md font-semibold">Crypto Taxes</span>
            <span className="text-md font-semibold">Free Tools</span>
            <span className="text-md font-semibold">Resource Center</span>
            <div className="py-4">
                <Button className="bg-blue-500 font-white">Get Started</Button>
            </div>
            </SheetContent>
        </Sheet>
    )
}