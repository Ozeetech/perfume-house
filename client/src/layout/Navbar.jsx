import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import navLogo from "../assets/Group 9283.svg";
import dropDownIcon from "../assets/arrow-down.svg";
import LogOut from "../component/LogOut";
import arrowUp from "../assets/arrow up.svg";
import OffCanvass from "../component/OffCanvass";


const Navbar = () => {
  const [isLoggedIn, setIsLoggeIn] = useState(false);
  const [isReveal,setIsReveal] = useState(false)
  function toggleIsReveal(){
    isReveal ? setIsReveal(false) : setIsReveal(true)
  }
  return (
    <>
      <nav className="container py-4 d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2">
          <img src={navLogo} alt="nav-logo" />
          <h2 className="d-none d-lg-block">Perfume House</h2>
        </div>
        <div className="d-none d-md-flex gap-4">
          {isLoggedIn ? (
            <>
              <div className="position-relative">
                <h1>
                  {" "}
                  Hi, Ozee Cole{" "}
                  <span className="ms -3">
                    {isReveal ?  <img
                    onClick={toggleIsReveal}
                      src={arrowUp}
                      alt="drop-down-icon"
                      role="button"
                    /> : <img
                    onClick={toggleIsReveal}
                      src={dropDownIcon}
                      alt="drop-down-icon"
                      role="button"
                    /> }
                   
                  </span>
                </h1>
                <div className="position-absolute end-0">{isReveal && <LogOut/>}</div>
              </div>
            </>
          ) : (
            <>
              <button className="login-btn">
                <Link
                  className="text-decoration-none login-link"
                  to="/auth/login"
                >
                  {" "}
                  Log in{" "}
                </Link>
              </button>
              <button className="sign-up-btn">
                <Link
                  className="text-decoration-none sign-up-link"
                  to="/auth/signup"
                >
                  {" "}
                  Signup{" "}
                </Link>
              </button>
            </>
          )}
        </div>


        <div className="d-md-none">
        {[ 'top'].map((placement, idx) => (
        <OffCanvass key={idx} placement={placement} name={placement} />
      ))}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
