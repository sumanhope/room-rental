import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { GetUserInfo } from "../config/user-info";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const { username, isAuth } = GetUserInfo();
  const displayname = isAuth ? username : null;
  const navs = useRef();
  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  // console.log(isAuth, username);

  const showSideNav = () => {
    navs.current.classList.toggle("sideNav");
  };
  return (
    <header className=" sticky top-0 z-40 w-[100%]">
      <nav id="" className="">
        <div
          id="header"
          className="h-20 py-12 px-[10%] shadow-xl flex items-center justify-between  top-0 bg-white overflow-hidden"
        >
          <Link to="/" className="cursor-pointer">
            <Logo></Logo>
          </Link>

          <div id="nav" ref={navs} className="">
            <div id="navitems" className="flex gap-x-8 font-bold font-inter">
              <NavLink to="/" className="nav-link" id="Header">
                Home
              </NavLink>
              <NavLink to="/Rooms" className="nav-link">
                Rooms
              </NavLink>
              <NavLink to="/Favorite" className="nav-link">
                Favorite
              </NavLink>
              <NavLink to="/About" className="nav-link">
                About
              </NavLink>
              <NavLink to="/OurTeam" className="nav-link">
                Team
              </NavLink>
              <NavLink to="/Contact" className="nav-link">
                Contact
              </NavLink>
            </div>

            <div
              id="sideNavLogin"
              className="login items-center text-center font-inter hidden"
            >
              {isAuth ? (
                // If the user is authenticated, display the username
                <div className="font-bold cursor-pointer">{displayname}</div>
              ) : (
                // If the user is not authenticated, display the "Sign in" link
                <div className="font-inter">
                  <NavLink to="/Signin" className="nav-link font-bold">
                    Sign in
                  </NavLink>
                </div>
              )}
              {isAuth ? (
                <button className="py-3 px-8 bg-customOrange text-white font-bold mt-[18px]" onClick={signUserOut}>
                  Logout
                </button>
              ) : (
                <div className="font-inter mt-[18px]">
                <NavLink
                  to="/Register"
                  id="register"
                  className="font-bold  "
                >
                  Register
                </NavLink>
                </div>
              )}
            </div>

            <button className="navBar sidebar hidden" onClick={showSideNav}>
              <IoCloseSharp className="h-[20px] w-[20px]" />
            </button>
          </div>

          <div className="flex items-center gap-x-8 ">
            <div id="headerLogin" className="login flex items-center gap-x-8">
              {isAuth ? (
                // If the user is authenticated, display the username
                <div className="nav-link font-bold">{displayname}</div>
              ) : (
                // If the user is not authenticated, display the "Sign in" link
                <NavLink to="/Signin" className="nav-link font-bold">
                  Sign in
                </NavLink>
              )}
              {isAuth ? (
                <button
                  className="py-3 px-8 bg-customOrange font-bold text-white shadow-lg hover:-translate-y-1 duration-500"
                  onClick={signUserOut}
                >
                  Log Out
                </button>
              ) : (
                <Link
                  to="/Register"
                  id="register"
                  className="py-3 px-8 bg-customOrange font-bold text-white shadow-lg hover:-translate-y-1 duration-500"
                >
                  Register
                </Link>
              )}
            </div>

            <button
              id="sidebar"
              className="navBar hidden "
              onClick={showSideNav}
            >
              <FaBars className="h-[25px] w-[25px] cursor-pointer fill-customOrange" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
