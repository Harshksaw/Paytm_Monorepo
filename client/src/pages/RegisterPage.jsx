import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function RegisterPage() {
    const [name, setName]= useState('')
    const [email, setemail]= useState('')
    const [password, setpassword]= useState('')
    function registerUser(ev){
        ev.preventDefault();
        axios.post('/register',{
            name,
            email,
            password,
        })
 

    }

return (
    <div className="mt-4 grow flex items-center justify-around" >
        <div className="mb-64">


        <h1 className="text-4xl text-center mb-4 ">Register</h1>

        <form className ="max-w-md mx-auto " onSubmit={registerUser}>
            <input type="text" placeholder="harsh k" value={name} onChange={ev => setName(ev.target.value)}/>
            <input type="email" placeholder="your Email.com" value={email} onChange={ev => setemail(ev.target.value)}/>
            <input type="Password" placeholder="Password" value={password} onChange={ev=> setpassword(ev.target.value)}/>
            <button  className="bg-red-400 p-2 w-full text-white rounded-2xl">Register</button>
            <div className="text-center py-2">  have an account   <Link  className='underline text-blue' to={'/register'}>Login</Link></div>
        </form>
        </div>

    </div>

  )
}
