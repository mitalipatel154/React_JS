import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebase"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()

  const logout = async () => {
    await signOut(auth)
    navigate("/login")
  }

  return (
    <div className="vh-100 vw-100 bg-light">
      <nav className="navbar navbar-dark bg-dark w-100">
        <div className="container px-4">
          <span className="navbar-brand">
            Firebase Auth System
          </span>
          <button
            className="btn btn-danger"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="d-flex justify-content-center align-items-center" style={{height:"85vh"}}>
        <div className="card shadow-lg p-5 text-center" style={{width:"600px", borderRadius:"15px"}}>
          <h2 className="mb-3 display-5 fw-bold pt-3">Welcome</h2>
          <p className="text-muted">
            You are logged in successfully as
          </p>
          <p className="fw-bold">
            {auth.currentUser?.email}
          </p>
        </div>
      </div>

    </div>
  )
}

export default Dashboard