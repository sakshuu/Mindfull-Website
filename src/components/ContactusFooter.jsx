import React, { useState } from 'react'
import { call, facebook, insta, linkdin,  mail, mail2, massage, mindfulllogo, wp } from '../assets/img/logos'
import { NavLink } from 'react-router-dom'

const ContactusFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  // const response = await fetch('home/thebutt/admin.mindfull.co.in/api/contact', {

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ success: true, message: data.message });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ success: false, message: data.error || 'Failed to send message' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <>
 
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
        <div className="mt-4 mb-4 pt-4 border-t border-white/20 text-sm flex flex-col gap-3 sm:flex-row justify-center  items-center ">
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