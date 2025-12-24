import React from 'react'
import {Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import ViewEmployee from './pages/ViewEmployee'
import AddEmployee from './pages/AddEmployee'
import EditEmployee from './pages/EditEmployee'
import Navbar from './components/navbar'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/add' element={<AddEmployee/>}>Add Employee</Route>
        <Route path='/view' element={<ViewEmployee/>}>View Employee</Route>
        <Route path='/edit/:id' element={<EditEmployee/>}>Edit Employee</Route>
      </Routes>
    </>
  )
}

export default App
