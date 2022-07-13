import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./logout.css"

function Logout() {
    const logout = useNavigate();
  return (
    <div>
      <Link to="/" onClick={logout}><button className='logoutButton'>Logout</button></Link>
    </div>
  )
}

export default Logout
