"use client"
import Link from "next/link";
import {Plus} from "lucide-react"
import {useLocalStorage} from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

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

    const onExpand = (id: string) => {
        setExapnded((curr)=> ({
            ...curr,
            [id]: !expanded[id],
        
        }))
    }

    if(!isLoadedOrg || !isLoadedOrgsList || userMemberships.isLoading){
        return (
            <>
                <Skeleton/>
            </>
        )
    }


    return (
        <div>

        </div>
    )


}