import React, { useEffect, useRef, useState } from 'react'
import "./../assets/css/about.css"
import { OurTeam, WeBelieve } from '../components';
import { culture, whymindfullimg } from '../assets/img/about';
const wordArray = ['elevate', 'design', 'impact', 'think'];

const About = () => {
    const [currWord, setCurrWord] = useState(wordArray[0]);
    // const currentColorClass = wordColorMap[currWord];
    const index = useRef(0);
     useEffect(() => {
        const interval = setInterval(() => {
          index.current = (index.current + 1) % wordArray.length;
          setCurrWord(wordArray[index.current]);
        }, 1000);
        return () => clearInterval(interval);
      }, []);
      // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
    
  return  <>
  <div className='mainhero'>
        <div className='hero-sub-content'>
          <div style={{ marginLeft: '16%'}} className='col-span-4 mt-[20%]'>
            <div>
              <div className='text-2xl text-gray-400 font-thin py-3 ;' style={{fontFamily:'Spartan'}}>About us</div>
              <div className='text-7xl font-bold '>Inspired 
             <br /> by Vision</div>
              <p className=' mt-3 text-gray-400 w-[90%]' style={{fontFamily:'Spartan'}}>
              At <span className='font-semibold '>Mindfull</span> , we design with purpose blending creativity and strategy to  craft brand identities that resonate.  Our mission is to  transform ideas into impactful, customer-centric  experiences that drive success.
              </p>
            </div>
          </div>
           <div className='col-span-3'>
          {/*  <iframe 
              width="490" 
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

{/* pointer loop */}
<WeBelieve/>
<OurTeam/>
<div className='grid grid-cols-5 place-content-start'>
    <div className='col-span-2'>
        <img src={whymindfullimg} style={{width:'90%'}} alt="" />
    </div>
    <div className='col-span-3 mt-32' style={{width:'75%'}}>
<div className='text-2xl mb-3 text-gray-500' style={{fontFamily:'Spartan'}}>
Why <span className='text-gray-50' style={{fontFamily:'Spartan'}}>Mindfull ?</span> 
</div>

<div className='text-lg text-gray-500' style={{fontFamily:'Spartan'}}>At Mindfull, creativity isn’t just our service — it’s our mindset.We lead with curiosity, design with intent, and execute with precision.Whether we’re building brands or running campaigns, we obsess over the details.We believe in honest collaboration, fresh thinking, and real results.Our work doesn't just stand out — it stands for something. <br />
<span className='text-gray-50' style={{fontFamily:'Spartan'}}>
That’s the Mindfull way.
</span>
</div>    </div>
</div>

<div className='px-28'>

<div className='title-home' style={{fontFamily:'Spartan'}}>Our Culture</div>
<div className='text-xl mb-6' style={{fontFamily:'Spartan'}}>We create, connect, and grow — as a team and as individuals. <br /> At Mindfull, culture isn’t an extra — it’s everything.</div>
<img src={culture} alt="" className='mb-6'  />

</div>
  </>
}

export default About