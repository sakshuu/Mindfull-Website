import React, { useState } from 'react'
import { call, facebook, insta, linkdin,  mail, mail2, massage, mindfulllogo, wp } from '../assets/img/logos'
import { NavLink } from 'react-router-dom'

const ContactusFooter = () => {
  const [showCopied, setShowCopied] = useState(false);
  const phoneNumber = '+917980009725';
  const displayNumber = '+917980009725';


  const handleEmailClick = () => {
    // First try standard mailto approach
    window.location.href = 'mailto:marketing@mindfull.co.in';
    
    // Fallback for mobile devices or special cases
    setTimeout(() => {
      if (!document.hidden) {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=marketing@mindfull.co.in', '_blank');
      }
    }, 100);
  };

  const handleWhatsAppClick = () => {
    // First try opening WhatsApp directly
    window.open('https://wa.me/7980009725');
    
    // Fallback for devices that might block popups
    setTimeout(() => {
      if (!document.hidden) {
        window.location.href = 'https://web.whatsapp.com/send?phone=7980009725';
      }
    }, 100);
  };
 
  const handlePhoneClick = (e) => {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile - open dialer immediately
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // On desktop - copy to clipboard
      e.preventDefault();
      navigator.clipboard.writeText(phoneNumber).then(() => {
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 100);
      }).catch(() => {
        // Fallback for browsers without clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = phoneNumber;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 200);
      });
    }
  };
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
          <div >
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-white"></div>
              <span className='text-xl'>Business / Sales Enquiry</span>
            </div>
<div className="w-[95%] px-5 py-3 ">


            <div className="flex flex-col w-[100%] flex-wrap md:flex-col  justify-between xl:flex-row gap-4 mt-4">
              <a
                  target="_blank" rel="noreferrer"    onClick={handleWhatsAppClick}
                className="py-2 px-2 w-[45%] rounded-xl flex  items-center justify-center space-x-2 cursor-pointer" 
                style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
              >
                <span className="w-5 h-5 flex justify-start"><img src={wp} alt="" /></span>
                <span className='text-black'>Chat With Us</span>
              </a>
              <div className="relative w-[45%]">
        <a
          href={`tel:${phoneNumber}`}
          onClick={handlePhoneClick} target="_blank" rel="noreferrer"
          className="py-2 px-8 rounded-xl flex items-center justify-center space-x-2 bg-blue-100"
        >
          <img src={call} alt="Call" className="w-5 h-5" />
          <span className="text-black">{displayNumber}</span>
        </a>
        {showCopied && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs w-36 p-2 rounded">
            Copied to clipboard!
          </div>
        )}
      </div>

            

            </div>

            <a onClick={handleEmailClick} 
              href="mailto:marketing@mindfull.co.in"
              className="py-2  w-full px-2 mt-3  rounded-xl flex items-center justify-center space-x-2" 
              style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
            >
              <span className="w-5 h-5 flex items-center justify-center"><img src={massage} alt="" /></span>
              <span className='text-black text-center'>marketing@mindfull.co.in</span>
            </a>
            </div>
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