import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiEqualizerLine } from "react-icons/ri";
import Roomboxs from "../Components/Roomboxs";
import Filterpopup from "../Components/Filterpopup";
import { db } from "../config/firebase-config";
import { getDocs, collection } from "firebase/firestore";

export const Rooms = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [roomList, setRoomList] = useState([]);
  const roomCollectionRef = collection(db, "rooms");
  useEffect(() => {
    const getRoomList = async () => {
      // Reading the Room Data
      try {
        const data = await getDocs(roomCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setRoomList(filteredData);
        //console.log(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getRoomList();
  }, [roomCollectionRef]);

  return (
    <div id="Header" className="font-inter">
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
          <div id="buttonFilters" className="mt-[4vh]">
            <button className=" mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-sm opacity-100 font-regular font-inter">
              Modern
            </button>
            <button className=" mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-sm opacity-100 font-regular font-inter">
              Traditional
            </button>
            <button className=" mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-sm opacity-100 font-regular font-inter">
              Garage
            </button>
            <button className=" mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-sm opacity-100 font-regular font-inter">
              Garden
            </button>
          </div>
        </div>

        <div id="roomBoxesContainer" className="ml-[0vw] px-[5%] pb-[5vh]">
          <div className="flex flex-wrap  justify-center ">
            {/* <Roomboxs RoomFloor={"Ground Floor"} />
            <Roomboxs />
            <Roomboxs />
            <Roomboxs />
            <Roomboxs />
            <Roomboxs /> */}
            {roomList.map((room) => (
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
  );
};
