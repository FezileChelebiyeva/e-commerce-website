import React, { useState } from "react";
import "./index.scss";
import logo from "../../assets/images/logo-tammy_245x.avif";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [header, setHeader] = useState(true);

  const count = useSelector((state) => state.cards.count);
  const price = useSelector((state) => state.cards.price);
  const dispatch = useDispatch();
  const showDropdown = (e) => {
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
  const handleHeader = (e) => {
    window.scrollY > 230 ? setHeader(false) : setHeader(true);
  };
  window.addEventListener("scroll", handleHeader);
  return (
    <div id="header">
      <header>
        {header ? (
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
                      <Link>Sign In </Link>
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
                    <span className="cart-count">{count}</span>
                  </div>
                  <div className="cart-text">
                    <span className="d-block">Your cart</span>
                    <span className="amount">
                      <span className="shopping-cart__total">
                        <span className="money">${price}</span>
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
                          <Link to={"/"} className="link">
                            HOME
                          </Link>
                        </li>
                        <li className="list">
                          <Link
                            className="link"
                            onMouseEnter={(e) => showDropdown(e)}
                            to={"/collection-all"}
                          >
                            PRODUCT{" "}
                          </Link>
                          <i className="fa-sharp fa-solid fa-caret-down"></i>
                          {show && (
                            <ul
                              className="lebel-menu"
                              onMouseLeave={() => hideDropdown()}
                            >
                              <li className="sub-menu-li">
                                <Link to="/variables-product">
                                  Variable product
                                </Link>
                              </li>

                              <li className="sub-menu-li">
                                <Link>Soldout product</Link>
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
                            to={"/collection-all"}
                          >
                            SHOP
                          </Link>
                          <i className="fa-sharp fa-solid fa-caret-down"></i>
                          {showShop && (
                            <ul
                              onMouseLeave={(e) => hideDropdownForShop(e)}
                              className="seconed-lebel-menu"
                            >
                              <li className="mega-menu-li">
                                <Link className="collection">
                                  Collection - 1
                                </Link>
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
                                <Link className="collection">
                                  Collection - 2
                                </Link>
                                <ul>
                                  <li>
                                    <Link>Simple product</Link>
                                  </li>

                                  <li>
                                    <Link>Variable with soldout product</Link>
                                  </li>

                                  <li>
                                    <Link>Sample affiliate product</Link>
                                  </li>

                                  <li>
                                    <Link>Countdown product</Link>
                                  </li>

                                  <li>
                                    <Link>Dummy product name</Link>
                                  </li>
                                </ul>
                              </li>

                              <li className="mega-menu-li">
                                <Link className="collection">
                                  Collection - 3
                                </Link>
                                <ul>
                                  <li>
                                    <Link>Simple product</Link>
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
                          >
                            PAGES
                          </Link>
                          <i className="fa-sharp fa-solid fa-caret-down"></i>
                          {showPages && (
                            <ul
                              style={{ padding: "15px 100px 20px 20px" }}
                              onMouseLeave={(e) => hideDropdownForPages(e)}
                              className="lebel-menu "
                            >
                              <li className="sub-menu-li">
                                <Link>About Us</Link>
                              </li>

                              <li className="sub-menu-li">
                                <Link>Services</Link>
                              </li>

                              <li className="sub-menu-li">
                                <Link>FAQ</Link>
                              </li>

                              <li className="sub-menu-li">
                                <Link>404</Link>
                              </li>

                              <li className="sub-menu-li">
                                <Link>Cart</Link>
                              </li>

                              <li className="sub-menu-li">
                                <Link>Checkout</Link>
                              </li>

                              <li className="sub-menu-li">
                                <Link>My Account</Link>
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
        ) : (
          <div id="fixed-header">
            <div className="container">
              <div className="fixed-header">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
                <div className="navbar">
                  <nav>
                    <ul className="list-link">
                      <li className="list">
                        <Link to={"/"} className="link">
                          HOME
                        </Link>
                      </li>
                      <li className="list">
                        <Link
                          className="link"
                          onMouseEnter={(e) => showDropdown(e)}
                          to={"/collection-all"}
                        >
                          PRODUCT{" "}
                        </Link>
                        <i className="fa-sharp fa-solid fa-caret-down"></i>
                        {show && (
                          <ul
                            className="lebel-menu"
                            onMouseLeave={() => hideDropdown()}
                          >
                            <li className="sub-menu-li">
                              <Link to="/variables-product">
                                Variable product
                              </Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link>Soldout product</Link>
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
                          to={"/collection-all"}
                        >
                          SHOP
                        </Link>
                        <i className="fa-sharp fa-solid fa-caret-down"></i>
                        {showShop && (
                          <ul
                            onMouseLeave={(e) => hideDropdownForShop(e)}
                            className="seconed-lebel-menu"
                          >
                            <li className="mega-menu-li">
                              <Link className="collection">Collection - 1</Link>
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
                              <Link className="collection">Collection - 2</Link>
                              <ul>
                                <li>
                                  <Link>Simple product</Link>
                                </li>

                                <li>
                                  <Link>Variable with soldout product</Link>
                                </li>

                                <li>
                                  <Link>Sample affiliate product</Link>
                                </li>

                                <li>
                                  <Link>Countdown product</Link>
                                </li>

                                <li>
                                  <Link>Dummy product name</Link>
                                </li>
                              </ul>
                            </li>

                            <li className="mega-menu-li">
                              <Link className="collection">Collection - 3</Link>
                              <ul>
                                <li>
                                  <Link>Simple product</Link>
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
                        >
                          PAGES
                        </Link>
                        <i className="fa-sharp fa-solid fa-caret-down"></i>
                        {showPages && (
                          <ul
                            style={{ padding: "15px 100px 20px 20px" }}
                            onMouseLeave={(e) => hideDropdownForPages(e)}
                            className="lebel-menu "
                          >
                            <li className="sub-menu-li">
                              <Link to="/about-us">About Us</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link>Services</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link>FAQ</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link>404</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link>Cart</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link>Checkout</Link>
                            </li>

                            <li className="sub-menu-li">
                              <Link>My Account</Link>
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
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
