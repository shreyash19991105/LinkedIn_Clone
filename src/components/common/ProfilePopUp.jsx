import { onLogout } from "../../api/AuthAPI";
function ProfilePopUp() {
  return (
    <div className="popup-card">
      <ul className="popup-options">
        <li className="popup-options" onClick={onLogout}>Logout</li>
      </ul>
    </div>
  );
}

export default ProfilePopUp;
