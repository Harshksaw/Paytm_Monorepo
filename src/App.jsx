
import {HiOutlinePaperAirplane } from "react-icons/hi2";
import {CgSearch} from "react-icons/cg"
import {GiHamburgerMenu} from "react-icons/gi"
import {BiUserCircle} from "react-icons/bi"
export default function App() {
  return (
    <div>
      <header className="p-4  flex justify-between ">
        <a href ='' className="flex items-center gap-1 -rotate-90 ">
          <HiOutlinePaperAirplane/>


          <span className="bg-red-500">Airbnb</span>
        </a>
        <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
          <div>Anywhere</div>
          <div className="border border-gray-300"></div>
          <div>Any week</div>
          <div className="border border-gray-300"></div>
          <div>Add guests</div>
        <button className="bg-primary text-white p-1 rounded-full" >
          <CgSearch/>

        </button>
        </div>
        <div className="lex gap-2 border border-gray-300 rounded-full py-2 px-4 ">

          
          <GiHamburgerMenu/>
        </div>
        <div className="lex gap-2 border border-gray-300 rounded-full p-1 border-gray-500 ">

          
          <BiUserCircle/>
        </div>

    



      </header>
    </div >
  )
}
