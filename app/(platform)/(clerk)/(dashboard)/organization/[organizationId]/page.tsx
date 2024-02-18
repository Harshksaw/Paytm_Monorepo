import { auth } from "@clerk/nextjs"


const OrganizationIdPage = () => {
    const  { userId, orgId} = auth();

    return (
        <div>
            {/* <OrganizationSwitcherhidePersonal/> */}
            <h1> User : {userId}</h1>
        </div>
    )
}

export default OrganizationIdPage;