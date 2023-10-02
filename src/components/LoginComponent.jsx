import { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss";
import LinkedInLogo from "../assets/LinkedInLogo.png";
import GoogleLogo from "../assets/GoogleLogo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const signIn = async () => {
    try {
      let response = await LoginAPI(credentials.email, credentials.password);
      console.log(response.user.email);
      toast.success("Signed In to LinkedIn");

    } catch (err) {
      toast.error("Please check your Credentials");
    }
  };

  const googleSignIn = async () => {
    try {
      let response = await GoogleSignInAPI(
        credentials.email,
        credentials.password
      );
      console.log(response.user.email);
      toast.success("Signed In to LinkedIn");
      localStorage.setItem("userEmail" ,response.user.email)
    } catch (err) {
      toast.error("Please check your Credentials");
    }
  };
  return (
    <div className="login-cont">
      <img src={LinkedInLogo} alt="LinkedInLogo" className="linkedinlogo" onClick={()=>navigate("/home")}/>
      <h1 className="heading">Sign in</h1>
      <p className="sub-heading"> Stay updated on your professional world</p>

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
      <p className="forgot">Forgot password?</p>
      <button className="sign-in common-button" onClick={signIn}>
        Log in
      </button>
      <hr className="hr-text" data-content="or"></hr>
      <button className="common-button" onClick={googleSignIn}>
        <img src={GoogleLogo} alt="GoogleLogo" className="googlelogo" /> Sign in
        with Google
      </button>
      <p>
        New to LinkedIn?{" "}
        <span onClick={() => navigate("/register")}>Join Now</span>
      </p>
    </div>
  );
}

export default LoginComponent;
