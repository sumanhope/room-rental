import React from 'react'
import Header from '../Components/Header'
import Image from "../images/furnished.png";
import { AiOutlineUser, AiOutlineMail} from 'react-icons/ai';
import { BsTelephone, BsChat } from 'react-icons/bs';
export const Contact = () => {
  return (
    <div>
      <Header />
      <div className=''>
        <img className="absolute inset-0 h-full w-full object-cover"
          src={Image}
          alt="furnished-room" />

        <div className="absolute font-inter inset-0 flex flex-col justify-center items-center text-white py-5">
          <div className="mb-4">ABC Company | 9861711723 | Naxal, Kathmandu</div>

          <div className=" bg-white h-[50vh] w-[70vw]">
            <div className="flex justify-center text-customOrange text-2xl mt-5">
              Get in touch
            </div>

            <div className="flex justify-center text-black">
              let's talk about your project
            </div>

            <div className="flex mt-4">
              <div className="text-sm mt-[10px] h-[5vh] w-[15vw] border-[1px] border-black border-opacity-60 rounded-md flex ml-auto">
                <div className="flex items-center">
                  <AiOutlineUser className="text-customOrange text-lg ml-2" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-transparent border-none outline-none w-full pl-2 placeholder-gray-500 text-black"
                  />
                </div>
              </div>
              <div className="text-sm mt-[10px] h-[5vh] w-[15vw] border-[1px] border-black border-opacity-60 rounded-md flex mx-auto">
                <div className="flex items-center">
                  <BsTelephone className="text-customOrange text-lg ml-2"/>
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="bg-transparent border-none outline-none pl-2 w-full placeholder-gray-500 text-black"
                />
              </div>
            </div>
            <div className="text-sm mt-[10px] h-[5vh] w-[15vw] border-[1px] border-black border-opacity-60 rounded-md flex mr-auto">
            <div className="flex items-center">
            <AiOutlineMail className="text-customOrange text-lg ml-2"/>
              <input
                type="text"
                placeholder="Your Email"
                className="bg-transparent border-none outline-none pl-2 w-full placeholder-gray-500 text-black"
              /></div></div>
          </div>

          <div className="flex mt-5 ">
          <div className="text-sm mt-[10px] border-[1px] border-black border-opacity-60 rounded-md flex mx-auto">
                <div className="flex items-start">
                  <BsChat className="text-customOrange text-lg ml-2 mt-2" />
                  <textarea 
                    type="text"
                    placeholder="Message"
                    className="bg-transparent border-none outline-none resize-both pl-2 pt-2 h-[15vh] w-[58vw] placeholder-gray-500 text-black"
                  />
                </div>
                </div>
          </div>

          <div className="flex mt-4"></div>
          <div className="flex justify-center mt-4">
              <button className="bg-customOrange text-white py-2 px-4 rounded-md text-sm h-auto w-auto">
                Hire Us
              </button>
          </div>
        </div>
      </div>
    </div>
    </div >
  )
}


