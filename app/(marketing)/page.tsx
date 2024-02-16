"use client"
import Link from "next/link";
import { Medal } from "lucide-react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
    ]
})

const MarketingPage = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="flex items-center justify-center flex-col  ">
            <div className="flex items-center justify-center flex-col  bg-gray-400" >
                <div className="flex flex-col bg-yellow-500">
                    <Medal className='h-6 w-6 mr-2' />
                    <h3>
                        tast management
                    </h3>
                </div>
                <h2 className='text-3xl md:text-6xl text-center  text-neutral-600'> Taskify helps team move</h2>
                <div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit '>
                    work forward
                </div>
            </div>

            <div className={cn('text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto  text-blue-700', textFont.className)}>
                Collaborate, manage projects, and reach new productivity peaks. From high rises to home office, the way your team works is unique - accomplish it all with Taskify.
            </div>

            <Link href="/" className="p-2">
            <button 
                className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:text-black hover:bg-white"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {isHovered ? 'Sign Up' : 'Get Taskify for free'}
            </button>
        </Link>
        </div>
    )
};

export default MarketingPage;
