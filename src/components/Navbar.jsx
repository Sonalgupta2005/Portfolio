import React from 'react'
import '../styles/Navbar.css';
import { Leetcode } from '@boxicons/react';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate();

    return (

        <>
         <header data-aos="fade-down" data-aos-duration="2000">
            <div className="left">
                <img style={{borderRadius:"50%"}} src="./logo2.png" alt="logo"/>
                <h2><span style={{fontFamily:"initial"}}>{'<'}<span style={{color:"#72a1dea2"}}>Sonal</span>/Gupta{'>'}</span></h2>
            </div>

            <ul>
                <li><a href="#about-page">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#my-project">Projects</a></li>
            </ul>

            <div className="box-icons">
                <p><i onClick={()=>navigate("https://leetcode.com/sonal_gupta2005/")} ><Leetcode/></i></p>
                <p><i onClick={()=>navigate("https://www.github.com/Sonalgupta2005")} className='bx bxl-github'></i></p>
                <p><i onClick={()=>navigate("https://www.linkedin.com/in/sonal-gupta-45000b2a7/")} className='bx bxl-linkedin-square'></i></p>
            </div>

            <div className="menu-icon">
                <i className='bx bx-menu'></i>
            </div>            
        </header>
        <div className="sidebar">
            <div className="close-icon">
                <i className='bx bx-x'></i>
            </div>
            
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
            </ul>

            <div className="social-sidebar">
                <a><i className='bx bxl-leetcode'></i></a>
                <a><i className='bx bxl-github'></i></a>
                <a><i className='bx bxl-linkedin-square'></i></a>
            </div>
        </div>
        <div className="blackhole-box" data-aos="fade-down" data-aos-duration="2000">
            <video autoPlay loop muted plays-inline="true" src="videos/blackhole.mp4"></video>
        </div>
        </>
    )
}


export default Navbar;
