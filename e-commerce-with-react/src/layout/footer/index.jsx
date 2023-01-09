import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import icons from "../../assets/images/payment-icons.webp";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="top">
            <div className="contact">
              <h3>CONTACT</h3>
              <p className="title">
                
                  We are a team of designers and developers that create high
                  quality Wordpress, Magento, Prestashop, Opencart.drd
               
              </p>
              <div>
                <p>Contactdtyh</p>
                <p>169-C, Technohub, Dubai Silicon Oasis.</p>
              </div>
              <div className="icons">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-google-plus-g"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
            <div className="nav">
              <nav>
                <ul>
                  <h3>INFORMATION</h3>
                  <li>
                    <Link>About Us</Link>
                  </li>
                  <li>
                    <Link>Contact</Link>
                  </li>
                  <li>
                    <Link>Service</Link>
                  </li>
                  <li>
                    <Link>Shipping Policy</Link>
                  </li>
                  <li>
                    <Link>News</Link>
                  </li>
                  <li>
                    <Link>FAQ</Link>
                  </li>
                </ul>
                <ul>
                  <h3>CUSTOMER CARE</h3>
                  <li>
                    <Link>Login</Link>
                  </li>
                  <li>
                    <Link>Register</Link>
                  </li>
                  <li>
                    <Link>My Account</Link>
                  </li>
                  <li>
                    <Link>Wishlist</Link>
                  </li>
                  <li>
                    <Link>Shipping Policy</Link>
                  </li>
                  <li>
                    <Link>Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="form">
              <form action="">
                <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                <p>
                  Subscribe to the Petmark mailing list to receive updates on
                  new arrivals, special offers and other discount information.
                </p>
                <div className="input">
                <input type="text" placeholder="Enter Your email" />
                <button><i className="fa-solid fa-envelope"></i></button>
                </div>
              </form>
            </div>
          </div>
          <div className="bottom">
            <div className="links">
              <Link>
                About Us <span>|</span>{" "}
              </Link>
              <Link>
                Contact <span>|</span>{" "}
              </Link>
              <Link>
                Service <span>|</span>{" "}
              </Link>
              <Link>
                Shipping Policy <span>|</span>{" "}
              </Link>
              <Link>
                News <span>|</span>{" "}
              </Link>
              <Link>FAQ</Link>
            </div>
            <div className="payment-icons">
              <img src={icons} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright ©99<Link>Shopify</Link> All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
