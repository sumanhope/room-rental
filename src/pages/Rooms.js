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
  const [filters, setFilters] = useState({
    Modern: false,
    Traditional: false,
    Garage: false,
    Garden: false,
  });

  useEffect(() => {
    const getRoomList = async (filters) => {
      try {
        const data = await getDocs(roomCollectionRef);
        const filteredData = data.docs
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          .filter((room) => {
            // Check if the room matches all selected filters
            return Object.keys(filters).every((filterKey) => {
              return !filters[filterKey] || room[filterKey];
            });
          });

        setRoomList(filteredData);
        console.log(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    getRoomList(filters);
  }, [filters]);

  const handleFilterButtonClick = (filter) => {
    if (filter === "All") {
      // Set all filters to false
      setFilters({
        Modern: false,
        Traditional: false,
        Garage: false,
        Garden: false,
      });
    } else {
      // Toggle the selected filter
      setFilters({
        ...filters,
        [filter]: !filters[filter],
      });
    }
  };

  return (
    <div id="Header" className="font-inter">
      <div id="" className="wholeRoom">
        <div id="" className="searchSectionContainer ml-[8vw] ">
          <Filterpopup show={showFilter} close={() => setShowFilter(false)} />
          <div
            id=""
            className="searchSection flex font-inter mt-[6vh]  w-[350px]"
          >
            <div
              id=""
              className="search flex  justify-around items-center border-2 border-black border-opacity-50 rounded-md text-sm "
            >
              <AiOutlineSearch className=" h-[25px] w-[25px] fill-customOrange ml-[8px] pl-[0px] cursor-pointer" />
              <input
                className="outline-none ml-[8px]"
                placeholder="Search..."
              ></input>
              <RiEqualizerLine
                className="hiddenFilter h-[20px] w-[20px] fill-customOrange absolute ml-[180px] z-[1] cursor-pointer hidden"
                onClick={() => setShowFilter(true)}
              />
            </div>
            <div className="filter w-[0px] flex items-center ml-[15px]">
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
            <button
              onClick={() => handleFilterButtonClick("All")}
              className="mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-sm opacity-100 font-regular font-inter"
              style={{
                backgroundColor: !Object.values(filters).includes(true)
                  ? "#F9482B"
                  : "",
                color: !Object.values(filters).includes(true) ? "white" : "",
              }}
            >
              All
            </button>
            <button
              onClick={() => handleFilterButtonClick("Modern")}
              className={`mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-sm opacity-100 font-regular font-inter ${
                filters.Modern ? "active" : ""
              }`}
              style={{
                backgroundColor: filters.Modern ? "#F9482B" : "",
                color: filters.Modern ? "white" : "",
              }}
            >
              Modern
            </button>
            <button
              onClick={() => handleFilterButtonClick("Traditional")}
              className={`mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-sm opacity-100 font-regular font-inter ${
                filters.Traditional ? "active" : ""
              }`}
              style={{
                backgroundColor: filters.Traditional ? "#F9482B" : "",
                color: filters.Traditional ? "white" : "",
              }}
            >
              Traditional
            </button>
            <button
              onClick={() => handleFilterButtonClick("Garage")}
              className={`mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-sm opacity-100 font-regular font-inter ${
                filters.Garage ? "active" : ""
              }`}
              style={{
                backgroundColor: filters.Garage ? "#F9482B" : "",
                color: filters.Garage ? "white" : "",
              }}
            >
              Garage
            </button>
            <button
              onClick={() => handleFilterButtonClick("Garden")}
              className={`mr-[18px] border-2 border-black border-opacity-50 rounded-full px-[20px] py-[8px] text-sm opacity-100 font-regular font-inter ${
                filters.Garden ? "active" : ""
              }`}
              style={{
                backgroundColor: filters.Garden ? "#F9482B" : "",
                color: filters.Garden ? "white" : "",
              }}
            >
              Garden
            </button>
          </div>
        </div>

        <div id="" className="roomBoxesContainer ml-[40px] px-[5%] pb-[5vh]">
          <div
            id=""
            className="roomBoxesinnerContainer flex flex-wrap  justify-start gap-x-[8%]  "
          >
            {roomList.map((room) => (
              <Roomboxs
                key={room.id}
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
