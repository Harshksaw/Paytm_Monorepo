import { Link } from "react-router-dom";


export default function LoginPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around" >
        <div className="mb-64">


        <h1 className="text-4xl text-center mb-4 ">Login</h1>
        <form className ="max-w-md mx-auto ">
          
            <input type="email" placeholder="your Email.com"/>
            <input type="Password" placeholder="Password"/>
            <button  className="bg-red-400 p-2 w-full text-white rounded-2xl">Login</button>
            <div className="text-center py-2">  Create an account   <Link  className='underline text-black' to={'/register'}>Register</Link></div>
        </form>
        </div>

    </div>

  )
}
