import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import '../Styles/FooterStyles.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
      <>
<footer className="text-center text-lg-start mihir-footer">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    { /* Left */ }
    <div className="me-5 d-none d-lg-block">
      <span style={{fontSize : '30px' , fontWeight : 'bold'}}>Find Us On :</span>
    </div>
    <div style={{marginRight : '70px' , fontSize : "20px" }}>
      <a href="" className="me-4 text-reset p-3">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="" className="me-4 text-reset p-3">
        <i className="fab fa-twitter" />
      </a>
      <a href="" className="me-4 text-reset p-3">
        <i className="fab fa-instagram" />
      </a>
    </div>
  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h5 className="text-uppercase fs-4 fw-bold mb-4"  style={{fontSize : "40px"}}>
            <i className="fas fa-gem me-3"/>BURKOVSKY
          </h5>
          <p style={{fontWeight : "200"}}>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Entrance Doors</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Interior Doors</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Wall Panels</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          { /* Links */ }
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <NavLink to="/about" className="text-reset">About Us</NavLink>
          </p>
          <p>
            <NavLink to="/work" className="text-reset">Our Work</NavLink>
          </p>
          <p>
            <NavLink to="/contact" className="text-reset">Contact Us</NavLink>
          </p>
          <p>
            <NavLink to="/help" className="text-reset">Help</NavLink>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3" /> Bhilwara, Raj</p>
          <p>
            <i className="fas fa-envelope me-3" />
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
    © 2023 Copyright By : 
    <a className="text-reset fw-bold" href="/"> MIHIR NEBANI</a>
  </div>
</footer>
</>
  )
}

export default Footer