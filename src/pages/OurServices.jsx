import React, { useEffect, useRef, useState } from 'react'
import { icon1, icon2, icon3, icon4, icon5, service1 , service2, service3, service4, service5, service6, service7, service8, service9,service10,service11,service12,service13,service14,service15,service16,service17,service18,service19,service20, industries} from '../assets/img/services';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./../assets/css/services.css"
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { arrownext, arrowpre, Macbookpro } from '../assets/img/home';

const wordArray = ['elevate', 'design', 'impact', 'think'];

const OurServices = () => {
const [currWord, setCurrWord] = useState(wordArray[0]);
    const index = useRef(0);
     useEffect(() => {
        const interval = setInterval(() => {
          index.current = (index.current + 1) % wordArray.length;
          setCurrWord(wordArray[index.current]);
        }, 1000);
        return () => clearInterval(interval);
      }, []);
      
      const cardColors = ['#E6BDFF', '#F8E8ED', '#D4E2FF', '#E6BDFF', '#F8E8ED']
      
      const ourWorks = [
        {
          id:'1',
          icon:icon1,
          title:'UI/UX & Web Solutions .',
          desc:'We design intuitive digital experiences that don’t just look good—they work seamlessly. From responsive websites to user-friendly platforms, we craft interfaces that guide, engage, and convert. Our thoughtful approach to UI/UX has helped brands simplify the user journey and increase online engagement meaningfully.',
          images: [
            service1,
            service2,
            service3,
            service4,
          ]
        },
        {
          id:'2',
          icon:icon2,
          title:'Digital Presence & Performance Marketing .',
          desc:'We help brands be seen—and remembered.With a mix of strategy, creativity, and analytics, our performance marketing solutions have helped clients grow online, connect with their ideal audience, and achieve consistent, trackable growth across platforms.',
          images: [
            service5,
            service6,
            service7,
            service8,
          ]
        },
        {
          id:'3',
          icon:icon3,
          title:'Branding & Identity Design',
          desc:'In a busy world, visuals capture attention first. We produce visuals—photos, videos, graphics—that captivate and communicate your story clearly. Our content has helped brands grab attention, boost engagement, and express their identity in ways that truly resonate with audiences.',
          images: [
            service9,
            service10,
            service11,
            service12,
          ]
        },
        {
          id:'4',
          icon:icon4,
          title:'Visual Content Creation',
          desc:'We help brands be seen—and remembered.With a mix of strategy, creativity, and analytics, our performance marketing solutions have helped clients grow online, connect with their ideal audience, and achieve consistent, trackable growth across platforms.',
          images: [
            service13,
            service14,
            service15,
            service16,
          ]
        },
        {
          id:'5',
          icon:icon5,
          title:'Marketing Collateral & Advertising ',
          desc:'We turn ideas into impactful campaigns and collaterals that stick. From brochures to billboards, print ads to digital banners, we ensure every asset tells your story with clarity and creativity. Our work has helped brands leave lasting impressions and spark real-world results.',
          images: [
            service17,
            service18,
            service19,
            service20,
          ]
        },
      ]

  return  <>
   <div className='mainhero'>
          <div style={{ display: 'flex', width:'70%' , padding:'8%'}}>
            <div>
              <div className='py-6 text-xl text-gray-400'>Our Service</div>
              <div className='text-7xl font-bold'>Helping brands grow, <br /> connect, and thrive</div>

              <p className='main-content mt-4 text-1xl'>
              At <span>Mindfull</span>, we help brands grow by creating meaningful connections and delivering impactful solutions. Through creativity and strategy, we ensure your brand thrives and stands out in a competitive world.
               </p>
               <button  className="bg-transparent mt-7 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded-md">
                Get Started
              </button>
            </div>
          </div>
              </div>


              <div className='pl-32 mb-10 mt-10'>
<div className='text-xl text-gray-500 mb-1'>Our Work</div>
      <div className='text-lg text-gray-300  max-w-2xl'>
      Our services have a proven track <br /> record of boosting businesses
      </div>
</div>

<div className='px-4 lg:px-32 cursor-pointer mb-8'>
{ourWorks.map((item, index) => (
<div className="flex flex-col lg:flex-row gap-4 mt-10">
              {/* Text content */}
              <div 
                className="lg:w-1/2 rounded-lg xl:p-7 md:p-4"
                style={{ backgroundColor: cardColors[index % cardColors.length] }}
              >
                <div className="xl:py-20 mb:py-2">
                  <div className="mb-4">
                    <img src={item.icon} className="w-10 h-10 ml-4" alt="" />
                  </div>
                  <h2 className="xl:text-2xl md:text-xl md:mb-4 font-bold text-black xl:mt-8">
                    {item.title}
                  </h2>
                  <p className="xl:text-lg md:text-sm text-black leading-relaxed xl:mt-8">
                    {item.desc}
                  </p>
                </div>
              </div>
              
              {/* Images grid with square boxes */}
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {item.images.map((image, idx) => (
                    <div 
                      key={idx} 
                      className="relative overflow-hidden group"
                      style={{ paddingBottom: '100%' }} // Creates square container
                    >
                      <img
                        src={image}
                        alt={`${item.title} example ${idx + 1}`}
                        className="absolute top-0 left-0 w-full h-full object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
        ))}
        </div>

<div className='pl-32'>
        <div className=' text-xl text-gray-400'>Our Industries</div>
        <div className='text-xl '>We don't just know industries—we understand <br />
                                            how to make brands thrive within them.

</div>
</div>
<div className='flex justify-center py-10'>
  <div>
 <img src={industries} style={{width:'80vw'}} alt=""  />
  </div>
</div>




  </>
}

export default OurServices