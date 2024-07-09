import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png'


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false) 
    })
  },[])
  return (
    <nav className={`'container' ${sticky? 'dark-nav': ''}`}>
      <div className="company">
        <img src={logo} alt="logo" className='logo'/>
        <span className='companyName'>StudySchool</span>
      </div>
        
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar