import React from 'react'
import LogoImage from '../assets/LogoImage.png'
import NavbarImageCart from '../assets/NavbarImageCart.png'
import NavbarImagePerson from '../assets/NavbarImagePerson.png'
// import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar=() =>{
  return (
    
<div className='Navbar'>
<div className='NavbarUpperSection'>
    <img src={LogoImage} height="90px" width="130px"  alt='' />
  <h1>Urban Nest</h1>
  <div className="Navbarimage"><div className='navbarimage1'>
    <img src={NavbarImagePerson} height="40px" width="40px" alt='' /></div>
    <div className='navbarimage2'>
    <img src={NavbarImageCart} height="30px" width="30px" alt='' /></div>
    </div>
</div>
   <hr size="1.3" width="1190" color='black' /> 
   <ul className="Navbaritems">
   <li>HOME</li>
   <li>STORE</li>
   <li>ACCESSORIES</li>
   <li>BRAND</li>
   <li>PAGES</li>
   <li>ABOUT US</li>
   <li>NEWS</li>
   <li>CONTACT US</li>
   
   </ul>
   <hr size="1.3" width="1190" color='black' />   
</div>
  )
}
export default Navbar
