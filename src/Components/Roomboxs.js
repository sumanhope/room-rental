import React, { useState } from "react";
import Room from "../images/room.jpg";
import { Link } from "react-router-dom";
import { GetUserInfo } from "../config/user-info";
import { db } from "../config/firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const Roomboxs = ({ RoomFloor, UploadDate, RoomId }) => {
  const [bookmark, setBookmark] = useState(true);
  const data = { roomid: RoomId };
  const { uid } = GetUserInfo();
  const addToFav = async () => {
    try {
      const userDocRef = doc(db, "users", uid);

      // Get the existing array of room IDs from the user's document
      const userDoc = await getDoc(userDocRef);
      const userData = userDoc.data();
      const roomIds = userData.Favorite || [];

      // Add the new room ID to the array
      roomIds.push(data.roomid);

      // Update the user document with the updated room IDs array
      await updateDoc(userDocRef, { Favorite: roomIds });
      setBookmark(!bookmark);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div  className="Roomboxes  ml-[0px] border border-red-500">
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
