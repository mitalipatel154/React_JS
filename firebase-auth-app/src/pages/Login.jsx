import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase"
import { useNavigate, Link } from "react-router-dom"

function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      await signInWithEmailAndPassword(auth,email,password)

      navigate("/dashboard")

    } catch(error){

      alert(error.message)

    }

  }

  return (

  <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-light">

    <div className="card shadow-lg p-4" style={{width:"400px", borderRadius:"15px"}}>

      <h3 className="text-center mb-4">Login</h3>

      <form onSubmit={handleLogin}>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary w-100">
          Login
        </button>

      </form>

      <p className="text-center mt-3">
        New user? <Link to="/">Register</Link>
      </p>

    </div>

  </div>

)
}

export default Login