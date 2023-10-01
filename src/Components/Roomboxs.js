import React , {useState} from 'react'
import Room from "../images/room.jpg";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Roomboxs = () => {
    const [bookmark, setBookmark] = useState(true);
  return (
    <Link to="/Rooms/RoomInfo"className='grow basis-[400px] '>
    <div className=''>
       <div id="Rooms" className="Rooms mt-[6vh] h-[260px] w-[350px] rounded-md overflow-hidden">
        <div className="">
          <div className="h-[200px] w-[350px] bg-center bg-cover">
            <img src={Room} className=" h-[200px] w-[350px] " alt=''/>
          </div>
          <div className="flex justify-between px-[10px] pt-[10px]">
          <div className="text-[14px]" >Bhaktapur Durbar</div>
          <div className="" onClick={ () => setBookmark(!bookmark)}>
            {bookmark ? <BsBookmark className="fill-customOrange"/> : <BsFillBookmarkFill className=" fill-customOrange"/> }
          </div>
          </div>
        </div>
        <div className="flex justify-end text-[9px] mr-[10px] mt-[5px]">Posted Today</div>
      </div>
    </div>
    </Link>
  )
}

export default Roomboxs
