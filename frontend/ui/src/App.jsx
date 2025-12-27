import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Login  from "./components/Login.jsx"
import Register from './components/Register.jsx'
import Layout from "./components/Layout.jsx"
import Dashboard from './components/layoutWithNavbar/outlet/Dashboard.jsx'
import RiskForm from './components/layoutWithNavbar/outlet/RiskFrom.jsx'
import Home from './components/layoutWithNavbar/outlet/Home.jsx'
import { UserProvider } from './contexts/user.context.jsx'

function App() {
  const [error, setError] = useState({flag: false, message: ""})
  const [loading, setLoading] = useState()

  return (
    <UserProvider>
    <Routes>
      {/* <Route path="" element={<Home/>} /> */}
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/risk-form" element={<RiskForm/>} />
      </Route>
      {/* <Route path="/login" element={<Login setError={setError} loading={loading} setLoading={setLoading} />} />
      <Route path="/register" element={<Register error={error} setError={setError} setLoading={setLoading} loading={loading} />} /> */}
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="*" element={<div> 404 Not found </div>}/>
    </Routes>
    </UserProvider>
  )
}

export default App
