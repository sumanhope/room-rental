import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { GetUserInfo } from "../config/user-info";
import { AiOutlineSearch } from "react-icons/ai";
import { RiEqualizerLine } from "react-icons/ri";
import Roomboxs from "../Components/Roomboxs";
import Filterpopup from "../Components/Filterpopup";

export const Favorite = () => {
  const { username, isAuth } = GetUserInfo();
  const [showFilter, setShowFilter] = useState(false);
  const displayname = isAuth ? username : null;

  useEffect(() => {
    loginCheck();
  });

  const loginCheck = () => {
    if (displayname == null) {
      const element = document.querySelector("#noLogin");
      element.classList.add("favNotLogin");
      element.innerHTML = "Sign in in to use this feature 📖";
    } else {
      document.querySelector(".favLogin").style.display = "block";
    }
  };

  return (
    <div className="font-inter">
     
      <div id="noLogin" className=""></div>

      <div className="favLogin hidden">
      <div  id="wholeRoom" className="">
      <div id="searchSectionContainer" className="ml-[8vw] ">
        <Filterpopup show={showFilter} close={ () => setShowFilter(false)}/>
        <div id="searchSection" className=" flex font-inter mt-[6vh]  w-[350px]">
          <div id='search' className="flex  justify-around items-center border-2 border-black border-opacity-50 rounded-md text-sm ">
            <AiOutlineSearch className=" h-[25px] w-[25px] fill-customOrange ml-[8px] pl-[0px] cursor-pointer" />
            <input
              className="outline-none ml-[8px]"
              placeholder="Search..."
            ></input>
             <RiEqualizerLine id='hiddenFilter' className="h-[20px] w-[20px] fill-customOrange absolute ml-[180px] z-[1] cursor-pointer hidden" onClick={ () => setShowFilter(true)} />
          </div>
          <div id="filter" className="w-[0px] flex items-center ml-[15px]">
            <button className="border-2 border-black border-opacity-50 pr-[40px] py-[8px] rounded-md pl-[15px]"  onClick={ () => setShowFilter(true)}>
              Filter
            </button>
            <RiEqualizerLine className="h-[20px] w-[20px] fill-customOrange absolute ml-[60px] z-[-1]" />
          </div>
          
        </div>
        </div>
        <div id="roomBoxesContainer" className="ml-[0vw] px-[5%]">
      <div className="flex flex-wrap  justify-center ">
        <Roomboxs />
        <Roomboxs />
        <Roomboxs />
        <Roomboxs />
        <Roomboxs />
        <Roomboxs />
       
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};
