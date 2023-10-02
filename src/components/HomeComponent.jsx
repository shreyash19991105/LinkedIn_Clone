import PostUpdate from "./common/PostUpdate"
function HomeComponent({currentUser}) {
  return (
    <div className="home-cont">
      <PostUpdate currentUser={currentUser} />
    </div>
  )
}

export default HomeComponent
