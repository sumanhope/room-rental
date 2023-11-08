import React, { useEffect, useState } from "react";
import Room from "../images/room.jpg";
import Sofa from "../images/sofa.jpg";
import Temple from "../images/temple.jpg";
import ImageSlider from "../Components/ImageSlider";
import { useLocation } from "react-router-dom";
import { db } from "../config/firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { GetUserInfo } from "../config/user-info";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
export const RoomInfo = (props) => {
  const { uid } = GetUserInfo();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const roomId = searchParams.get("roomId");
  const [roomInfo, setRoomInfo] = useState([]);
  const [isBookmarked, setBookmark] = useState(false);
  const userDocRef = doc(db, "users", uid); // Replace 'uid' with the actual user's UID

  const toggleBookmark = async () => {
    try {
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        let favoriteRooms = userData.Favorite || [];

        if (isBookmarked) {
          // If the room is bookmarked, remove it from the favorite list
          favoriteRooms = favoriteRooms.filter((room) => room !== roomId);
          console.log("Found");

          setBookmark(false);
        } else {
          // If the room is not bookmarked, add it to the favorite list
          favoriteRooms.push(roomId);
          console.log("Not Found");

          setBookmark(true);
        }

        // Update the user document with the modified favoriteRooms array
        await updateDoc(userDocRef, {
          Favorite: favoriteRooms,
        });

        // The favorite status has been toggled successfully
        console.log("Bookmark status toggled successfully.");
      } else {
        console.error("User document not found");
      }
    } catch (error) {
      console.error("Error toggling bookmark status:", error);
    }
  };

  useEffect(() => {
    const fetchRoomDetails = async () => {
      const roomDocRef = doc(db, "rooms", roomId);
      try {
        const roomDoc = await getDoc(roomDocRef);
        if (roomDoc.exists()) {
          const roomDetails = roomDoc.data();
          setRoomInfo(roomDetails);
          // Now, fetch the user document and check for the room in the Favorite array

          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            const favoriteRooms = userData.Favorite || [];

            // Check if the roomId exists in the favoriteRooms array
            const isBookmarked = favoriteRooms.includes(roomId);

            // Set the bookmark state based on the result
            setBookmark(isBookmarked);
          } else {
            console.error("User document not found");
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    // You can use the roomId value here or perform any other actions.
    fetchRoomDetails();
  }, []);
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
            bookmarked={isBookmarked}
          ></ImageSlider>
          {/* <img className="h-[60vh] w-[45vw]" src={Room} alt=""></img> */}
        </div>
        <div
          id="RoomdetailsContainer"
          className="overflow-y-scroll h-[60vh] pr-[2vw] overflow-hidden scroll-smooth "
        >
          {/* <div id="Roomdetails" className="text-2xl mt-[8px] ">
            {roomInfo.Floor}
            <div
              className="  h-[32px] w-[32px] bg-white z-10 rounded-lg flex justify-center items-center ml-[550px] mt-[53.5vh] cursor-pointer"
              onClick={() => console.log(isBookmarked)}
            >
              {isBookmarked ? (
                <BsFillBookmarkFill className=" fill-customOrange" />
              ) : (
                <BsBookmark className="fill-customOrange" />
              )}
            </div>
          </div> */}
          <div
            id="Roomdetails"
            className="text-2xl mt-[8px] flex items-center justify-between"
          >
            <span className="mr-2">{roomInfo.Floor}</span>
            <div onClick={() => toggleBookmark()}>
              {isBookmarked ? (
                <BsFillBookmarkFill className="fill-customOrange mt-[2px] h-[20px] cursor-pointer" />
              ) : (
                <BsBookmark className="fill-customOrange mt-[2px] h-[20px] cursor-pointer" />
              )}
            </div>
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
