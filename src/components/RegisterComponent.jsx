import { useState } from "react";
import { RegisterAPI } from "../api/AuthAPI";
import "../Sass/RegisterComponent.scss";
import LinkedInLogo from "../assets/LinkedInLogo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { postUserData } from "../api/FirestoreAPI";

function RegisterComponent() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});

  const register = async () => {
    try {
      let response = await RegisterAPI(credentials.email, credentials.password);
      console.log(response.user.email);
      

       postUserData({name:credentials.name ,email:credentials.email })
       localStorage.setItem("userEmail" ,response.user.email)
      toast.success("Signed Up for LinkedIn");
      
      
      

    } catch (err) {
      toast.error("Can not create your account");
    }
  };

  return (
    <div className="register-cont">
      <img src={LinkedInLogo} alt="LinkedInLogo" className="linkedinlogo" onClick={() => navigate("/home")}/>
      <h1 className="heading">Sign up</h1>
      <p className="sub-heading"> Stay updated on your professional world</p>
      <input
        type="text"
        className="common-input"
        placeholder="Enter your Name"
        onChange={(event) =>
          setCredentials({ ...credentials, name: event.target.value })
        }
      />
      <input
        type="email"
        className="common-input"
        placeholder="Enter your Email"
        onChange={(event) =>
          setCredentials({ ...credentials, email: event.target.value })
        }
      />
      <input
        type="password"
        className="common-input"
        placeholder="Enter your Password"
        onChange={(event) =>
          setCredentials({ ...credentials, password: event.target.value })
        }
      />

<button className="common-button" onClick={register}>Agree & Join
      </button>
    </div>
  );
}

export default RegisterComponent;
