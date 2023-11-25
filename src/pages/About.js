import React from "react";
import Image from "../images/furnished.png";
export const About = () => {
  return (
    <div>
        <img
          className="absolute inset-0 h-full w-full object-cover  z-[-1]"
          src={Image}
          alt="furnished-room"
        />
      <div className="flex flex-col font-inter justify-center items-center h-[calc(100vh-100px)] gap-x-40 sm:flex-row ">
        <div className="text-black text-opacity-75 text-xs px-8 border border-gray-100 shadow-xl  sm:w-[50vw] bg-white py-4 ">
          <div
            id="Description"
            className=" text-2xl  mt-5 flex font-inter text-customOrange text-center"
          >
            About Us 
          </div>
          <div
            id="Description"
            className="font-inter text-justify py-5 text-[14px] font-light"
          >
            Room Rental began as an idea among friends who were eager to deepen
            their understanding of React and Firebase techonologies. Recognizing
            the value of hands-on experience, we decide to create a unique
            platform that would serve as a practical learning ground. This
            virtual space may not be a real-world rental site, but it's a
            testament to our dedication to continuous learning and pushing the
            boundaries of what we can create.
            <br />
            <br/>
            Curious to see what Room Rental has to offer? Feel free to sign in
            or register to experience the functionality firsthand. Navigate
            through the user interface, interact with the features, and witness
            the seamless integration of React and Firebase. This platform is a
            living demonstration of our commitment to excellence and continuous
            improvement.
            <br />
            <br/>
            Happy Coding!
          </div>
        </div>
      </div>
    </div>
  );
};
