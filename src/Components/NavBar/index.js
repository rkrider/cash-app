import React from 'react'
import Logo from "../../assets/logo.png"
import Eye from "../../assets/eye button.svg"
import "./style.css"

const NavBar = () => {
  return (
    <div className='nav'>
        <img src={Logo} alt='logo icon'/>
        <div className='nav-part2'>
            <h4 className='nav-items'>SIGN IN</h4>
            <h4 className='nav-items'>LEGAL</h4>
            <h4 className='nav-items'>LICENSE</h4>
            <h4 className='nav-items'>SECURITY</h4>
            <h4 className='nav-items'>CAREERS</h4>
            <h4 className='nav-items'>PRESS</h4>
            <h4 className='nav-items'>SUPPORT</h4>
            <h4 className='nav-items'>STATUS</h4>
            <h4 className='nav-items'>CODE BLOGS</h4>
        </div>
        <img className='eye' src={Eye} alt='eye icon'/>
    </div>
  )
}

export default NavBar