import React, { useEffect, useState } from "react";
import { BsHouseAdd } from "react-icons/bs";
import { GetUserInfo } from "../../config/user-info";
import UserPost from "./UserPost";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase-config";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export const Profile = () => {
  const { username, email, isAuth, uid } = GetUserInfo();
  const [userName, setUserName] = useState("");
  const [emailInput, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRooms, setUserRooms] = useState([]);

  useEffect(() => {
    const fetchUserRooms = async () => {
      // Reference to the user's document
      const userDocRef = doc(db, "users", uid);

      try {
        // Get the user's document
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const userRoomIds = userData.rooms || [];
          // Fetch room data for each room ID
          const roomDataPromises = userRoomIds.map(async (roomId) => {
            const roomDocRef = doc(db, "rooms", roomId);
            const roomDoc = await getDoc(roomDocRef);
            return roomDoc.data();
          });

          const userRoomData = await Promise.all(roomDataPromises);

          setUserRooms(userRoomData);
        }
      } catch (error) {
        console.error("Error fetching user rooms:", error);
      }
    };

    fetchUserRooms();
  }, []);
  const message = (
    <p className="w-[250px]">
      Use 8 or more characters, with a mix of letters, numbers and symbols
    </p>
  );
  return (
    <div id="UserProfileContainer" className="font-inter">
      <div id="UserProfileSecondContainer" className="ml-[11vw]">
        <div className="text-xl mt-[8vh]">Account Information</div>
        <form className="mt-[2vh]">
          <div id="UserProfileInfo" className="flex">
            <div className="Username font-inter">
              <div className="opacity-70 text-sm mt-[15px]">Username</div>
              <div className=" text-sm mt-[10px] h-[40px] w-[250px] border-[1px] border-black border-opacity-60 rounded-md flex">
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="pl-[6px] w-[100vw] rounded-md opacity-70 outline-none "
                  placeholder={username}
                ></input>
              </div>
            </div>
            <div id="UserInfoElement" className="email font-inter ml-[5vw] ">
              <div className="opacity-70 text-sm mt-[15px]">Email</div>
              <div className=" text-sm mt-[10px] h-[40px] w-[250px] border-[1px] border-black border-opacity-60 rounded-md flex">
                <input
                  value={emailInput}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-[6px] w-[100vw] rounded-md opacity-70 outline-none "
                  placeholder={email}
                ></input>
              </div>{" "}
            </div>
          </div>
          <div id="UserProfileInfo" className="flex mt-[2vh]">
            <div className="pass font-inter ">
              <div className="opacity-70 text-sm mt-[15px]">Password</div>
              <div className=" text-sm mt-[10px] h-[40px] w-[250px] border-[1px] border-black border-opacity-60 rounded-md flex">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-[6px] w-[100vw] rounded-md opacity-70 outline-none "
                ></input>
              </div>{" "}
            </div>
            <div
              id="UserInfoElement"
              className="ConfirmPass font-inter ml-[5vw]"
            >
              <div className="opacity-70 text-sm mt-[15px]">
                Confirm Password
              </div>
              <div className=" text-sm mt-[10px] h-[40px] w-[250px] border-[1px] border-black border-opacity-60 rounded-md flex">
                <input
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="pl-[6px] w-[100vw] rounded-md opacity-70 outline-none "
                ></input>
              </div>
            </div>
          </div>
          <div className="message mt-[4vh] text-[11px] ">{message}</div>
          <button className="h-[40px] w-[250px] bg-customOrange text-white rounded-md text-sm mt-[4vh] font-bold">
            Update
          </button>
        </form>
        <div className="posts">
          <div className="text-xl mt-[4vh] flex gap-x-[5px]">
            Posts{" "}
            <Link to="/Profile/AddPost" className="">
              <BsHouseAdd className="h-[20px] w-[20px] mt-[3px] text-customOrange cursor-pointer" />
            </Link>
          </div>
          <div
            id="editPostContainer"
            className="ownPosts mt-[4vh] mr-[10%] flex flex-wrap mb-[10vh] gap-x-[5vh] gap-y-[5vh]"
          >
            {userRooms.map((room) => (
              <UserPost RoomFloor={room.Floor} UploadDate={room.Date} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
