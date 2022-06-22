import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

const filterSearch = (searchText, listOfSearch) => {
  if (!searchText) {
    return listOfSearch;
  }
  return listOfSearch.filter(({ search }) => search.toLowerCase().includes());
};

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { email } = useAuth();

  // const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  // const changeBackground = () => {
  //   if (window.scrollY >= 80) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            SAYAKAT
            <i class="fab fa-typo3" />
          </Link>
          <div className="search">Search</div>
          <div>
            <input id="inpSer" />
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {email === "admin@gmail.com" ? (
              <li className="nav-item">
                <Link
                  to="/addatour"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Add a tour
                </Link>
              </li>
            ) : null}
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tours
              </Link>
            </li>

            <li>
              <div className="cart">
                <Link
                  to="/cart"
                  className="navbar-logo"
                  onClick={closeMobileMenu}
                >
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </Link>
              </div>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Link to="/sign-up" className="btn-mobile">
              <Button buttonStyle="btn--outline">SIGN UP</Button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
