import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";




export default function LoginPage() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [redirect , setRedirect] = useState(false)

  const {setUser} =useContext(UserContext);
  async function handleLoginSubmit(ev){
    ev.preventDefault();
    try{
      const {data} = await axios.post('/login', {email, password});
      setUser(data)
      alert('Login Successful');
      setRedirect(true)

    }catch(e){
      alert('Login , Unsuccessful')
    }

  }
  if(redirect){
    return  <Navigate to ={'/'}/>
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4 ">Login</h1>
        <form className="max-w-md mx-auto " onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="your Email.com"
            value={email}
            onChange={(ev) => setemail(ev.target.email)}
          />
          <input
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setpassword(ev.target.password)}
          />
          <button className="bg-red-400 p-2 w-full text-white rounded-2xl">
            Login
          </button>
          <div className="text-center py-2">
            {" "}
            Create an account{" "}
            <Link className="underline text-black" to={"/register"}>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
