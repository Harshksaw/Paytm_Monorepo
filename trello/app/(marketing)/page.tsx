import { Medal } from "lucid-react";

const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col">
        
        
        <div>
        <Medal className='h-6 w-6 mr-2'/>
        tast management

        </div>

        <h2 className ='text-3xl md:text-6xl text-center  text-neutral-600'> Taskify helps team move</h2>

        <div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit '>
         work forward
        </div>

        </div>
        <div className='text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto '>
            Collaborate ,manage projects  and react new productivity peaks. From high rises to home office, thw way  your team  works is unique - accomplish it all with Taskify.

        </div>

        </div>
    );
};

export default MarketingPage;
