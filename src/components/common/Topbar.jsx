import "./Topbar.scss";
import LinkedInLogo from "../../assets/LinkedInLogo.png";
import UserLogo from "../../assets/UserLogo.png";
import ProfilePopUp from "./ProfilePopUp";
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Topbar() {
  const [popupVisible, setPopupVisible] = useState(false);
  const displayPopup=()=>{
    setPopupVisible(!popupVisible);
  }
    let navigate= useNavigate();
    const goToRoute =(route) =>{
        navigate(route);
    }
  return (
    <div className="topbar-cont">
      {popupVisible?<ProfilePopUp/>:<></>}
      <div className="logo-cont">
        <img src={LinkedInLogo} alt="LinkedInLogo" className="linkedinlogo" />
      </div>
      <div className="icons-cont">
        <AiOutlineSearch className="reacticons" />
        <AiOutlineHome className="reacticons" />
        <AiOutlineUserSwitch className="reacticons" onClick={() =>  goToRoute("/home")}/>
        <BsBriefcase className="reacticons" onClick={() =>  goToRoute("/home")}/>
        <AiOutlineMessage className="reacticons" onClick={() =>  goToRoute("/home")}/>
        <AiOutlineBell className="reacticons" onClick={() =>  goToRoute("/home")} />
      </div>
      <div className="user-logo-cont">
        <img src={UserLogo} alt="userlogo" className="userlogo" onClick={displayPopup} />
      </div>
    </div>
  );
}

export default Topbar;
