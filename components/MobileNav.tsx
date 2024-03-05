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
            <SheetContent side="right" className="p-6 bg-secondary pt-10 w-50">
            <h1 className="text-lg font-semibold py-3">Crypto Taxes</h1>
            <h1 className="text-lg font-semibold py-3">Free Tools</h1>
            <h1 className="text-lg font-semibold py-3">Resource Center</h1>
            <div className="py-4">
                <Button className="bg-blue-500 font-white">Get Started</Button>
            </div>
            </SheetContent>
        </Sheet>
    )
}