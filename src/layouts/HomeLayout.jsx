import Home from "../Pages/Home"
import Topbar from "../components/common/Topbar"
import { getCurrentUser } from "../api/FirestoreAPI"
import { useMemo, useState } from "react"

function HomeLayout() {
  const [currentUser , setCurrentUser] = useState({});
  useMemo(()=>{
    getCurrentUser(setCurrentUser);
  },[])
  return (
    <div>
      <Topbar currentUser={currentUser}/>
      <Home currentUser={currentUser}/>
    </div>
  )
}
export default HomeLayout
