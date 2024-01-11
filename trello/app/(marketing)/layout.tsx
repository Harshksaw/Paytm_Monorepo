const marketinglayout = (
    {children } : {children: React.ReactNode}
)=>{

    return(
        <div className="h-full bg-slate">

        <main className="pt-40 pb-20 bg-slate-50">
        
        {children}
        </main>
        </div>
    )
    
}