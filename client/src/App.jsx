import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from 'axios';
axios.defaults.baseURL = 'https://localhost:4000';



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>

      <Route  index element = {<IndexPage/>}/>
      <Route path="/login" element= {<LoginPage/>}/>
      <Route path="/register" element= {<RegisterPage/>}/>
      </Route>
    </Routes>
 
  )
}
