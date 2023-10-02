import { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";


export default function AccountPage() {
  const [redirect, setredirect] = useState(null);
  const {user, setUser, ready} = useContext(UserContext);

  let {subpage} = useParams();
  if(subpage === undefined){
    subpage = 'profile';
  }
  async function logout(){
    await axios.post('/logout');
    setredirect('/')
    setUser(null);



  }

  if(!ready){
    return 'Loading...';
  }

  if(ready  && !user && !redirect){
    return <Navigate to ={'/login'}/>
  }

  function linkClasses(type = null){
    let  classes = 'py-2 px-6';
    if(type == subpage || (subpage === undefined && type === 'profile')){
      classes += 'bg-primary text-white rounded-full';
    }
    return classes;



    
  }
  if (redirect){
    return <Navigate to={redirect}/>
  }

  return (
    <div>
      <nav className="w-full flex mt-8 gap-4 justify-center">
        <Link className="p-2 bg-gray-300 rounded-full" to= {'/account'}>My Profile</Link>
        <Link className = {linkClasses('profile')} to={'/account/profile'}>My Profile</Link>
        <Link className = {linkClasses('bookings')} to={'/account/bookings'}>My Bookings</Link>
        <Link className = {linkClasses('places')} to={'/account/accomodation'}>My accomodations</Link>
        <Link className="py-2 px-6" to={'/account/places'}>My Accomodations</Link>
      </nav>
      {subpage === 'profile'  && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br/>
          <button onClick = {logout}  className="primary  max-w-sm mt-2">Logout</button>
        </div>
      )}
    </div>
  )
}
