import React, { useEffect, useRef, useState } from 'react';
import "./../assets/css/home.css";
import { arrownext, arrowpre, bwswiper, bwswiper1, bwswiper2, bwswiper3, bwswiper4, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery2, gallery20, gallery21, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, group, Industries, Macbookpro, swiper1, swiper2, swiper3, swiper4, swiper5 } from '../assets/img/home';
import { icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19, icon20, icon21, icon22, icon23, icon24, icon25, } from '../assets/img/logos';
import Myswiper from '../components/Myswiper';
const wordArray = ['elevate', 'design', 'impact', 'think'];
const wordColorMap = {
  elevate: 'bg-lightpink',
  think: 'bg-lightblue',
  design: 'bg-purplle',
  impact: 'bg-blue',
};

const Home = () => {
  const [currWord, setCurrWord] = useState(wordArray[0]);
  const index = useRef(0);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const desktopContainerRef = useRef(null);
    const mobileContainerRef = useRef(null);
    

    // Common handler for both desktop and mobile
    // const handleDragStart = (e, ref) => {
    //     setIsDragging(true);
    //     const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    //     setStartX(clientX - ref.current.offsetLeft);
    //     setScrollLeft(ref.current.scrollLeft);
    //     ref.current.style.cursor = 'grabbing';
    // };

    // const handleDragMove = (e, ref) => {
    //     if (!isDragging) return;
        
    //     const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    //     const x = clientX - ref.current.offsetLeft;
    //     const walk = (x - startX) * 3;
    //     ref.current.scrollLeft = scrollLeft - walk;
    // };

    // const handleDragEnd = (ref) => {
    //     setIsDragging(false);
    //     ref.current.style.cursor = 'grab';
    // };

    const handleDragStart = (e, ref) => {
      setIsDragging(true);
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      // setStartX(clientX - ref.current.offsetLeft);
      setStartX(clientX - desktopContainerRef.current.offsetLeft);
      // setScrollLeft(ref.current.scrollLeft);
      setScrollLeft(desktopContainerRef.current.scrollLeft);
      // ref.current.style.cursor = 'grabbing';
      desktopContainerRef.current.style.cursor = 'grabbing';
  };

  const handleDragMove = (e, ref) => {
      if (!isDragging) return;
      
      // const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      // const x = clientX - ref.current.offsetLeft;
      // const walk = (x - startX) * 3; 

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const x = clientX - desktopContainerRef.current.offsetLeft;
      const walk = (x - startX) * 3;
      // Increased multiplier for better scroll
      // ref.current.scrollLeft = scrollLeft - walk;
      desktopContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = (ref) => {
      setIsDragging(false);
      // ref.current.style.cursor = 'grab';
      desktopContainerRef.current.style.cursor = 'grab';
  };



  useEffect(() => {
    const interval = setInterval(() => {
      index.current = (index.current + 1) % wordArray.length;
      setCurrWord(wordArray[index.current]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

 const currentColorClass = wordColorMap[currWord];
 const handleMouseDown = (e) => {
  setIsDragging(true);
  setStartX(e.pageX - containerRef.current.offsetLeft);
  setScrollLeft(containerRef.current.scrollLeft);
  containerRef.current.style.cursor = 'grabbing';
};

const handleMouseLeave = () => {
  if (isDragging) {
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab';
  }
};

const handleMouseUp = () => {
  setIsDragging(false);
  containerRef.current.style.cursor = 'grab';
};

const handleMouseMove = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - containerRef.current.offsetLeft;
  const walk = (x - startX) * 2; // Adjust multiplier for faster/slower scrolling
  containerRef.current.scrollLeft = scrollLeft - walk;
};
const imagesicons = [
  {src:icon1},
  {src:icon2},
  {src:icon3},
  {src:icon4},
  {src:icon5},
  {src:icon6},
  {src:icon7},
  {src:icon8},
  {src:icon9},
  {src:icon10},
  {src:icon11},
  {src:icon12},
  {src:icon13},
  {src:icon14},
  {src:icon15},
  {src:icon16},
  {src:icon17},
  {src:icon18},
  {src:icon19},
  {src:icon20},
  {src:icon21},
  {src:icon22},
  {src:icon23},
  {src:icon24},
  {src:icon25},
]

  return (
    <>
      <div className='mainhero'>
        <div className='hero-sub-content'>
        <div  className=' col-span-3 ml-32'>
            <div>
              <div className='text-7xl font-bold md:ml-9 sm:mt-40'>We</div>
              <div className='flex gap-2 items-center'>
                <div 
                  className={`w-6 h-6 rounded-full mt-7 ${currentColorClass}`}
                ></div>
                <div className='text-7xl font-bold'>{currWord}</div>
              </div>
              <p className='mt-4 font-extralight text-gray-200 text-lg w-[90%]' style={{fontFamily:'Spartan'}} >
                From concept to execution, we craft experiences that captivate, communicate, and convert. Blending strategy, creativity, and innovation to build brands that leave a lasting impact.
              </p>
              <button  className="bg-transparent mt-4 hover:bg-blue-500 text-white  hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded-xl" style={{fontFamily:'Sora'}}>
                Get Started
              </button>
            </div>
          </div>
 <div className='col-span-5'>
                    {/*  <iframe 
              width="670" 
              height="415" 
              src="https://www.youtube.com/embed/9VsEAEX6C9Q?si=ZBXkMK7Cmpv-qCJz" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe> */}
          </div> 
        </div>
      </div>

      <div className="ticker-container-text">
        <div className="ticker-content">
          <div  className="ticker-item"> <span className='lightpink'>150+</span> Happy Customers || <span className='purplle'>12+</span>  Years of Experience || <span className='blue'>15+</span>  Team Members || <span className='lightblue'>200+</span>  Project Completed</div>
        </div>
      </div>

    <div style={{padding:'40px 50px 0px 50px'}}>
      <p className='text-2xl text-gray-400 font-thin py-3 ml-14' style={{fontFamily:'Spartan'}}>We Believe</p>
<div className='text-5xl text-center ' >Great brands <span className='lightpink font-semibold'>aren’t just seen;</span>  they are <span className='lightblue font-semibold'>felt, experienced, and remembered.</span>  At Mindfull, we blend <span className='purplle font-semibold'>creativity with strategy</span>  to build identities that leave a lasting impact.</div>
    </div>

{/* swiper */}
<Myswiper/>
<div>

{/* </div> */}
{/* icons scroll */}
<div className="ticker-container">
        <div className="ticker-content">
          {imagesicons.map((item, index) => (
          <div  className="ticker-item"> 
             <img
             src={item.src}
             alt={`gallery-${index}`} className='w-72 px-14'
             />
          </div>
          ))}
        </div>
      </div>

{/* 
                <div className="relative">
                    <div
                        ref={desktopContainerRef}
                        className="mx-auto w-[99vw] h-[40vh] sm:h-[52vh] overflow-x-auto scrollbar select-none"
                        onMouseDown={(e) => handleDragStart(e, desktopContainerRef)}
                        onMouseLeave={() => handleDragEnd(desktopContainerRef)}
                        onMouseUp={() => handleDragEnd(desktopContainerRef)}
                        onMouseMove={(e) => handleDragMove(e, desktopContainerRef)}
                        style={{ cursor: 'grab' }}
                    >
                        <div className="w-[320vw]">
                            <img src={group} className="h-[38vh] sm:h-[50vh] w-[390vw] pointer-events-none object-cover" alt="" />
                        </div>
                    </div>
                </div> */}
            <div className="relative w-full">
                <div
                    ref={desktopContainerRef}
                    className="w-full h-[40vh] sm:h-[50vh] md:h-[45vh] lg:h-[55vh] overflow-x-auto scrollbar select-none"
                    onMouseDown={handleDragStart}
                    onMouseLeave={handleDragEnd}
                    onMouseUp={handleDragEnd}
                    onMouseMove={handleDragMove}
                    onTouchStart={handleDragStart}
                    onTouchEnd={handleDragEnd}
                    onTouchMove={handleDragMove}
                    style={{ cursor: 'grab' }}
                >
                    <div className="w-max min-w-full">
                        <img 
                            src={group} 
                            className="h-[53vh] w-auto max-w-none object-contain object-left-top pointer-events-none"
                            alt="Our work" 
                        />
                    </div>
                </div>
            </div>

{/*Industries  */}
<div className='title-home my-4' style={{fontFamily:'Spartan'}}>Industries we serve</div>
      <img src={Industries}className='pb-10'  alt="" style={{width:'100%'}} />
      </div>
    </>
  );
};

export default Home;