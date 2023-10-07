import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import {  Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";

export default function ProfilePage() {
  const [redirect, setredirect] = useState(null);
  const { user, setUser, ready } = useContext(UserContext);

  let {subpage} = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }
  async function logout() {
    await axios.post("/logout");
    setredirect("/");
    setUser(null);
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  

  return (
    <div>
      <AccountNav/>
      
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="primary  max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
      {subpage === 'places' && (
        <PlacesPage />
      )}
    </div>
  );
}
