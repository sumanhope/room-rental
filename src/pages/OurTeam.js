import React from "react";
import Header from "../Components/Header";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Ajit from "../images/ajit.jpg";

export const OurTeam = () => {
  return (
    <div className="font-inter">
      <Header />
      <div className="flex flex-wrap ml-[18vw]">
      <div className=" Ajit flex gap-x-6 grow basis-[420px] mt-[13vh]">
        <div className="h-[150px] w-[150px] flex justify-center items-center">
          <img className=" object-fill" src={Ajit} alt=""></img>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <div className="text-xl">Ajit Khadka</div>
            <div className=" mt-[10px] text-md font-light opacity-70">
              Front-end Developer and UI
            </div>
            <div className="flex gap-x-3  mt-[15px]">
              <a href="https://www.linkedin.com/in/ajitkhadka/" target="blank">
                <BsLinkedin className="text-xl cursor-pointer" />
              </a>
              <a href="https://github.com/Ajit-khadka" target="blank">
                <BsGithub className="text-xl cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        </div>
        <div className="palden flex gap-x-6 grow basis-[420px] mt-[13vh]">
        <div className="h-[150px] w-[150px] flex justify-center items-center">
          <img className=" object-fill" src={Ajit} alt=""></img>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <div className="text-xl">Palden Gastyo Lama</div>
            <div className=" mt-[10px] text-md font-light opacity-70">
              Front-end Developer and UI
            </div>
            <div className="flex gap-x-3  mt-[15px]">
              <a href="https://www.linkedin.com/in/ajitkhadka/" target="blank">
                <BsLinkedin className="text-xl cursor-pointer" />
              </a>
              <a href="https://github.com/Ajit-khadka" target="blank">
                <BsGithub className="text-xl cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        </div>
        <div className="suman flex gap-x-6 grow basis-[420px] mt-[13vh]">
        <div className="h-[150px] w-[150px] flex justify-center items-center">
          <img className=" object-fill" src={Ajit} alt=""></img>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <div className="text-xl">Suman Shrestha</div>
            <div className=" mt-[10px] text-md font-light opacity-70">
              Back-end Developer
            </div>
            <div className="flex gap-x-3  mt-[15px]">
              <a href="https://www.linkedin.com/in/ajitkhadka/" target="blank">
                <BsLinkedin className="text-xl cursor-pointer" />
              </a>
              <a href="https://github.com/Ajit-khadka" target="blank">
                <BsGithub className="text-xl cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        </div>
        <div className=" bishal flex gap-x-6 grow basis-[420px] mt-[13vh]">
        <div className="h-[150px] w-[150px] flex justify-center items-center">
          <img className=" object-fill" src={Ajit} alt=""></img>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <div className="text-xl">Bishal Shrestha</div>
            <div className=" mt-[10px] text-md font-light opacity-70">
            Back-end Developer
            </div>
            <div className="flex gap-x-3  mt-[15px]">
              <a href="https://www.linkedin.com/in/ajitkhadka/" target="blank">
                <BsLinkedin className="text-xl cursor-pointer" />
              </a>
              <a href="https://github.com/Ajit-khadka" target="blank">
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
