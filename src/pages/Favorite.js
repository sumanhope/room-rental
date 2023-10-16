import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { GetUserInfo } from "../config/user-info";
import { AiOutlineSearch } from "react-icons/ai";
import { RiEqualizerLine } from "react-icons/ri";
import Roomboxs from "../Components/Roomboxs";
import Filterpopup from "../Components/Filterpopup";
import { db } from "../config/firebase-config";
import { doc, getDoc, collection } from "firebase/firestore";

export const Favorite = () => {
  const { username, isAuth, uid } = GetUserInfo();
  const [showFilter, setShowFilter] = useState(false);
  const displayname = isAuth ? username : null;
  const [favList, setFavList] = useState([]);

  const fetchFavList = async () => {
    // Reference to the user's document
    const userDocRef = doc(db, "users", uid);

    try {
      // Get the user's document
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const userRoomIds = userData.Favorite || [];
        // Fetch room data for each room ID
        const roomDataPromises = userRoomIds.map(async (roomId) => {
          const roomDocRef = doc(db, "rooms", roomId);
          const roomDoc = await getDoc(roomDocRef);
          const roomData = roomDoc.data();
          return { id: roomId, ...roomData };
        });
        const userRoomData = await Promise.all(roomDataPromises);
        setFavList(userRoomData);
      }
    } catch (error) {
      console.error("Error fetching user rooms:", error);
    }
  };
  useEffect(() => {
    loginCheck();
  });

  const loginCheck = () => {
    if (displayname == null) {
      const element = document.querySelector("#noLogin");
      element.classList.add("favNotLogin");
      element.innerHTML = "Sign in in to use this feature 📖";
    } else {
      document.querySelector(".favLogin").style.display = "block";
      fetchFavList();
    }
  };

  return (
    <div className="font-inter">
      <div id="noLogin" className=""></div>

      <div className="favLogin hidden">
        <div id="wholeRoom" className="">
          <div id="searchSectionContainer" className="ml-[8vw] ">
            <Filterpopup show={showFilter} close={() => setShowFilter(false)} />
            <div
              id="searchSection"
              className=" flex font-inter mt-[6vh]  w-[350px]"
            >
              <div
                id="search"
                className="flex  justify-around items-center border-2 border-black border-opacity-50 rounded-md text-sm "
              >
                <AiOutlineSearch className=" h-[25px] w-[25px] fill-customOrange ml-[8px] pl-[0px] cursor-pointer" />
                <input
                  className="outline-none ml-[8px]"
                  placeholder="Search..."
                ></input>
                <RiEqualizerLine
                  id="hiddenFilter"
                  className="h-[20px] w-[20px] fill-customOrange absolute ml-[180px] z-[1] cursor-pointer hidden"
                  onClick={() => setShowFilter(true)}
                />
              </div>
              <div id="filter" className="w-[0px] flex items-center ml-[15px]">
                <button
                  className="border-2 border-black border-opacity-50 pr-[40px] py-[8px] rounded-md pl-[15px]"
                  onClick={() => setShowFilter(true)}
                >
                  Filter
                </button>
                <RiEqualizerLine className="h-[20px] w-[20px] fill-customOrange absolute ml-[60px] z-[-1]" />
              </div>
            </div>
          </div>
          <div id="roomBoxesContainer" className="ml-[0vw] px-[5%] pb-[5vh]">
            <div className="flex flex-wrap  justify-center ">
              {favList.map((room) => (
                <Roomboxs
                  RoomFloor={room.Floor}
                  UploadDate={room.Date}
                  RoomId={room.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
