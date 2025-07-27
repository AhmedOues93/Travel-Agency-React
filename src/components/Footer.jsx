  import React from 'react'
  
import { Link } from "react-router-dom";
  
  const Footer = () => {
    return (
      <div>
          
  <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Destinations</a>
  </nav>

  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About </a>
    <a className="link link-hover">Contact</a>
  </nav>

  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

      </div>
    )
  }
  
  export default Footer
  
