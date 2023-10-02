import "./PostUpdate.scss"
import ModalComponent from './ModalComponent'
import { getPosts } from "../../api/FirestoreAPI"
import { useMemo, useState } from "react"
import PostsCard from "./PostsCard"
function PostUpdate({currentUser}) {
  const[allPosts , setAllPosts] = useState([]);
useMemo(()=>{
getPosts(setAllPosts);
},[])

  return (
    <div className="postupdate-cont">
       <div className="cont1"> <ModalComponent currentUser={currentUser} /></div>
       <div className="cont2">
       {allPosts.map((post)=>{
                  console.log(post)

        return ( 
          
         <PostsCard key={post.id} post={post}/>
        )
       })}
       </div>
    </div>
    
  )
}

export default PostUpdate
