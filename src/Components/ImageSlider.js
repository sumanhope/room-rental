import { useCallback, useEffect, useRef, useState } from "react";
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri';
import {HiOutlineArrowsExpand} from 'react-icons/hi';
import {MdOutlineFullscreenExit} from 'react-icons/md';

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const dotStyle = (slideIndex, currentIndex) => ({
  color: slideIndex === currentIndex ? 'red' : 'black',
});

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease-in-out 0.3s",
};

const slidesContainerOverflowStyles = {
  overflow: "hidden",
  height: "100%",
  object: "cover",
};

const ImageSlider = ({ slides, parentWidth }) => {
  const autoSlide = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screen, setFullScreen] = useState(true);
  // const [fullscreenImage, setFullscreenImage] = useState("")

  const goBack = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goForward = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
  });
  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: '1800px',
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  useEffect(() => {
    if (autoSlide.current) {
      clearTimeout(autoSlide.current);
    }
    autoSlide.current = setTimeout(() => {
      goForward();
    }, 4000);

    return () => clearTimeout(autoSlide.current);
  }, [goForward]);

  return (
    <div className="h-[100%] relative">
      <div>
        {/* <div >
          {fullscreenImage && <img src={fullscreenImage} alt="" />}

        </div> */}
      <div  onClick={goBack} className= 'z-10 leftArrow absolute translate-y-[25vh] text-white  text-[60px]  hover:text-customOrange cursor-pointer'><RiArrowLeftSLine /></div>
        <div  onClick={goForward} className='z-10 rightArrow absolute translate-y-[25vh] text-white text-[60px] ml-[540px] hover:text-customOrange cursor-pointer'><RiArrowRightSLine/></div>
        <div id="fullScreen Rooms" className=" absolute h-[32px] w-[32px] bg-white z-10 rounded-lg flex justify-center items-center ml-[15px] mt-[53.5vh]" onClick={ () => (setFullScreen(!screen))}> 
            {screen? <HiOutlineArrowsExpand className="text-customOrange h-[20px] w-[20px] cursor-pointer" /> : <MdOutlineFullscreenExit className="text-customOrange h-[25px] w-[25px] cursor-pointer"/>}
        </div>
      </div>
       <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()} className="">
          {slides.map((_, slideIndex) => ( 
            <div
            className=""
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
            ></div>
          ))}
        </div>
      </div> 
      <div className="flex justify-center text-black text-[20px] cursor-pointer gap-x-[5px]">
        {slides.map((_, slideIndex) => (
          <div
            style={dotStyle(slideIndex, currentIndex)}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className=""
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;