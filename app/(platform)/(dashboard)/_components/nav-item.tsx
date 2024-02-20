"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
    Activity,
    CreditCard,
    Layout,
    Settings,

}from "lucide-react"
import { useRouter, usePathname} from "next/navigation";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export type Organization={
    id:string;
    slug: string;
    imageUrl: string;
    name: string;
}


interface NavItemProps{
    isExpanded: boolean;
    isActive: boolean;
    organization: any;
    onExpand: (id: string) => void;
}


export const NavItem = (
    {
        isExpanded,
        isActive,
        organization,
        onExpand
    }: NavItemProps) => {

        const router = useRouter();
        const pathname = usePathname();




        const routes = [
            {
                label: "Boards",
                icon: <Layout className="h-4 2-4 mr-2"/>,
                href: `/organizations/${organization.id}`,
            },
            {
                label: "Activity",
                icon: <Activity className="h-4 2-4 mr-2"/>,
                href: `/organizations/${organization.id}/activity`,
            },
            {
                label: "Settings",
                icon: <Settings className="h-4 2-4 mr-2"/>,
                href: `/organizations/${organization.id}/settings`,
            },
            {
                label: "Billing",
                icon: <CreditCard className="h-4 2-4 mr-2"/>,
                href: `/organizations/${organization.id}/billing`,
            }
        ]

        const onClick = (href: string) => {
            router.push(href);
        };

    return(
        <AccordionItem
        value={organization.id}
        className="border-none"
        >

            <AccordionTrigger
            onClick={()=> onExpand(organization.id)}
            className={cn(
                "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transistion text-start no-underline hover:no-underline",
                isActive && !isExpanded && "bg-sky-600/10 text-sky-700",
            )

            }
            >
                <div className="flex items-center gap-x-2">
                <div className="w-7 h-7 relative">

                    <Image
                        fill
                        src={organization.imageUrl}
                        alt="Organization Logo"
                        className="rounded-sm object-cover"
                    />
                    </div>
                    </div>

                </AccordionTrigger>
                <AccordionContent className="pt-1 text-neutral-700">
                    {
                        routes.map((route, index) => (
                            <Button key={route.href}
                                size="sm"
                                onClick={()=> onClick(route.href)}
                                className= {cn("w-full font-normal justify-start pl-10 mb-1",
                                pathname === route.href && "bg-sky-500/10 text-sky-800" )}
                                variant="ghost"
                            >
                                {route.icon}
                                {route.label}


                            </Button>
                        ))}

                </AccordionContent>


        </AccordionItem>
    )
}

NavItem.Skeleton = function SkeletonNavItem(){
    return(
        <>
        <div className="flex items-center gap-x-4 justify-between mb-2">
            <div className="w-10 h-10 relative shrink-0"/>

            <Skeleton className="h-10 w-[50%]"/>
            <Skeleton className="h-10 w-10"/>


            
            </div>
            <div className="space-y-2">
                <NavItem.Skeleton/>
                <NavItem.Skeleton/>
                <NavItem.Skeleton/>


            </div>

            </>
    )
}