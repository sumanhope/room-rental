import React from "react";
import Room from "../../images/room.jpg";

import { Link } from "react-router-dom";
const UserPost = ({ RoomFloor, UploadDate, RoomId }) => {
  const data = { roomid: RoomId };
  return (
    <div id="Roomboxes" className=" grow basis-[10vw]">
      <div
        id="Rooms"
        className="userPost Rooms mt-[0vh] h-[260px] w-[350px] rounded-md overflow-hidden"
      >
        <div className="">
          <Link to={`/Profile/EditPost?roomId=${data.roomid}`} className="">
            <div className="h-[200px] w-[350px] bg-center bg-cover cursor-pointer">
              {/* only show first image of that post */}
              <img src={Room} className=" h-[200px] w-[350px] " alt="" />
            </div>
          </Link>
          <div className="flex justify-between px-[10px] pt-[10px]">
            <div className="text-[14px]">{RoomFloor}</div>
          </div>
        </div>
        <div className="flex justify-end text-[9px] mr-[10px] mt-[5px]">
          Posted on {UploadDate}
        </div>
      </div>
    </div>
  );
};

export default UserPost;
