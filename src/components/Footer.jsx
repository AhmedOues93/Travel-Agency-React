 
  
import { Link } from "react-router-dom";
  
  const Footer = () => {
    return (
      <div>
          
  <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
       <Link className="link link-hover" to="/Destinations">
          Destinations
        </Link>
  </nav>

  <nav>
    <h6 className="footer-title">Company</h6>
     <Link className="link link-hover" to="/About">
          About
        </Link>
     <Link className="link link-hover" to="/Contact">
          Contact
        </Link>
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
  
