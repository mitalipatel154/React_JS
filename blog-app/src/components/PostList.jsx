import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../redux/actions"

import PostDetails from "./PostDetails"

function PostList() {

  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (

    <div className="container mt-4">

      <h2 className="text-center mb-4">
        All Posts
      </h2>

      <div className="row g-4">

        {posts.map(post => (

          <div className="col-md-4 d-flex" key={post.id}>
            <PostDetails post={post} />
          </div>

        ))}

      </div>

    </div>

  )
}

export default PostList