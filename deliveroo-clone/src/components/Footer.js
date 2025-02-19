import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      {/* Top Row with Four Columns */}
      <div className="footer-top-row">
        <div className="footer-column">
          <h4>Discover Deliveroo</h4>
          <ul>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Takeaway</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Cuisines</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Take Deliveroo with you</h4>
          <button className="appStore"> Download On The App Store</button>
          <button className="googlePlay"> Get It On Google Play</button>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer-bottom-row">
        <div className="footer-social-icons">
          <img src="Images/Facebook_icon.png"></img>
          <img src="Images/Twitter_icon.png"></img>
          <img src="Images/Instagram_icon.png"></img>
        </div>
        <div className="footer-text">
          <p>&copy; 2024 Deliveroo.</p>
          <a href="https://deliveroo.co.uk/" target="_blank">
            {" "}
            Deliveroo Website
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
