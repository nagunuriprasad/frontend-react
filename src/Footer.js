import React from 'react';
import './assets/css/Footer.css'; // External CSS
import companyLogo from './assets/Bp-image.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

// Import images
import googlePlay from './assets/google-play.png';
import appStore from './assets/app-store.png';
import assured from './assets/assured.png';
import confidentiality from './assets/lock.png';
import noHiddenFees from './assets/no-hidden-fee.png';
import secureOnline from './assets/secure-online.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section company-info">
          <img src={companyLogo} alt="Company Logo" className="footer-logo" />
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Customer Review</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Pay Us</a></li>
          </ul>
         
          {/* Using Font Awesome icons */}
          
    </div> 
        <div className="footer-section popular-services">
          <h4>Our Popular Services</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Packages</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Insta Food</a></li>
            <li><a href="#">Staying Hotels</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Staff</a></li>
            <li><a href="#">Travels</a></li>
          </ul>
        </div>

        <div className="footer-section terms-policy">
          <h4>Terms & Policy</h4>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cancelation & Refund Policy</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Confidentiality Policy</a></li>
          </ul>
        </div>

        <div className="footer-section connect-us">
          <h4>Connect With Us</h4>
          <ul>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Partner With Us</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Suggestion And Feedback</a></li>
          </ul>
         
        </div>
      </div>

      <div className="row contact-info">
      <p className="my-2 col col-4">
        <i className="fa fa-map-marker-alt mx-2 icon-style" aria-hidden="true"></i>
        Srinagar colony, Hyderabad-500073
      </p>
      <p className="my-2 col col-4">
        <i className="fa fa-envelope mx-2 icon-style" aria-hidden="true"></i>
        info@bookmypartys.com
      </p>
      <p className="my-2 col col-4">
        <i className="fa fa-phone-alt mx-2 icon-style" aria-hidden="true"></i>
        +91 8555973013
      </p>
    </div>


      <div className="col-lg-6 pt-4">
      <div className="col-lg-3 d-flex flex-column align-items-center justify-content-center">
        <h4 className="text-light">Follow Us</h4>
        <div className="social-links mt-2">
          <a href="#" className="btn btn-social btn-facebook">
            <i className="fab fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a href="#" className="btn btn-social btn-twitter">
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="#" className="btn btn-social btn-instagram">
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="#" className="btn btn-social btn-linkedin">
            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
          </a>
        </div>
        </div>
      <div className="social-icons">
            <a href="#"><img src={googlePlay} alt="Google Play" /></a>
            <a href="#"><img src={appStore} alt="App Store" /></a>
          </div>
      <div className="row">
        <div className="col-md-3 col-6 px-2 icon-block">
          <i className="fas fa-thumbs-up icon-style" aria-hidden="true"></i>
          <h6 className="text-white">Assured Customer Satisfaction</h6>
        </div>
        <div className="col-md-3 col-6 px-2 icon-block">
          <i className="fas fa-lock icon-style" aria-hidden="true"></i>
          <h6 className="text-white">Client Data Confidentiality</h6>
        </div>
        <div className="col-md-3 col-6 px-2 icon-block">
          <i className="fas fa-money-bill icon-style" aria-hidden="true"></i>
          <h6 className="text-white">No Hidden Fees</h6>
        </div>
        <div className="col-md-3 col-6 px-2 icon-block">
          <i className="fas fa-laptop icon-style" aria-hidden="true"></i>
          <h6 className="text-white">Secure Online</h6>
        </div>
      </div>
    </div>

    </footer>
  );
}

export default Footer;
