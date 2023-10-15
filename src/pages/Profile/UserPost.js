import React , {useState} from 'react'
import Room from "../../images/room.jpg";

import { Link } from 'react-router-dom';
const UserPost = () => {
  return (
    <div id="Roomboxes" className=' grow basis-[10vw]'>
       <div id="Rooms" className="userPost Rooms mt-[0vh] h-[260px] w-[350px] rounded-md overflow-hidden">    
        <div className="">
        <Link to="/Profile/EditPost" className=''>
          <div className="h-[200px] w-[350px] bg-center bg-cover cursor-pointer">
            {/* only show first image of that post */}
            <img src={Room} className=" h-[200px] w-[350px] " alt=''/>
          </div>
          </Link>
          <div className="flex justify-between px-[10px] pt-[10px]">
          <div className="text-[14px]" >Bhaktapur Durbar</div>
         
          </div>
        </div>
        <div className="flex justify-end text-[9px] mr-[10px] mt-[5px]">Posted Today</div>
      </div>
    </div>
    
  )
}

export default UserPost