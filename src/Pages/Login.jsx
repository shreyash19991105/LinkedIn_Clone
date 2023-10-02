import LoginComponent from "../components/LoginComponent";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";

function Login() {
  const [loading, setLoading]= useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {//if user is already logged in then accesstoken is given , in that case user doesnt need to log in again
      
      if (res?.accessToken) {
        navigate("/home");
      }else{
        setLoading(false);
      }
    });
  }, []);

  return loading ?  <Loader/> :<LoginComponent />
    
  
}

export default Login;
