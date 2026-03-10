import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPost } from "../redux/actions"

function PostForm() {

  const dispatch = useDispatch()

  const [post, setPost] = useState({
    title: "",
    description: "",
    date: "",
    image: "",
    category: ""
  })

  const handleSubmit = e => {

    e.preventDefault()

    dispatch(addPost(post))

    alert("Post Added!")
  }

  return (

    <div className="container mt-4">

      <h2>Add Post</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-2"
          placeholder="Title"
          onChange={e =>
            setPost({ ...post, title: e.target.value })
          }
        />

        <textarea
          className="form-control mb-2"
          placeholder="Description"
          onChange={e =>
            setPost({ ...post, description: e.target.value })
          }
        />

        <input
          type="date"
          className="form-control mb-2"
          onChange={e =>
            setPost({ ...post, date: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Image URL"
          onChange={e =>
            setPost({ ...post, image: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Category"
          onChange={e =>
            setPost({ ...post, category: e.target.value })
          }
        />

        <button className="btn btn-success">
          Add Post
        </button>

      </form>

    </div>

  )
}

export default PostForm