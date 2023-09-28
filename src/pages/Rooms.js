import React, { useState } from "react";
import Header from "../Components/Header";
import { AiOutlineSearch } from "react-icons/ai";
import { RiEqualizerLine } from "react-icons/ri";
import Roomboxs from "../Components/Roomboxs";

export const Rooms = () => {
  return (
    <div className="font-inter">
      <Header />
      <div className="ml-[10vw]">
        <div className="flex font-inter mt-[6vh]">
          <div className="flex  justify-around items-center border-2 border-black border-opacity-50 rounded-md text-sm ">
            <AiOutlineSearch className=" h-[25px] w-[25px] fill-customOrange ml-[8px] pl-[0px] " />
            <input
              className="outline-none ml-[8px] 
        "
              placeholder="Search..."
            ></input>
          </div>
          <div className="w-[200px] flex items-center ml-[15px]">
            <button className="border-2 border-black border-opacity-50 pr-[40px] py-[8px] rounded-md pl-[15px] ">
              Filter
            </button>
            <RiEqualizerLine className="h-[20px] w-[20px] fill-customOrange absolute ml-[60px]" />
          </div>
        </div>
        <div className="mt-[2vh]">
          <button className=" mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-sm opacity-100 font-regular font-inter">
            Modern
          </button>
          <button className=" mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-sm opacity-100 font-regular font-inter">
            Traditional
          </button>
          <button className=" mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-sm opacity-100 font-regular font-inter">
            Garage
          </button>
          <button className=" mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-sm opacity-100 font-regular font-inter">
            Garden
          </button>
        </div>
      </div>

      <div className="flex flex-grow-1 flex-wrap gap-x-20 justify-center">
        <Roomboxs />
        <Roomboxs />
        <Roomboxs />
        <Roomboxs />
        <Roomboxs />
        <Roomboxs />
      </div>
    </div>
  );
};
