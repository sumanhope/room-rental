import React, {useRef, useState} from "react";
import Room from "../images/room.jpg";
import Sofa from "../images/sofa.jpg";
import Temple from "../images/temple.jpg";
import ImageSlider from "../Components/ImageSlider";


export const RoomInfo = () => {
    const slides = [
        {url : Room , title: "Image1"},
        {url : Sofa , title: "Image2"},
        {url : Temple , title: "Image2"}
    ]

   
  
  return (
    <div id="wholeRoomInfo" className="font-inter ">
      <div className="flex flex-wrap justify-center mt-[13vh] gap-x-10 z-0">     
        <div id="imageSliderContainer" className="h-[60vh] w-[600px]" >
            <ImageSlider id="imageSlider" className="" slides={slides} parentWidth={600}></ImageSlider>  
          {/* <img className="h-[60vh] w-[45vw]" src={Room} alt=""></img> */}
        </div>
        <div  id="RoomdetailsContainer" className="overflow-y-scroll h-[60vh] pr-[2vw] overflow-hidden scroll-smooth ">
          <div id="Roomdetails" className="text-2xl mt-[8px] ">Bhaktapur Durbar</div>
          <div className="text-sm">
            <div className="mt-[8px]"> Rooms - {2} </div>
            <div className="mt-[8px]"> SanoThimi, Bhaktapur</div>
            <div className="mt-[8px]"> Monthly Price - NPR {15000}</div>
            <div className="mt-[8px]">Land Lord Contact - {9861717223}</div>
          </div>
          <div className="mt-[15px]">
            <button className=" mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-[13px] opacity-100 font-regular font-inter">
              Modern
            </button>
            <button className=" mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-[13px] opacity-100 font-regular font-inter">
              Traditional
            </button>
            <button className=" mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-[13px] opacity-100 font-regular font-inter">
              Garage
            </button>
            <button className=" mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-[13px] opacity-100 font-regular font-inter">
              Garden
            </button>
          </div>
          <div id="">
          <div id="Roomdescription" className="Roomdetails w-[460px] text-justify text-sm mt-[15px] opacity-80">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
          <div>
            <div className=" mt-[15px] opacity-80 text-sm font-bold">Terms and Conditions</div>
            <div id="Roomdescription" className="Terms  w-[460px] text-justify text-sm mt-[15px] mb-[8px] opacity-80">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
