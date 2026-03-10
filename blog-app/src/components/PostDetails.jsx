import { useDispatch } from "react-redux"
import { deletePost } from "../redux/actions"

function PostDetails({ post }) {

  const dispatch = useDispatch()

  return (

    <div className="card p-4 mb-4 shadow">

      <img src={post.image} className="card-img-top" style={{ height: "200px", objectFit: "cover" }}/>

      <div className="card-body">

        <h5>{post.title}</h5>

        <p>{post.description}</p>

        <p className="text-muted">{post.category}</p>

        <button className="btn btn-danger" onClick={() => dispatch(deletePost(post.id))}>
          Delete
        </button>

      </div>

    </div>

  )
}

export default PostDetails