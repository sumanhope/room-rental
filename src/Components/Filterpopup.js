import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";

const Filterpopup = (props) => {
  const [noRooms, setNoRooms] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [modern, setModern] = useState(false);
  const [traditional, setTraditional] = useState(false);
  const [garden, setGarden] = useState(false);
  const [garage, setGarage] = useState(false);

  const budgetHandler = (e) => {
    let lowbudget = e.target.value
    let highbudget = Number(lowbudget)

      setMinBudget(lowbudget)
      setMaxBudget(highbudget + 1000);
  }
   
  const mouseHover = () => {
    document.getElementById("submit").classList.add("Rooms");
  }

  const mouseOut = () => {
    document.getElementById("submit").classList.remove("Rooms");
  }

  if (props.show === false) return null;

  return (
    <div
      onClick={props.close}
      className="overlay h-[100%] w-[100%] z-[40] fixed top-0 left-0 font-inter flex items-center justify-center"
    >
      <div
      className=""
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
       
        <div
          id="RoomsFilter"
          className=" h-[330px] w-[460px] bg-white rounded-md "
        >
          <div className="flex justify-end">
            <AiOutlineClose
              className="cursor-pointer flex justify-end h-[15px] w-[15px] fill-customOrange mt-[10px] mr-[10px]"
              onClick={props.close}
            />
          </div>
          <div className="ml-[30px]">
            <div className="text-lg">Available Filters</div>
            <form className=" font-inter flex flex-wrap gap-x-10  gap-y-2 mt-[2px]">
              <div className="inputOutline">
                <input placeholder="Location..." className="inputInnerline" />
              </div>
              <div className=" inputOutline">
                <input
                  placeholder="No of Rooms..."
                  className="inputInnerline"
                  type="number"
                  step="1"
                  min="0"
                  onChange={ (e) => setNoRooms(e.target.value)}
                  value={noRooms}
                />
              </div>
              <div className="inputOutline">
                <input
                  placeholder="Min Budget..."
                  className="inputInnerline"
                  type="number"
                  onChange={ (e) => budgetHandler(e)}
                  step="1000"
                  min="1000"
                  value={minBudget}
                />
              </div>
              <div className="inputOutline">
                <input
                  placeholder="Max Budget..."
                  className="inputInnerline"  
                  type="number"
                  onChange={ (e) => setMaxBudget(e.target.value)}
                  step="1000"
                  min="1000"
                  value={maxBudget}
                />
              </div>
              <div className="flex flex-wrap gap-x-10">
                <div className="flex mt-[6px]  basis-[180px]">
                  <div
                    className="mt-[6px] cursor-pointer "
                    onClick={() => setModern(!modern)}
                  >
                    {modern ? (
                      <BsCheck2 className="h-[25px] w-[25px] rounded-md border border-black" />
                    ) : (
                      <div className="h-[25px] w-[25px] rounded-md border border-black" />
                    )}
                  </div>
                  <div className="flex mt-[8px] ml-[6px]">Modern</div>
                </div>
                <div className="flex mt-[6px] basis-[180px]">
                  <div
                    className="mt-[6px] cursor-pointer"
                    onClick={() => setTraditional(!traditional)}
                  >
                    {traditional ? (
                      <BsCheck2 className="h-[25px] w-[25px] rounded-md border border-black" />
                    ) : (
                      <div className="h-[25px] w-[25px] rounded-md border border-black" />
                    )}
                  </div>
                  <div className="flex mt-[8px] ml-[6px]">Traditional</div>
                </div>
                <div className="flex mt-[10px]  basis-[180px]">
                  <div
                    className="mt-[6px] cursor-pointer"
                    onClick={() => setGarden(!garden)}
                  >
                    {garden ? (
                      <BsCheck2 className="h-[25px] w-[25px] rounded-md border border-black" />
                    ) : (
                      <div className="h-[25px] w-[25px] rounded-md border border-black" />
                    )}
                  </div>
                  <div className="flex mt-[8px] ml-[6px]">Garden</div>
                </div>
                <div className="flex mt-[10px]  basis-[180px]">
                  <div
                    className="mt-[6px] cursor-pointer"
                    onClick={() => setGarage(!garage)}
                  >
                    {garage ? (
                      <BsCheck2 className="h-[25px] w-[25px] rounded-md border border-black" />
                    ) : (
                      <div className="h-[25px] w-[25px] rounded-md border border-black" />
                    )}
                  </div>
                  <div className="flex mt-[8px] ml-[6px]">Garage</div>
                </div>

              </div>
              <button id="submit" onMouseOut={mouseOut} onMouseOver={mouseHover} className="py-2 px-5 bg-customOrange text-white rounded-md mt-[10px] duration-500 cursor-pointer">Submit</button>
            </form>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Filterpopup;
