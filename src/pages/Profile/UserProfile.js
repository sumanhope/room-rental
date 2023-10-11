import React ,{useState} from "react";
import { BsHouseAdd } from 'react-icons/bs';
import { GetUserInfo } from "../../config/user-info";

export const UserProfile = () => {
  const { username, email, isAuth } = GetUserInfo();

  const [userName, setUserName] = useState("");
  const [emailInput, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const message = <p className="w-[250px]">Use 8 or more characters, with a mix of letters, numbers and symbols</p>
  return (
    <div id="UserProfileContainer" className="font-inter ml-[11vw]">
      <div>
      <div className="text-xl mt-[8vh]">Account Information</div>
      <form className="mt-[2vh]">
        <div id ="UserProfileInfo" className="flex">
        <div className="Username font-inter">
          <div className="opacity-70 text-sm mt-[15px]">Username</div>
          <div className=" text-sm mt-[10px] h-[40px] w-[250px] border-[1px] border-black border-opacity-60 rounded-md flex">
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="pl-[6px] w-[100vw] rounded-md opacity-70 outline-none "
              placeholder={username}
            ></input>
          </div>
        </div>
        <div id="UserInfoElement" className="email font-inter ml-[5vw] ">
          <div className="opacity-70 text-sm mt-[15px]">Email</div>
          <div className=" text-sm mt-[10px] h-[40px] w-[250px] border-[1px] border-black border-opacity-60 rounded-md flex">
            <input
              value={emailInput}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-[6px] w-[100vw] rounded-md opacity-70 outline-none "
              placeholder={email}
            ></input>
          </div>{" "}
        </div>
        </div>
        <div id ="UserProfileInfo" className="flex mt-[2vh]">
        <div className="pass font-inter ">
          <div className="opacity-70 text-sm mt-[15px]">Password</div>
          <div className=" text-sm mt-[10px] h-[40px] w-[250px] border-[1px] border-black border-opacity-60 rounded-md flex">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-[6px] w-[100vw] rounded-md opacity-70 outline-none "
            ></input>
          </div>{" "}
        </div>
        <div id="UserInfoElement" className="ConfirmPass font-inter ml-[5vw]">
          <div className="opacity-70 text-sm mt-[15px]">Confirm Password</div>
          <div className=" text-sm mt-[10px] h-[40px] w-[250px] border-[1px] border-black border-opacity-60 rounded-md flex">
            <input
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="pl-[6px] w-[100vw] rounded-md opacity-70 outline-none "
            ></input>
          </div>
        </div>
        </div>
        <div className="message mt-[4vh] text-[11px] ">{message}</div>
        <button className="h-[40px] w-[250px] bg-customOrange text-white rounded-md text-sm mt-[4vh] font-bold">Update</button>
      </form>
      <div className="posts ">
      <div className="text-xl mt-[4vh] flex gap-x-[5px]">Posts <BsHouseAdd className="h-[20px] w-[20px] mt-[3px] text-customOrange cursor-pointer"/></div>
      <div className="ownPosts border border-red-500 mt-[4vh] h-[20vh] mr-[10%]">
      </div>
      </div>
      </div>
    </div>
  );
};
