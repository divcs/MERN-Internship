import React from 'react'
import { Link } from 'react-router-dom'

const UserHomePage = () => {
  return (
    <div>
      User Home page
      <Link to="/adminlogin">Admin Login</Link>
    </div>
  )
}

export default UserHomePage
