import { Navigate } from "react-router-dom"
import { auth } from "../firebase/firebase"

function PrivateRoute({ children }) {

  const user = auth.currentUser

  return user ? children : <Navigate to="/" />

}

export default PrivateRoute