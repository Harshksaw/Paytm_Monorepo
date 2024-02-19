"use client"
import Link from "next/link";
import {Plus} from "lucide-react"
import {useLocalStorage} from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { NavItem, Organization } from "./nav-item";

interface SidebarProps{
    storageKey?: string;
}


export const Sidebar = ({
    storageKey = "t-sidebar-state",
}: SidebarProps) => {
    const [expanded , setExapnded] = useLocalStorage<Record<string, any>>(storageKey, {});

    const {organization: activeOrganization,
        isLoaded: isLoadedOrg
        } = useOrganization();

    const {
        userMemberships,
        isLoaded: isLoadedOrgsList
    }= useOrganizationList({
        userMemberships: {
            infinite: true,
        }
    })

    const defaultAccordeionValue : string[] = Object.keys(expanded)
        .reduce((acc:string[], key: string)=>{
            if(expanded[key]){
                acc.push(key);
            }
            return acc;
        
        }, []);

        // {"123": true, "456": false} => ["123"]

    const onExpand = (id: string) => {
        setExapnded((curr)=> ({
            ...curr,
            [id]: !expanded[id],
        
        }))
    }

    if(!isLoadedOrg || !isLoadedOrgsList || userMemberships.isLoading){
        return (
            <>
            <div className="flex items-center gap-x-4 justify-between mb-2">


                <Skeleton className= "h-10 w-[50%] bg-sky-200"/>
                <Skeleton className= "h-10 w-10 bg-sky-200"/>
            </div>
            </>
        )
    }


    return (
        <>

        <div className="font-medium text-xs flex items-center mv-10">
            <span className="pl-4">

                Workspaces

            </span>
            <Button
            asChild
            type="button"
            size="icon"
            variant="ghost"
            className="ml-auto"
            >
                <Link href="/select-org">
                    <Plus className="h-4 w-4">

                    </Plus>
                </Link>
            </Button>

            

        </div>

        <Accordion
        type="multiple"
        defaultValue={defaultAccordeionValue}
        className="space-y-2"

        >
            {userMemberships.data.map(({organization})=>(
                    <NavItem
                    key={organization.id}
                    isActive={activeOrganization?.id === organization.id}
                    isExpanded={expanded[organization.id]}
                    organization={organization as Organization}
                    onExpand={onExpand}
                    />

            ))} 

        </Accordion>
        </>
    )


}