import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/navbar"
import PostForm from "./components/PostForm"
import PostList from "./components/PostList"

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<PostList />} />

        <Route path="/add" element={<PostForm />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App