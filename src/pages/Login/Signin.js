import React from "react";
import Login from "../../images/login.png";
import { Link } from "react-router-dom";
import { auth, provider } from "../../config/firebase-config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: result.user.uid,
      name: result.user.displayName,
      profilePhoto: result.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/");
  };

  return (
    <div className="flex h-[100%] w-[100%] overflow-auto">
      <div className=" sticky mt-[20vh] left-[5vw] z-10">
        <div
          id="Shadow"
          className="border border-customOrange h-[430px] w-[300px] flex justify-center items-center rounded-lg leading-8 bg-white"
        >
          <div className="">
            <div className="font-bold font-inter text-xl opacity-70">
              Welcome Back
            </div>
            <div className="Username font-inter ">
              <div className="opacity-70 text-sm mt-[15px] ">
                Username or Email
              </div>
              <input className="mt-[10px] h-[38px] w-[220px] border-[1px] opacity-70 text-sm border-black border-opacity-60 rounded-md"></input>
            </div>
            <div className="Password font-inter x">
              <div className="opacity-70 text-sm mt-[10px]">Password</div>
              <input className=" opacity-70 text-sm mt-[10px] h-[38px] w-[220px] border-[1px] border-black border-opacity-60 rounded-md"></input>
            </div>
            <div className="flex mt-[10px]">
              <div>
                <svg
                  className="fill-customOrange  relative mt-[6px] h-[18px] w-[20px] "
                  viewBox="0 0 24 24"
                >
                  <path d="M21 3V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H20C20.5523 2 21 2.44772 21 3ZM11.2929 13.1213L8.81802 10.6464L7.40381 12.0607L11.2929 15.9497L16.9497 10.2929L15.5355 8.87868L11.2929 13.1213Z"></path>
                </svg>
              </div>
              <div className="ml-1 text-[12px] opacity-70 font-inter">
                Keep me signed in
              </div>
            </div>
            <button className=" mt-[10px] px-[87px] py-[10px] text-sm bg-customOrange text-white font-inter font-bold rounded-lg ">
              Sign in
            </button>
            <button
              className=" mt-[20px] flex  items-center leading-3 w-[220px] text-sm  py-2 text-black-200 border border-black font-inter border-opacity-50  rounded-lg"
              onClick={signInWithGoogle}
            >
              <svg
                className="h-[20px] w-[20px] ml-[10px] fill-customOrange  border-black border-opacity-10"
                viewBox="0 0 24 24"
              >
                <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
              </svg>
              <div className="opacity-70 ml-[10px]">Continue with Google</div>
            </button>
            <div className="flex">
              <Link
                to="/Recover"
                target="_blank"
                className="  mt-[5px] font-inter opacity-70 text-[12px]"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
        <div className="font-inter text-[12px] mt-[20px] text-gray-500 ml-[3vw]">
          Don't have an account yet?{" "}
          <Link to="/Register" className="text-customOrange">
            Join Now
          </Link>
        </div>
      </div>
      <img
        className=" ml-[10vw] flex justify-end relative h-[100vh] w-[80vw] object-cover"
        src={Login}
        alt=""
      />
    </div>
  );
};
