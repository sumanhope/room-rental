import React, { useEffect, useState } from "react";
import Room from "../../images/room.jpg";
import Sofa from "../../images/sofa.jpg";
import { AiOutlineDelete } from "react-icons/ai";
import Deletepopup from "../../Components/Deletepopup";
import { BiCheckbox, BiSolidCheckboxChecked } from "react-icons/bi";
import EditImage from "./EditImage";
import { useLocation } from "react-router-dom";
import { db } from "../../config/firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const EditPost = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const roomId = searchParams.get("roomId");
  const navigate = useNavigate();
  const [deletePost, setDeletePost] = useState(false);
  const [name, setName] = useState("");
  const [rooms, setRooms] = useState("");
  const [roomlocation, setroomLocation] = useState("");
  const [price, setPrice] = useState("");
  const [number, setNumber] = useState("");
  const [modern, setModern] = useState(false);
  const [traditional, setTraditional] = useState(false);
  const [garage, setGarage] = useState(false);
  const [garden, setGarden] = useState(false);
  const [description, setDescription] = useState("");
  const [terms, setTerms] = useState("");

  useEffect(() => {
    const fetchRoomDetails = async () => {
      const roomDocRef = doc(db, "rooms", roomId);
      try {
        const roomDoc = await getDoc(roomDocRef);
        if (roomDoc.exists()) {
          const roomDetails = roomDoc.data();
          setName(roomDetails.Floor);
          setRooms(roomDetails.TotalRoom);
          setroomLocation(roomDetails.Location);
          setPrice(roomDetails.MonthlyRent);
          setNumber(roomDetails.ContactNo);
          setModern(roomDetails.Modern);
          setTraditional(roomDetails.Traditional);
          setGarage(roomDetails.Garage);
          setGarden(roomDetails.Garden);
          setDescription(roomDetails.Description);
          setTerms(roomDetails.Conditions);
        }
      } catch (error) {
        console.error(error);
      }
    };

    // You can use the roomId value here or perform any other actions.
    fetchRoomDetails();
  }, [roomId]);

  const updateRoomDetails = async (id) => {
    try {
      const roomDoc = doc(db, "rooms", id);
      await updateDoc(roomDoc, {
        Floor: name,
        TotalRoom: rooms,
        Location: roomlocation,
        MonthlyRent: price,
        ContactNo: number,
        Modern: modern,
        Traditional: traditional,
        Garage: garage,
        Garden: garden,
        Description: description,
        Conditions: terms,
      });
      alert("Updated successfully");
      navigate("/Profile");
    } catch (error) {
      console.error(error);
    }
  };

  // put uploaded image in url and remove title
  const slides = [
    { url: Room, title: "Image1" },
    { url: Sofa, title: "Image2" },
  ];

  return (
    <div id="wholeRoomInfo" className="font-inter ">
      <Deletepopup
        className=" absolute"
        delete={deletePost}
        close={() => setDeletePost(false)}
        roomId={roomId}
      />
      <div className="flex flex-wrap justify-center mt-[10vh] gap-x-10 z-0">
        <div id="imageSliderContainer" className="h-[60vh] w-[600px]">
          <EditImage
            id="imageSlider"
            className=""
            slides={slides}
            parentWidth={600}
          ></EditImage>
          <button className="text-customOrange text-sm underline">
            Edit Image
          </button>
        </div>
        <div
          id="RoomdetailsContainer"
          className="overflow-y-scroll h-[60vh] pr-[2vw] overflow-hidden scroll-smooth w-[480px] "
        >
          <div className="flex justify-between">
            {/* word limit  */}
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="RoomName"
              placeholder="Name of the Room..."
              className="text-2xl mt-[8px] border-[2px] border-black rounded-md border-opacity-40 pl-[5px]"
              required
            />
            <button onClick={() => setDeletePost(true)}>
              <AiOutlineDelete className="h-[25px] w-[25px] text-customOrange mt-[12px] cursor-pointer" />
            </button>
          </div>

          <div className="text-sm">
            {/* limit rooms not more than 20 */}
            <div className="mt-[8px]">
              {" "}
              Rooms -{" "}
              <input
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                type="number"
                placeholder="No of Rooms..."
                className="border-[2px] border-black rounded-md border-opacity-40 pl-[5px] w-[120px] h-[30px]"
                min="0"
                max="20"
                required
              />{" "}
            </div>
            <div className="mt-[8px]">
              <input
                value={roomlocation}
                onChange={(e) => setroomLocation(e.target.value)}
                type="text"
                placeholder="Location..."
                className="border-[2px] border-black rounded-md border-opacity-40 pl-[5px] h-[30px]"
                required
              />
            </div>
            <div className="mt-[8px]">
              {" "}
              Monthly Price - NPR{" "}
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Nepali price..."
                className="border-[2px] border-black rounded-md border-opacity-40 pl-[5px] h-[30px]"
                min="0"
                step={1000}
                required
              />
            </div>
            <div className="mt-[8px]">
              Land Lord Contact -{" "}
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder="Phone number..."
                className="border-[2px] border-black rounded-md border-opacity-40 pl-[5px] h-[30px]"
                min="0"
                required
              />
            </div>
          </div>
          <div id="editTag" className="mt-[15px] flex flex-wrap w-[460px]">
            <button className=" mr-[10px] border-2 border-black border-opacity-50 rounded-full px-[12px] py-[8px] text-[13px] opacity-100 font-regular font-inter flex">
              <div className="mr-[5px]" onClick={() => setModern(!modern)}>
                {modern ? (
                  <BiSolidCheckboxChecked className="h-[20px] w-[20px] fill-customOrange" />
                ) : (
                  <BiCheckbox className="h-[20px] w-[20px] fill-customOrange" />
                )}
              </div>
              Modern
            </button>
            <button className=" mr-[10px] border-2 border-black border-opacity-50 rounded-full px-[12px] py-[8px] text-[13px] opacity-100 font-regular font-inter flex">
              <div
                className="mr-[5px]"
                onClick={() => setTraditional(!traditional)}
              >
                {traditional ? (
                  <BiSolidCheckboxChecked className="h-[20px] w-[20px] fill-customOrange" />
                ) : (
                  <BiCheckbox className="h-[20px] w-[20px] fill-customOrange" />
                )}
              </div>
              Traditional
            </button>
            <button className=" mr-[10px] border-2 border-black border-opacity-50 rounded-full px-[12px] py-[8px] text-[13px] opacity-100 font-regular font-inter flex">
              <div className="mr-[5px]" onClick={() => setGarage(!garage)}>
                {garage ? (
                  <BiSolidCheckboxChecked className="h-[20px] w-[20px] fill-customOrange" />
                ) : (
                  <BiCheckbox className="h-[20px] w-[20px] fill-customOrange" />
                )}
              </div>
              Garage
            </button>
            <button className=" mr-[10px] border-2 border-black border-opacity-50 rounded-full px-[12px] py-[8px] text-[13px] opacity-100 font-regular font-inter flex">
              <div className="mr-[5px]" onClick={() => setGarden(!garden)}>
                {garden ? (
                  <BiSolidCheckboxChecked className="h-[20px] w-[20px] fill-customOrange" />
                ) : (
                  <BiCheckbox className="h-[20px] w-[20px] fill-customOrange" />
                )}
              </div>
              Garden
            </button>
          </div>
          <div id="">
            <textarea
              id="RoomdescriptionEdit"
              value={description}
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Description..."
              className="Roomdetails w-[460px] text-justify text-sm mt-[15px] opacity-80 border-[2px] border-black rounded-md border-opacity-40 pl-[5px] h-[120px] pt-[5px]"
            />

            <div>
              <div className=" mt-[15px] opacity-80 text-sm font-bold">
                Terms and Conditions
              </div>
              <textarea
                value={terms}
                required
                type="text"
                onChange={(e) => setTerms(e.target.value)}
                id="RoomdescriptionEdit"
                placeholder="Terms..."
                className="Terms  w-[460px] text-justify text-sm mt-[15px]  opacity-80 border-[2px] border-black rounded-md border-opacity-40 pl-[5px] h-[120px] pt-[5px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[5vh] mb-[5vh] gap-x-[10vw]">
        <button
          onClick={() => updateRoomDetails(roomId)}
          className="px-[50px] py-[8px] bg-customOrange rounded-md text-white text-sm font-bold"
        >
          Update
        </button>
      </div>
    </div>
  );
};
