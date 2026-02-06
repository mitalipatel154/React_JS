// Footer.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import paymentImg from "../assets/images/footer/paymentImg.png"; 
import logo from '../assets/images/header/header-logo.svg';

function Footer() {
  return (
    <footer className="text-light snd-font fw-bold">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <img src={logo} alt="logo" className="pb-5"/>
            <p className="mb-1 address">ADDRESS : 966 Munich Expressway</p>
            <p>Sue 700 Germany, TX 7859</p>
            <img src={paymentImg} alt="Payment Methods" className="img-fluid mt-2" />
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="mb-3 snd-font fw-bold">SHOPPING</h6>
            <ul className="list-unstyled">
              <li>Gift Card</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Delivery</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="mb-3 snd-font fw-bold">ABOUT STORE</h6>
            <ul className="list-unstyled">
              <li>Shopping</li>
              <li>Order Cart</li>
              <li>Privacy Policy</li>
              <li>Help</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="mb-3 snd-font fw-bold">
              SUBSCRIBE FOR <span className="text-danger">NEWSLETTER</span>
            </h6>
            <div className="d-flex mb-3">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-outline-light">→</button>
            </div>
            <h6>FOLLOW</h6>
            <div className="d-flex gap-2 mt-2">
              <button className="btn btn-primary btn-sm text-white">
                <i class="bi bi-facebook"></i>
              </button>
              <button className="btn insta btn-sm text-white">
                <i class="bi bi-instagram"></i>
              </button>
              <button className="btn btn-info btn-sm text-white">
                <i class="bi bi-twitter"></i>
              </button>
              <button className="btn btn-primary btn-sm text-white">
                <i class="bi bi-linkedin"></i>
              </button>
            </div>
          </div>
        </div>

      </div>
        <div className="copyRight text-center">
            COPYRIGHT © 2024 <strong>LUXRIO</strong>. ALL RIGHTS RESERVED BY <strong>VECURO</strong>.
        </div>
    </footer>
  );
}

export default Footer;
