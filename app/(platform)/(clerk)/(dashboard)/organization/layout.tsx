
import React, { ReactNode } from 'react';

const OrganizationLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="py-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl 
        mx-auto ">
            <div className ="flex gap-x-7">
            <div className ="w-64 shrink-0 hidden md:block">
                
            {children}
            </div>
            </div>
        </div>
    )
}
export default OrganizationLayout;