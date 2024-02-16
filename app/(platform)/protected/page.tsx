"use client"
import { UserButton } from '@clerk/nextjs';
// import { useAuth, useUser } from '@clerk/nextjs';

import React from 'react';

const ProtectedPage = () => {
    // const {userId} = useAuth();
    // const user = useUser();


    return (
        <div>
            {/* <h1> User : {user?.firstName}</h1>
            <p>userId : {userId} </p> */}

            <UserButton
            afterSignOutUrl='/'
            />
        </div>
    );
};

export default ProtectedPage;
