import React, { useEffect, useState } from "react";
import Room from "../images/room.jpg";
import Sofa from "../images/sofa.jpg";
import Temple from "../images/temple.jpg";
import ImageSlider from "../Components/ImageSlider";
import { useLocation } from "react-router-dom";
import { db } from "../config/firebase-config";
import { doc, getDoc } from "firebase/firestore";

export const RoomInfo = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const roomId = searchParams.get("roomId");
  const [roomInfo, setRoomInfo] = useState([]);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      const roomDocRef = doc(db, "rooms", roomId);
      try {
        const roomDoc = await getDoc(roomDocRef);
        if (roomDoc.exists()) {
          const roomDetails = roomDoc.data();
          setRoomInfo(roomDetails);
        }
      } catch (error) {
        console.error(error);
      }
    };

    // You can use the roomId value here or perform any other actions.
    fetchRoomDetails();
  }, [roomId]);
  const slides = [
    { url: Room, title: "Image1" },
    { url: Sofa, title: "Image2" },
    { url: Temple, title: "Image2" },
  ];

  return (
    <div id="wholeRoomInfo" className="font-inter ">
      <div className="flex flex-wrap justify-center mt-[13vh] gap-x-10 z-0">
        <div id="imageSliderContainer" className="h-[60vh] w-[600px]">
          <ImageSlider
            id="imageSlider"
            className=""
            slides={slides}
            parentWidth={600}
          ></ImageSlider>
          {/* <img className="h-[60vh] w-[45vw]" src={Room} alt=""></img> */}
        </div>
        <div
          id="RoomdetailsContainer"
          className="overflow-y-scroll h-[60vh] pr-[2vw] overflow-hidden scroll-smooth "
        >
          <div id="Roomdetails" className="text-2xl mt-[8px] ">
            {roomInfo.Floor}
          </div>
          <div className="text-sm">
            <div className="mt-[8px]"> Rooms - {roomInfo.TotalRoom} </div>
            <div className="mt-[8px]"> {roomInfo.Location}</div>
            <div className="mt-[8px]">
              {" "}
              Monthly Price - NPR {roomInfo.MonthlyRent}
            </div>
            <div className="mt-[8px]">
              Land Lord Contact - {roomInfo.ContactNo}
            </div>
          </div>
          <div id="editTag" className="mt-[15px] flex flex-wrap w-[460px]">
            <button
              style={{
                backgroundColor: roomInfo.Modern ? "#F9482B" : "",
                color: roomInfo.Modern ? "white" : "",
              }}
              className=" mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-[13px] opacity-100 font-regular font-inter"
            >
              Modern
            </button>

            <button
              style={{
                backgroundColor: roomInfo.Traditional ? "#F9482B" : "",
                color: roomInfo.Traditional ? "white" : "",
              }}
              className=" mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-[13px] opacity-100 font-regular font-inter"
            >
              Traditional
            </button>
            <button
              style={{
                backgroundColor: roomInfo.Garage ? "#F9482B" : "",
                color: roomInfo.Garage ? "white" : "",
              }}
              className=" mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-[13px] opacity-100 font-regular font-inter"
            >
              Garage
            </button>
            <button
              style={{
                backgroundColor: roomInfo.Garden ? "#F9482B" : "",
                color: roomInfo.Garden ? "white" : "",
              }}
              className=" mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-[13px] opacity-100 font-regular font-inter"
            >
              Garden
            </button>
          </div>
          <div id="">
            <div
              id="Roomdescription"
              className="Roomdetails w-[460px] text-justify text-sm mt-[15px] opacity-80"
            >
              {roomInfo.Description}
            </div>
            <div>
              <div className=" mt-[15px] opacity-80 text-sm font-bold">
                Terms and Conditions
              </div>
              <div
                id="Roomdescription"
                className="Terms  w-[460px] text-justify text-sm mt-[15px] mb-[8px] opacity-80"
              >
                {roomInfo.Conditions}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
