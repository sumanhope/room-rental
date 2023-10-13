import React, { useState } from "react";
import Room from "../../images/room.jpg";
import Sofa from "../../images/sofa.jpg";
import { AiOutlineDelete } from "react-icons/ai";
import Deletepopup from "../../Components/Deletepopup";
import { BiCheckbox, BiSolidCheckboxChecked } from "react-icons/bi";
import EditImage from "./EditImage";

export const EditPost = () => {
  const [deletePost, setDeletePost] = useState(false);
  const [name, setName] = useState("");
  const [rooms, setRooms] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [number, setNumber] = useState("");
  const [modern, setModern] = useState(false);
  const [traditional, setTraditional] = useState(false);
  const [garage, setGarage] = useState(false);
  const [garden, setGarden] = useState(false);
  const [description, setDescription] = useState("");
  const [terms, setTerms] = useState("");

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
          <div  className="flex justify-between">
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
        <button className="px-[50px] py-[8px] bg-customOrange rounded-md text-white text-sm font-bold">
          Update
        </button>
      </div>
    </div>
  );
};
