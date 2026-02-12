import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Certifications.css';
import certifications from '../assets/certificates-data.js';
import React from 'react'
import Slider from "react-slick";

const Certifications = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    
    <h1 className="title">Certifications</h1>
    <div className="slider-container">
      
      <Slider {...settings}>
      {certifications.map((cert) => (
        <div className="cert-card" key={cert.id}> 
          <img src={cert.image} alt={cert.title} className="cert-image" />
          <div className="cert-desc">
            <h3 className="cert-title">{cert.title}</h3>
          <p className="cert-issuer">Issued By-{cert.issuer}</p>
          </div>
          
        </div>
      ))}
      </Slider>
    </div>
    </>
  )
}

export default Certifications;