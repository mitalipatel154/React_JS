import { Link, useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

  return (

    <nav className="navbar navbar-dark bg-dark">

      <div className="container">

        <Link className="navbar-brand" to="/">
          Blog App
        </Link>

        <div>

          <Link className="btn btn-light me-2" to="/">
            Posts
          </Link>

          <Link className="btn btn-primary me-2" to="/add">
            Add Post
          </Link>

        </div>

      </div>

    </nav>

  )
}

export default Navbar