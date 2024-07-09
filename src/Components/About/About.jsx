import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{
              setPlayState(true)
            }} />
        </div>
        <div className="about-right">
            <h3>About university</h3>
            <h2>Nurturing Tomorrow`s Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos adipisci quo similique doloremque cum, explicabo rem, temporibus molestias quasi, sed repudiandae ipsa excepturi animi. Quae ex id atque odio placeat!
           </p>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius molestiae expedita animi delectus veritatis itaque eveniet quo quam sunt? Minima magni laudantium quae vitae, quos animi nemo perspiciatis veritatis?
           </p>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius molestiae expedita animi delectus veritatis itaque eveniet quo quam sunt? Minima magni laudantium quae vitae, quos animi nemo perspiciatis veritatis?
           </p>
        </div>
    </div>
  )
}

export default About