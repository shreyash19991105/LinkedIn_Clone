import { useEffect, useState } from "react";
import HomeComponent from "../components/HomeComponent"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";
function Home({currentUser}) {
  const [loading, setLoading]= useState(true);

  let navigate = useNavigate();
  useEffect(() =>{
    onAuthStateChanged(auth, (res) =>{
      if(!res?.accessToken){//if user is not already logged in then accesstoken is null
        navigate("/")
      }else{
       setLoading(false)
      }
    });
  },[]);
  return loading ? <Loader/> : <HomeComponent currentUser={currentUser}/>;
}

export default Home
