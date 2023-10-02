import "./PostsCard.scss"
function PostsCard({post}) {
  return (
    <div className="postcard-cont">
      <p>{post.timeStamp}</p>
        <p>{post.status}</p>
    </div>
  )
}

export default PostsCard
