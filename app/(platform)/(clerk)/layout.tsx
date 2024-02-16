const ClerkLayout = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full flex  items-center justify-center bg-gray-200 mt-[20%] ">
            

                {children}

        </div>
    )
}

export default ClerkLayout