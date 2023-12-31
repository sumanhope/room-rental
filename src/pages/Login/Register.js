import { React, useState } from "react";
import Login from "../../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { auth, db, provider } from "../../config/firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
} from "firebase/firestore";

export const Register = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirm] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      return alert("Password doesnot match");
    }
    try {
      const authResult = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // User created successfully
      const { uid } = authResult.user;

      // Store additional user data in Firestore
      const userDocRef = doc(db, "users", uid);
      await setDoc(userDocRef, {
        email,
        uid,
        username,
        createdAt: serverTimestamp(),
        isAuth: "true",
      });
      const authInfo = {
        uid: uid,
        username: username,
        email: email,
        isAuth: true,
      };
      localStorage.setItem("auth", JSON.stringify(authInfo));
      setCurrentUser(true);
      setError(null);
    } catch (error) {
      // Handle any errors here
      setError(error.message);
      alert(error.message);
      console.error(error.message);
    }
  };
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const authInfo = {
      uid: result.user.uid,
      username: result.user.displayName,
      email: result.user.email,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/");
  };

  if (currentUser) {
    navigate("/");
  }

  return (
    <div
      id="loginBody"
      className="flex h-[100%] w-[100%] overflow-auto fixed justify-start items-center"
    >
      <div id="loginContainer" className="sticky  left-[5vw] z-10">
        <div
          id="Shadow"
          className="border border-customOrange h-[540px] w-[280px] flex justify-center items-center rounded-lg leading-8 bg-white mb-[10vh]"
        >
          <div className="">
            <form onSubmit={handleSignUp}>
              <div className="font-bold font-inter text-xl opacity-70">
                Create Account
              </div>
              <div className="Username font-inter ">
                <div className="opacity-70 text-sm mt-[15px] ">Username</div>
                <input
                  required
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-[10px] h-[38px] w-[220px] border-[1px] opacity-70 text-sm border-black border-opacity-60 rounded-md outline-none pl-[6px]"
                ></input>
              </div>
              <div className="Email font-inter ">
                <div className="opacity-70 text-sm mt-[15px] ">Email</div>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-[10px] h-[38px] w-[220px] border-[1px] opacity-70 text-sm border-black border-opacity-60 rounded-md outline-none pl-[6px]"
                ></input>
              </div>
              <div className="Password font-inter x">
                <div className="opacity-70 text-sm mt-[10px]">Password</div>
                <div className="relative text-sm mt-[10px] h-[38px] w-[220px] border-[1px] border-black border-opacity-60 rounded-md flex ">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={visible ? "text" : "password"}
                    required
                    className="  w-[100vw] rounded-md opacity-70 outline-none pl-[6px]"
                    placeholder="Create a password"
                  ></input>
                  <span
                    className="mr-[30px]"
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? (
                      <AiFillEye className="h-[20px] w-[20px] fill-customOrange mt-[8px] " />
                    ) : (
                      <AiFillEyeInvisible className="h-[20px] w-[20px] fill-customOrange mt-[8px] " />
                    )}
                  </span>
                </div>
              </div>
              <div className="Confirm font-inter x">
                <div className="opacity-70 text-sm mt-[10px]">
                  Confirm Password
                </div>
                <div className="relative text-sm mt-[10px] h-[38px] w-[220px] border-[1px] border-black border-opacity-60 rounded-md flex ">
                  <input
                    value={confirmpassword}
                    type={visible1 ? "text" : "password"}
                    onChange={(e) => setConfirm(e.target.value)}
                    required
                    className=" pl-[6px] w-[100vw] rounded-md opacity-70 outline-none"
                    placeholder="Create a password"
                  ></input>
                  <span
                    className="mr-[30px]"
                    onClick={() => setVisible1(!visible1)}
                  >
                    {visible1 ? (
                      <AiFillEye className="h-[20px] w-[20px] fill-customOrange mt-[8px] " />
                    ) : (
                      <AiFillEyeInvisible className="h-[20px] w-[20px] fill-customOrange mt-[8px] " />
                    )}
                  </span>
                </div>
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
              <button
                type="submit"
                className=" mt-[10px] px-[81px] py-[10px] text-sm bg-customOrange text-white font-inter font-bold rounded-lg "
              >
                Register
              </button>
              <button
                onClick={signInWithGoogle}
                className=" mt-[20px] flex  items-center leading-3 w-[219px] text-sm  py-2 text-black-200 border border-black font-inter border-opacity-50  rounded-lg"
              >
                <svg
                  className="h-[20px] w-[20px] ml-[10px] fill-customOrange  border-black border-opacity-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
                </svg>
                <div className="opacity-70 ml-[10px]">Continue with Google</div>
              </button>
            </form>
          </div>
        </div>
        <div className="font-inter text-[12px] mt-[20px] text-gray-500 ml-[3vw]">
          Already have an account?{" "}
          <Link to="/Signin" className="text-customOrange">
            Sign in
          </Link>
        </div>
      </div>
      <img
        id="backImageLogin"
        className=" ml-[10vw] flex justify-end relative h-[100vh] w-[80vw] object-cover"
        src={Login}
        alt=""
      />
    </div>
  );
};
