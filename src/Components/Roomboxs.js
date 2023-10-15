import React, { useState } from "react";
import Room from "../images/room.jpg";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Roomboxs = ({ RoomFloor, UploadDate }) => {
  const [bookmark, setBookmark] = useState(true);
  return (
    <div id="Roomboxes" className="grow basis-[10vw] ml-[40px]">
      <div
        id="Rooms"
        className="Rooms mt-[6vh] h-[260px] w-[350px] rounded-md overflow-hidden"
      >
        <div className="">
          <Link to="/Rooms/RoomInfo" className="">
            <div className="h-[200px] w-[350px] bg-center bg-cover cursor-pointer">
              <img src={Room} className=" h-[200px] w-[350px] " alt="" />
            </div>
          </Link>
          <div className="flex justify-between px-[10px] pt-[10px]">
            <div className="text-[14px]">{RoomFloor}</div>
            <div
              className="cursor-pointer"
              onClick={() => setBookmark(!bookmark)}
            >
              {bookmark ? (
                <BsBookmark className="fill-customOrange" />
              ) : (
                <BsFillBookmarkFill className=" fill-customOrange" />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end text-[9px] mr-[10px] mt-[5px]">
          {UploadDate}
        </div>
      </div>
    </div>
  );
};

export default Roomboxs;
