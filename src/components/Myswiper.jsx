import React, { useState } from 'react'
import { arrownext, arrowpre, bwswiper, bwswiper1, bwswiper2, bwswiper3, bwswiper4, swiper1, swiper2, swiper3, swiper4, swiper5 } from '../assets/img/home'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import "swiper/css";
import "./../assets/css/home.css"

const Myswiper = () => {
    const [activeIndex, setActiveIndex] = useState(0)
const swiperimages = [
  { src: swiper1, bwsrc: bwswiper },
  { src: swiper2, bwsrc: bwswiper1 },
  { src: swiper3, bwsrc: bwswiper2 },
  { src: swiper4, bwsrc: bwswiper3 },
  { src: swiper5, bwsrc: bwswiper4 },
]

  return <>
  {/* <div className="swiper-slide-home">
  <div className='title-home ml-48 '>Our Services</div>
 
<div className="container-sm">
<div className="swiper-button-prev">
        <img src={arrowpre} width="27" style={{position:'absolute'}} alt="" />
        </div>
        <div className="swiper-button-next">
        <img src={arrownext} width="27" style={{position:'absolute'}} alt="" />
        </div>
<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={2}
        coverflowEffect={{
          rotate: 2, // Reduced rotation for better focus
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false, 
        }}
        // pagination={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[EffectCoverflow,  Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}>
         {
    swiperimages.map(item =>  <>
        <SwiperSlide key={item.id}   style={{ 
            width: '24%', 
            border: 'none', 
            boxShadow: 'none', 
            backgroundColor: 'transparent',
            padding: '15px'
          }}>
          <img src={item.src} 
          style={{
            boxShadow: 'none', 
            backgroundColor: 'transparent',
            filter: 'none'
            }}
              />
       </SwiperSlide>
    </>
    )}
    </Swiper>

 </div>
 </div> */}
 <div className="swiper-slide-home">
            <div className='title-home ml-24' style={{fontFamily:'Spartan'}}>Our Services</div>
            
            <div className="container-sm">
                <div className="swiper-button-prev">
                    <img src={arrowpre} width="27" style={{position:'absolute'}} alt="" />
                </div>
                <div className="swiper-button-next">
                    <img src={arrownext} width="27" style={{position:'absolute'}} alt="" />
                </div>
                
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide={2}
                    spaceBetween={40}
                    coverflowEffect={{
                        rotate: 2,
                        stretch: 0,
                        depth: 300,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    modules={[EffectCoverflow, Navigation]}
                    className="mySwiper"
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                    {swiperimages.map((item, index) => (
                        <SwiperSlide key={index} style={{ 
                            width: '24%', 
                            border: 'none', 
                            boxShadow: 'none', 
                            backgroundColor: 'transparent',
                            padding: '15px'
                        }}>
                            <div className="slide-content">
                                <img 
                                    src={activeIndex === index ? item.src : item.bwsrc} 
                                    className={`swiper-image ${activeIndex === index ? 'active' : 'inactive'}`}
                                    style={{
                                        boxShadow: 'none', 
                                        backgroundColor: 'transparent',
                                        width: '100%',
                                        display: 'block',
                                        transition: 'all 0.3s ease',
                                        transform: activeIndex === index ? 'scale(1.2)' : 'scale(0.8)',
                                        filter: activeIndex === index ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(0.7)'
                                    }}
                                />
                                {activeIndex === index && (
                                    <div className="slide-title">
                                        {item.title}
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
  </>
}

export default Myswiper