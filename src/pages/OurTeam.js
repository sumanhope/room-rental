import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Ajit from "../images/ajit.jpg";
import Suman from "../images/suman.jpg";
import Bishal from  "../images/bishal.jpg";
import Default from "../images/default-image.png"

export const OurTeam = () => {
  return (
    <div className="font-inter">
      <div id="ourTeam" className="flex flex-wrap ml-[18vw]">
        <div
          id="TeamContainer"
          className=" Ajit flex gap-x-6 grow basis-[420px] mt-[13vh]"
        >
          <div
            id="phto"
            className="h-[150px] w-[150px] flex justify-center items-center"
          >
            <img className=" object-fill" src={Ajit} alt=""></img>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <div id="name" className="text-xl">
                Ajit Khadka
              </div>
              <div
                id="Task"
                className=" mt-[10px] text-md font-light opacity-70"
              >
                Front-end Developer and UI
              </div>
              <div className="flex gap-x-3  mt-[15px]">
                <a
                  href="https://www.linkedin.com/in/ajitkhadka/"
                  target="blank"
                >
                  <BsLinkedin className="text-xl cursor-pointer" />
                </a>
                <a href="https://github.com/Ajit-khadka" target="blank">
                  <BsGithub className="text-xl cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="TeamContainer"
          className="suman flex gap-x-6 grow basis-[420px] mt-[13vh] "
        >
          <div
            id="phto"
            className="h-[150px] w-[150px] flex justify-center items-center "
          >
            <img className= "object-fit" src={Suman} alt=""></img>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <div id="name" className="text-xl">
                Suman Shrestha
              </div>
              <div
                id="Task"
                className=" mt-[10px] text-md font-light opacity-70"
              >
                Back-end Developer
              </div>
              <div className="flex gap-x-3  mt-[15px]">
                <a href="https://www.linkedin.com/in/sumanhope" target="blank">
                  <BsLinkedin className="text-xl cursor-pointer" />
                </a>
                <a href="https://github.com/sumanhope" target="blank">
                  <BsGithub className="text-xl cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="TeamContainer"
          className=" bishal flex gap-x-6 grow basis-[420px] mt-[13vh] mb-[10vh]"
        >
          <div
            id="phto"
            className="h-[150px] w-[150px] flex justify-center items-center"
          >
            <img className=" object-fill" src={Bishal} alt=""></img>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <div id="name" className="text-xl">
                Bishal Shrestha
              </div>
              <div
                id="Task"
                className=" mt-[10px] text-md font-light opacity-70"
              >
                Front-end Developer
              </div>
              <div className="flex gap-x-3  mt-[15px]">
                <a
                  href="https://www.linkedin.com/in/bishal-shrestha-a716a2211/?fbclid=IwAR14irV2YUZu0JISWcLFMK0Hd7FssKfG8c35ZqFqnTVidaIqa5sJ41dvEl0"
                  target="blank"
                >
                  <BsLinkedin className="text-xl cursor-pointer" />
                </a>
                <a href="https://github.com/CypHELLER?fbclid=IwAR3ZZgrzTN75BzGIL8nmRwdl5Z2mXQhs-zqqBSS7Pf61JgqhPpkMIOn4MxU" target="blank">
                  <BsGithub className="text-xl cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
