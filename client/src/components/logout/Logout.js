import React from 'react'
import { Link } from 'react-router-dom'
import "./logout.css"

function Logout() {
  return (
    <div>
        <Link to="/login">
      <button className='logoutButton'>Logout</button>
      </Link>
    </div>
  )
}

export default Logout
