import React, { useEffect, useState } from "react";
import Room from "../images/room.jpg";
import { Link, useNavigate } from "react-router-dom";
import { GetUserInfo } from "../config/user-info";

const Roomboxs = ({ RoomFloor, UploadDate, RoomId }) => {
  const data = { roomid: RoomId };
  const { isAuth } = GetUserInfo();
  const navigate = useNavigate();

  if (isAuth === null) {
    // If isAuth is false, navigate to a "not authorized" page or any other desired page
    navigate("/");
    // You can also return null or an error message here, but navigation will happen regardless
  }
  return (
    <div className="Roomboxes  ml-[0px] ">
      <div
        id="Rooms"
        className="Rooms mt-[6vh] h-[260px] w-[350px] rounded-md overflow-hidden"
      >
        <div className="">
          <Link to={`/Rooms/RoomInfo?roomId=${data.roomid}`} className="">
            <div className="h-[200px] w-[350px] bg-center bg-cover cursor-pointer">
              <img src={Room} className=" h-[200px] w-[350px] " alt="" />
            </div>
          </Link>
          <div className="flex justify-between px-[10px] pt-[10px]">
            <div className="text-[14px]">{RoomFloor}</div>
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
