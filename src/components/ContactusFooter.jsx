import React from 'react'
import { call, facebook, insta, linkdin, location, mail, mail2, massage, mindfulllogo, wp } from '../assets/img/logos'
import { NavLink } from 'react-router-dom'

const ContactusFooter = () => {
  return <>
  <div className=" py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column - Contact Form */}
  
            <div className="lg:w-1/2">
            <div className="mb-12">
            <h2 className="text-4xl text-gray-300  mb-1">Contact Us,</h2>
            <p className="text-5xl text-white mb-10">Let's Build your <br /> Digital Legacy.</p>
            <p className="text-lg  max-w-lg text-gray-600">
              At <span className='text-white'>Mindfull,</span>  we design with purpose blending creativity and strategy to craft brand identities that resonate.
            </p>
          </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 content-start items-start">
                
                {/* Call Center */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    {/* Replace with your PNG icon */}
                  
                    <h3 className="text-sm text-white">Call Center</h3>
                  </div>
                  <p className="text-gray-400 text-sm">+917980009725</p>
                  <span className="text-gray-400 text-sm">+918888866365</span>
                </div>
  
                {/* Our Location */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    
                    <h3 className="text-sm text-white">Our Location</h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Ganesham-D. Itt Floor, Unit No. 1,<br />
                    Govind-Yashada Chowk. Pimple<br />
                    Saudagar, Pune 41027
                  </p>
                </div>
  
                {/* Email */}
                <div className="space-y-4">
                  <div className="flex items-center">
                 
                    <h3 className="text-sm text-white">Email</h3>
                  </div>
                  <p className="text-gray-400 text-sm">mindfull@gmail.com</p>
                </div>
  
                {/* Social Network */}
                <div className="space-y-2">
                  <div className="flex items-center">
                    {/* Replace with your PNG icon */}
                  
                    <h3 className="text-sm text-white">Social Network</h3>
                  </div>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/company/mindfull-creative-studio/" >
                      <img src={linkdin} alt="" width="30"  />
                    </a>
                    <a href="https://www.facebook.com/share/1AAnudm6Fw/" >
                      <img src={facebook} alt="" width="30"  />
                    </a>
                    <a href="https://www.instagram.com/mindfull.co.in/" >
                      <img src={insta} alt=""  width="30" />
                    </a>
                    <a href="#" className="-mt-1">
                      <img src={mail} alt=""  width="40" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Column - Contact Info */}
            <div className="lg:w-1/2 bg-white p-9">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h3>
                <p className="text-gray-600">
                  we help you to unleash the power within your business
                </p>
              </div>
  
              <form className="space-y-1">
                <div>
                  {/* <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label> */}
                  <input
                    type="text"
                    id="name"
                    placeholder='Name'
                    className="mt-5 text-black block w-full border-b border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                  />
                </div>
  
                <div>
                  {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label> */}
                  <input
                    type="email"
                    id="email"
                    placeholder='Email'
                    className="mt-5 block text-black w-full border-b border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                  />
                </div>
  
                <div>
                  {/* <label htmlFor="subject" className="block  text-sm font-medium text-gray-700">Subject</label> */}
                  <input
                    type="text"
                    id="subject"
                    placeholder='Subject'
                    className="mt-1 block w-full border-b text-black border-gray-900 py-2 focus:outline-none focus:border-gray-500"
                  />
                </div>
  
                <div>
                  {/* <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label> */}
                  <textarea
                    id="message"
                    rows={4}
                    placeholder='Message'
                    className="mt-5 mb-10 block w-full border-b text-black border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  style={{backgroundColor:'#11526B'}}
                  className=" text-white px-20 py-3 rounded-md transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    <footer className="" style={{backgroundColor:'rgba(38, 35, 130, 1)'}}>
      <div className="pt-14 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="space-y-8  col-span-2 pl-20">
            {/* Logo and Description */}
            <div className="space-y-4 ">
              <div className='flex gap-10'>

              {/* </div> */}
              <div>
              <img src={mindfulllogo} alt="" />
              </div>
              <div className='mt-10'>
              <div className="flex space-x-6 pt-3">
              <div className='w-8 h-8 cursor-pointer'>
                <a href="https://www.linkedin.com/company/mindfull-creative-studio/">
              <img src={linkdin} alt="" />
                </a>
              </div>
             <div className='w-8 h-8 cursor-pointer'>
              
              <a href="https://www.linkedin.com/company/mindfull-creative-studio/">
              <img src={facebook} alt="" /></a>
              </div> 
             <div className='w-8 h-8 cursor-pointer'>
              
              <a href="https://www.instagram.com/mindfull.co.in/">
              <img src={insta} alt="" />

              </a>
              </div> 
             <div className='w-8 h-8 mt-1 cursor-pointer'>
              
              <a href="">
              <img src={mail2} alt="" />

              </a>
              </div> 
            </div>
              </div>
              </div>
              <p className="text-sm" style={{color:'D9D9D9'}}>
                Mindfull is a creative design agency specializing in branding, web design,  <br /> UI/UX,performance marketing
                and marketing visuals businesses stand out.
              </p>
            </div>

            {/* Navigation */}
            <nav>
              <ul className="flex flex-wrap justify-around ">
                <li>
                  <NavLink to="/" >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" >
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink target="_blank" rel="noreferrer" to="https://forms.gle/qXoQAAMGpcKFcieB9" >
                    Career
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" >
                    Testimonials
                  </NavLink>
                </li>
              </ul>
            </nav>
<div className="flex justify-start gap-12">

{/* </div> */}
            {/* Contact Info */}
         
            {/* Address */}
            <div className="space-y-2 ">





            {/* Social Media */}

            </div>
          </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="">
              <div className="flex items-center space-x-2 ">
                <div className="w-4 h-4 rounded-full bg-white"></div>
                <span className='text-xl'>Business / Sales Enquiry</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a
                  href="#"
                  className="  py-2 px-8 rounded flex items-center justify-center space-x-2" style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
                >
                  <span className="w-5 h-5 flex items-center justify-center"><img src={wp} alt="" /></span>
                  <span className='text-black'>Chat With Us</span>
                </a>
                <a
                  href="tel:7980009725"
                  className=" py-2 px-8 rounded flex items-center justify-center space-x-2" style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
                >
                  <span className="w-5 h-5 flex items-center justify-center"><img src={call} alt="" /></span>
                  <span className='text-black'>+917980009725</span>
                </a>
              </div>

              <a
                href="mailto:marketing@mindfull.co.in"
                className=" py-2 px-8 mt-3 rounded flex items-center justify-center space-x-2" style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
              >
                <span className="w-5 h-5 flex items-center justify-center"><img src={massage} alt="" /></span>
                <span className='text-black'>marketing@mindfull.co.in</span>
              </a>
            </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-4 border-t border-white/20 text-sm flex flex-col gap-3 sm:flex-row justify-center  items-center ">
          <div>© 2025 Mindfull Creative Studios LLP</div>
          <div className="flex space-x-4">
            <a href="#" >
              Privacy policy
            </a>
            <a href="#" >
              Terms of use
            </a>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default ContactusFooter