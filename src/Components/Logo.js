import React from "react";

const Logo = () => {
  return (
    <div id="logo" className="flex items-center">
      <svg
        id="logo icon"
        className="headerIcon h-14 mr-3 fill-customOrange"
        viewBox="0 0 24 24"
      >
        <path d="M12.6727 1.61162 20.7999 9H17.8267L12 3.70302 6 9.15757V19.0001H11V21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001 11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162ZM14 11H23V18H14V11ZM16 13V16H21V13H16ZM24 21H13V19H24V21Z"></path>
      </svg>

      <div id="logo names" className="flex flex-col font-inter">
        <div className="Logo font-bold text-xl">ROOM</div>
        <div className="Logo mt-0 font-medium text-xl">Rental</div>
      </div>
    </div>
  );
};

export default Logo;
