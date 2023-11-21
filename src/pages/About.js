import React from "react";
import Image from "../images/indoor.png";
import { IoIosArrowForward } from "react-icons/io";
export const About = () => {
  return (
    <div>
      <div className="flex flex-col font-inter justify-center items-center h-[calc(100vh-100px)] gap-x-40 sm:flex-row">
        <div className="text-black text-opacity-75 text-xs mt-10 p-4 border border-gray-100 rounded shadow-xl h-40vh sm:w-1/4">
          <div
            id="Description"
            className="font-bold text-2xl  mt-5 flex font-inter "
          >
            About Us <IoIosArrowForward />
          </div>
          <div
            id="Description"
            className="font-inter text-justify py-5 text-xs"
          >
            Room Rental began as an idea among friends who were eager to deepen
            their understanding of React and Firebase techonologies. Recognizing
            the value of hands-on experience, we decide to create a unique
            platform that would serve as a practical learning ground. This
            virtual space may not be a real-world rental site, but it's a
            testament to our dedication to continuous learning and pushing the
            boundaries of what we can create.
            <br />
            Curious to see what Room Rental has to offer? Feel free to sign in
            or register to experience the functionality firsthand. Navigate
            through the user interface, interact with the features, and witness
            the seamless integration of React and Firebase. This platform is a
            living demonstration of our commitment to excellence and continuous
            improvement.
            <br />
            Happy Coding!
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="shadow-xl w-full max-w-[500px] h-auto"
            src={Image}
            alt="room"
          />
        </div>
      </div>
    </div>
  );
};
