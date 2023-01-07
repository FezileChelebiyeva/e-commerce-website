import React, { useState } from "react";
import "./index.scss";
import logo from "../../assets/images/logo-tammy_245x.avif";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showPages, setShowPages] = useState(false);

  const showDropdown = (e) => {
    console.log(e.target.innerText);
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const showDropdownForShop = (e) => {
    setShowShop(!showShop);
  };
  const hideDropdownForShop = (e) => {
    setShowShop(false);
  };
  const showDropdownForPages = (e) => {
    setShowPages(!showPages);
  };
  const hideDropdownForPages = (e) => {
    setShowPages(false);
  };

  return (
    <div id="header">
      <header>
        <div className="header">
          <div className="container">
            <div className="header-top">
              <div className="left">
                <ul>
                  <li>
                    <i className="fas fa-car-alt fa-solid"></i>
                    <Link>Track Your Order</Link>
                  </li>

                  <li>
                    <i className="fa-solid fa-user"></i>
                    <Link>Sign In</Link>
                    Or
                    <Link> Register</Link>
                  </li>

                  <li>
                    <i className="fa-solid fa-user"></i>
                    <Link>My Account</Link>
                  </li>
                </ul>
              </div>
              <div className="right">
                <span className="currency-trigger dropdown-toggle">
                  <span className="currency-title">Currency:</span>
                  <span className="current-currency"> USD</span>
                </span>
              </div>
            </div>
            <div className="header-middle">
              <div className="logo">
                <img src={logo} alt="tommy logo" />
              </div>
              <div className="input-control">
                <form action="">
                  <input type="text" placeholder="Search our store" />
                  <button onAbort={() => console.log("hjkl")}>
                    {" "}
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="cart-widget">
                <div className="cart-icon">
                  <i className="fa-sharp fa-solid fa-bag-shopping"></i>
                  <span className="cart-count">0</span>
                </div>
                <div className="cart-text">
                  <span className="d-block">Your cart</span>
                  <span className="amount">
                    <span className="shopping-cart__total">
                      <span className="money">$0.00</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="container">
              <div className="header-b">
                <div className="navbar">
                  <nav>
                    <ul className="list-link">
                      <li className="list">
                        <Link
                          className="link"
                          onMouseEnter={(e) => showDropdown(e)}
                          onMouseLeave={() => hideDropdown()}
                          href=""
                        >
                          PRODUCT{" "}
                          <i className="fa-sharp fa-solid fa-caret-down"></i>
                        </Link>
                        {show && (
                          <ul className="lebel-menu">
                            <li className="sub-menu-li">
                              <Link href="/products/3-variable-product">
                                Variable product
                              </Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link href="/products/4-soldout-product">
                                Soldout product
                              </Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link>Simple product</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link>Affiliate product</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link>Countdown product</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link>Product Preorder</Link>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li className="list">
                        <Link
                          className="link"
                          onMouseEnter={(e) => showDropdownForShop(e)}
                          onMouseLeave={(e) => hideDropdownForShop(e)}
                        >
                          SHOP{" "}
                          <i className="fa-sharp fa-solid fa-caret-down"></i>
                        </Link>
                        {showShop && (
                          <ul className="seconed-lebel-menu ">
                            <li className="mega-menu-li">
                              <Link>Collection - 1</Link>
                              <ul>
                                <li>
                                  <Link>New and sale badge product</Link>
                                </li>

                                <li>
                                  <Link>New badge product</Link>
                                </li>

                                <li>
                                  <Link>Variable product</Link>
                                </li>

                                <li>
                                  <Link>Soldout product</Link>
                                </li>

                                <li>
                                  <Link>Dummy product name</Link>
                                </li>
                              </ul>
                            </li>

                            <li className="mega-menu-li">
                              <Link>Collection - 2</Link>
                              <ul>
                                <li>
                                  <Link>Simple product</Link>
                                </li>

                                <li>
                                  <Link>Variable with soldout product</Link>
                                </li>

                                <li>
                                  <Link href="/products/7-sample-affiliate-product">
                                    Sample affiliate product
                                  </Link>
                                </li>

                                <li>
                                  <Link href="/products/8-countdown-product">
                                    Countdown product
                                  </Link>
                                </li>

                                <li>
                                  <Link>Dummy product name</Link>
                                </li>
                              </ul>
                            </li>

                            <li className="mega-menu-li">
                              <Link>Collection - 3</Link>
                              <ul>
                                <li>
                                  <Link href="/products/5-simple-product">
                                    Simple product
                                  </Link>
                                </li>

                                <li>
                                  <Link>Demo product title</Link>
                                </li>

                                <li>
                                  <Link>Without shortcode product</Link>
                                </li>

                                <li>
                                  <Link>Dummy product name</Link>
                                </li>

                                <li>
                                  <Link>Variable product</Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li className="list">
                        <Link
                          className="link"
                          onMouseEnter={(e) => showDropdownForPages(e)}
                          onMouseLeave={(e) => hideDropdownForPages(e)}
                        >
                          PAGES {""}
                          <i className="fa-sharp fa-solid fa-caret-down"></i>
                        </Link>
                        {showPages && (
                          <ul className="seconed-lebel-menu ">
                            <li className="sub-menu-li">
                              <Link href="/pages/about-us">About Us</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link>Services</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link href="/pages/faq">FAQ</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link href="/404">404</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link>Cart</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link>Checkout</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link href="/account">My Account</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link>Login</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link>Register</Link>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li className="list">
                        <Link className="link">BLOG</Link>
                      </li>

                      <li className="list">
                        <Link className="link">CONTACT</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="call-widget">
                  <p>
                    CALL US NOW:
                    <i className="fa-solid fa-square-phone-flip"></i>
                    <span className="number">(+800) 123 456 329 </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 
        
        <div className="fixed-header sticky-init sticky-color">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3">
         

                <a href="/" className="theme-logo brand-image sticky-logo">
                  <img src="" alt="Tammy demo" />
                </a>
           
              </div>
              <div className="col-lg-9">
                <nav className="sticky-navigation">
                  <ul className="mainmenu sticky-menu">
                    <li className="mainmenu__item menu-item-has-children sticky-has-child ">
                      <a className="mainmenu__link" href="/collections/all">
                        Product
                      </a>
                       <ul className="seconed-lebel-menu ">
                        <li className="sub-menu-li">
                          <a href="/products/3-variable-product">
                            Variable product
                          </a>
                        </li>

                        <li className="sub-menu-li">
                          <a href="/products/4-soldout-product">
                            Soldout product
                          </a>
                        </li>

                        <li className="sub-menu-li">
                          <a href="/products/5-simple-product">
                            Simple product
                          </a>
                        </li>

                        <li className="sub-menu-li">
                          <a href="/products/7-sample-affiliate-product">
                            Affiliate product
                          </a>
                        </li>

                        <li className="sub-menu-li">
                          <a href="/products/8-countdown-product">
                            Countdown product
                          </a>
                        </li>

                        <li className="sub-menu-li">
                          <a href="/products/preorder-product">
                            Product Preorder
                          </a>
                        </li>
                      </ul> 
                    </li>

                    <li className="mainmenu__item menu-item-has-children sticky-has-child ">
                      <a className="mainmenu__link" href="/collections/all">
                        Shop
                      </a>
                       <ul className="seconed-lebel-menu ">
                        <li className="mega-menu-li">
                          <a href="/products/1-new-and-sale-badge-product">
                            Collection - 1
                          </a>
                          <ul>
                            <li>
                              <a href="/products/1-new-and-sale-badge-product">
                                New and sale badge product
                              </a>
                            </li>

                            <li>
                              <a href="/products/2-new-badge-product">
                                New badge product
                              </a>
                            </li>

                            <li>
                              <a href="/products/3-variable-product">
                                Variable product
                              </a>
                            </li>

                            <li>
                              <a href="/products/4-soldout-product">
                                Soldout product
                              </a>
                            </li>

                            <li>
                              <a href="/products/dummy-product-name">
                                Dummy product name
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="mega-menu-li">
                          <a href="/products/11-product-with-video">
                            Collection - 2
                          </a>
                          <ul>
                            <li>
                              <a href="/products/5-simple-product">
                                Simple product
                              </a>
                            </li>

                            <li>
                              <a href="/products/6-variable-with-soldout-product">
                                Variable with soldout product
                              </a>
                            </li>

                            <li>
                              <a href="/products/7-sample-affiliate-product">
                                Sample affiliate product
                              </a>
                            </li>

                            <li>
                              <a href="/products/8-countdown-product">
                                Countdown product
                              </a>
                            </li>

                            <li>
                              <a href="/products/dummy-product-name-3">
                                Dummy product name
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="mega-menu-li">
                          <a href="/products/8-countdown-product">
                            Collection - 3
                          </a>
                          <ul>
                            <li>
                              <a href="/products/5-simple-product">
                                Simple product
                              </a>
                            </li>

                            <li>
                              <a href="/products/demo-product-title-1">
                                Demo product title
                              </a>
                            </li>

                            <li>
                              <a href="/products/9-without-shortcode-product">
                                Without shortcode product
                              </a>
                            </li>

                            <li>
                              <a href="/products/dummy-product-name-3">
                                Dummy product name
                              </a>
                            </li>

                            <li>
                              <a href="/products/3-variable-product">
                                Variable product
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul> 
                    </li>

                    <li className="mainmenu__item menu-item-has-children sticky-has-child ">
                      <a className="mainmenu__link" href="#">
                        Pages
                      </a>
                      <ul className="seconed-lebel-menu ">
                        <li className="sub-menu-li">
                          <a href="/pages/about-us">About Us</a>
                        </li>

                        <li className="sub-menu-li">
                          <a href="/pages/service-1">Services</a>
                        </li>

                        <li className="sub-menu-li">
                          <a href="/pages/faq">FAQ</a>
                        </li>

                        <li className="sub-menu-li">
                          <a href="/404">404</a>
                        </li>

                        <li className="sub-menu-li">
                          <a href="/cart">Cart</a>
                        </li>

                        <li className="sub-menu-li">
                          <a href="/checkout">Checkout</a>
                        </li>

                        <li className="sub-menu-li">
                          <a href="/account">My Account</a>
                        </li>

                        <li className="sub-menu-li">
                          <a href="/account/login">Login</a>
                        </li>

                        <li className="sub-menu-li">
                          <a href="/account/register">Register</a>
                        </li>
                      </ul> 
                    </li>

                    <li className="mainmenu__item ">
                      <a href="/blogs/news">Blog</a>
                    </li>

                    <li className="mainmenu__item ">
                      <a href="/pages/contact">Contact</a>
                    </li>
                  </ul>
                  <div className="sticky-mobile-menu  d-lg-none">
                    <span className="sticky-menu-btn"></span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>  */}
      </header>
    </div>
  );
};

export default Header;
