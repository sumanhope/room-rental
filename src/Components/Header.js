import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { GetUserInfo } from "../config/user-info";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
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

  let Links = [
    { name: "HOME", link: "/" },
    { name: "ROOMS", link: "/Rooms" },
    { name: "FAVORITE", link: "/Favorite" },
    { name: "ABOUT", link: "/About" },
    { name: "TEAM", link: "/OurTeam" },
    { name: "CONTACT", link: "/Contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div>
          <Logo></Logo>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className=" nav-link md:ml-8 text-xl md:my-0 my-7"
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}

          <div className="login flex items-center md:ml-28 gap-x-8 font-inter cursor-pointer">
            {isAuth ? (
              // If the user is authenticated, display the username
              <div className=" nav-link font-inter text-xl font-semibold uppercase">
                {displayname}
              </div>
            ) : (
              // If the user is not authenticated, display the "Sign in" link
              <NavLink
                to="/Signin"
                className="nav-link font-inter text-xl font-semibold"
              >
                LOG IN
              </NavLink>
            )}

            {isAuth ? (
              <button
                className="py-3 px-8 bg-customOrange font-inter uppercase text-x font-semibold text-white shadow-lg hover:-translate-y-1 duration-500"
                onClick={signUserOut}
              >
                LOG OUT
              </button>
            ) : (
              <Link
                to="/Register"
                id="register"
                className="py-3 px-8 bg-customOrange font-inter uppercase text-x font-semibold text-white shadow-lg hover:-translate-y-1 duration-500"
              >
                Register
              </Link>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
