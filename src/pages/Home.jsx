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
          <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'end', marginLeft: '20%' }} className='col-span-2'>
            <div>
              <div className='text-7xl font-bold ml-9'>We</div>
              <div className='flex gap-2 items-center'>
                <div 
                  className={`w-6 h-6 rounded-full mt-7 ${currentColorClass}`}
                ></div>
                <div className='text-7xl font-bold'>{currWord}</div>
              </div>
              <p className='main-content mt-4'>
                From concept to execution, we craft experiences that captivate, communicate, and convert. Blending strategy, creativity, and innovation to build brands that leave a lasting impact.
              </p>
              <button className="bg-transparent mt-4 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded-md">
                Get Started
              </button>
            </div>
          </div>
          <div className='col-span-3'>
            <iframe 
              width="670" 
              height="415" 
              src="https://www.youtube.com/embed/9VsEAEX6C9Q?si=ZBXkMK7Cmpv-qCJz" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="ticker-container">
        <div className="ticker-content">
          <div  className="ticker-item"> <span className='lightpink'>150+</span> Happy Customers || <span className='purplle'>12+</span>  Years of Experience || <span className='blue'>15+</span>  Team Members || <span className='lightblue'>200+</span>  Project Completed</div>
        </div>
      </div>
    {/* binto scroll grid */}
      {/* <div className="grid grid-cols-6 grid-rows-3 gap-2">


<img src={Macbookpro} alt="Building View" className="w-full h-full object-cover rounded-lg" />

      <div className="col-span-2 row-span-1">
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery2} alt="Elderly Couple" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-2">
        <img src={gallery3} alt="Top View Building" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-2">
        <img src={gallery4} alt="Aerial Building" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery5} alt="Outdoor Gym" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery6} alt="Jogging Couple" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery7} alt="Yoga Group" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery8} alt="Yoga Group" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery9} alt="Yoga Group" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery10} alt="Yoga Group" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery11} alt="Yoga Group" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery12} alt="Yoga Group" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery13} alt="Yoga Group" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery14} alt="Yoga Group" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery15} alt="Yoga Group" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery16} alt="Yoga Group" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery17} alt="Yoga Group" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery18} alt="Yoga Group" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery19} alt="Yoga Group" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery20} alt="Yoga Group" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="col-span-2 row-span-1">
        <img src={gallery21} alt="Yoga Group" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div> */}
         {/* <div className="relative">
      <div className="w-full h-1 bg-blue-600 mb-1" />

      <div className="overflow-x-auto">
        <div
          className="grid grid-flow-col auto-cols-[minmax(100px,_1fr)] grid-rows-3 gap-3 px-4 py-2 w-max"
        >
          {images.map((item, index) => (
            <div
              key={index}
              className={`col-span-${item.colSpan} row-span-${item.rowSpan} `}>
              <img
                src={item.src}
                alt={`gallery-${index}`}
                className="w-auto object-cover rounded-lg shadow"
              />
            </div>
          ))}
        </div>
      </div>
    </div> */}


    <div style={{padding:'10px 70px 10px 70px'}}>
      <p className='text-xl'>We Believe</p>
<div className='text-5xl text-center' >Great brands <span className='lightpink font-semibold'>aren’t just seen;</span>  they are <span className='lightblue font-semibold'>felt, experienced, and remembered.</span>  At Mindfull, we blend <span className='purplle font-semibold'>creativity with strategy</span>  to build identities that leave a lasting impact.</div>
    </div>

{/* swiper */}
<Myswiper/>
{/* icons scroll */}
<div className="ticker-container">
        <div className="ticker-content">
          {imagesicons.map((item, index) => (
          <div  className="ticker-item"> 
             <img
             src={item.src}
             alt={`gallery-${index}`} className='w-44'
             />
          </div>
          ))}
        </div>
      </div>

{/* <div style={{width:'300vw', }}>
<img src={group} style={{height:'50vh', width:'800vw'}} alt="" />
</div> */}
{/* <div class="relative  overflow-x-auto cursor-pointer">
  <div class="mx-auto w-[99vw] h-[52vh] overflow-x-auto scrollbar">
    <div class="w-[300vw]">
      <img src={group} class="h-[50vh] w-[800vw]" alt="" />
    </div>
  </div>
</div> */}
 {/* <div className="relative overflow-x-auto cursor-pointer">
      <div
        ref={containerRef}
        className="mx-auto w-[99vw] h-[52vh] overflow-x-auto scrollbar select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: 'grab' }}
      >
        <div className="w-[300vw]">
          <img src={group} className="h-[50vh] w-[800vw] pointer-events-none" alt="" />
        </div>
      </div>
      </div> */}

{/*Industries  */}
<div className='title-home mb-24 ml-48 '>Industries we serve</div>
      <img src={Industries} alt="" style={{width:'100%', marginBottom:'40px'}} />
    </>
  );
};

export default Home;