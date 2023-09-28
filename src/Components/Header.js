import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { GetUserInfo } from "../config/user-info";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";

const Header = () => {
  const { username, isAuth } = GetUserInfo();
  const displayname = isAuth ? username : null;
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
  return (
    <nav className="sticky top-0">
      <div
        id="header"
        className="h-20 py-12 px-[10%] shadow-xl flex items-center justify-between  top-0 bg-white overflow-hidden"
      >
        <Link to="/">
          <Logo></Logo>
        </Link>

        <div className="flex gap-x-8 font-bold font-inter">
          <NavLink to="/" className="nav-link">
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
            OurTeam
          </NavLink>
          <NavLink to="/Contact" className="nav-link">
            Contact
          </NavLink>
        </div>

        <div className="login flex items-center gap-x-8 font-inter">
          {isAuth ? (
            // If the user is authenticated, display the username
            <div className="font-bold">{displayname}</div>
          ) : (
            // If the user is not authenticated, display the "Sign in" link
            <Link to="/Signin" className="font-bold">
              Sign in
            </Link>
          )}
          {isAuth ? (
            <button
              className="py-3 px-8 bg-customOrange font-bold text-white shadow-lg hover:-translate-y-1 duration-500"
              onClick={signUserOut}
            >
              SignOut
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
      </div>
    </nav>
  );
};

export default Header;
