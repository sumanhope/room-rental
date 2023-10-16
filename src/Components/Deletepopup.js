import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { deleteDoc, doc, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useNavigate } from "react-router-dom";
import { GetUserInfo } from "../config/user-info";

const Deletepopup = (props) => {
  const navigate = useNavigate();
  const { uid } = GetUserInfo();
  const { roomId } = props;
  const postDelete = async (roomId) => {
    try {
      const roomDoc = doc(db, "rooms", roomId);
      await deleteDoc(roomDoc);
      // Remove the roomId from the user's "rooms" array
      const userDocRef = doc(db, "users", uid);
      await updateDoc(userDocRef, {
        rooms: arrayRemove(roomId),
      });
      alert("Post Deleted");
      navigate("/Profile");
    } catch (error) {
      console.error(error);
    }
  };
  if (props.delete === false) return null;
  return (
    <div
      className="overlay h-[100%] w-[100%] top-0 left-0 z-[40] fixed font-inter"
      onClick={props.close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-[115px] w-[320px] bg-white rounded-md -translate-y-[50%] -translate-x-[50%] top-[50%] left-[50%] text-center absolute z-[40]"
      >
        <div className="flex justify-end">
          <AiOutlineClose
            className="cursor-pointer flex justify-end h-[15px] w-[15px] fill-customOrange mt-[5px] mr-[5px]"
            onClick={props.close}
          />
        </div>
        <div className="">
          <div className="">Do you want to delete your post?</div>
          <div className="flex mt-[20px] justify-evenly">
            <button
              className="px-[40px] py-[5px] bg-customOrange text-white text-sm"
              onClick={() => {
                postDelete(roomId);
              }}
            >
              Yes
            </button>
            <button
              className="text-white px-[45px] py-[5px] bg-customOrange text-sm"
              onClick={props.close}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deletepopup;
