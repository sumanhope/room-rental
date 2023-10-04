import React from 'react'
import Header from '../Components/Header'
import Image from "../images/indoor.png";
import { IoIosArrowForward } from "react-icons/io";
export const About = () => {
  return (
    <div>
      <Header />
      <div className="flex font-inter justify-center items-center h-[calc(100vh-96px)] gap-x-40 ">
        <div
          className="text-black text-opacity-75 text-xs mt-[10px] p-4 border border-gray-100 rounded shadow-xl h-[400px] w-[500px]">
          <div id="Description" className="font-bold text-2xl  mt-[10px] flex font-inter ">
            About Us <IoIosArrowForward />
          </div>
          <div
            id="Description" className="font-inter text-justify py-5"
            
          >
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </div>
        </div>
        <div className="">
          <img className="shadow-xl h-[400px] w-[500px]" src={Image} alt="room" />
        </div>
      </div>
    </div>
  );
}



