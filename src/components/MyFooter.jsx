import React, { useState } from 'react'
import { call, facebook, insta, linkdin, location, mail, mail2, massage, mindfulllogo, wp } from '../assets/img/logos'
import { NavLink } from 'react-router-dom'
import "./../assets/css/footer.css"

const MyFooter = () => {
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

  // const response = await fetch('http://localhost:5000/api/contact', {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch('home/thebutt/admin.mindfull.co.in/api/contact', {
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
    window.open('https://wa.me/7980009725', '_blank');
    
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
        setTimeout(() => setShowCopied(false), 1000);
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

  return <>



  <footer style={{backgroundColor:'rgba(38, 35, 130, 1)'}}>
      <div className="pt-14 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="space-y-8  col-span-2 pl-20">
            {/* Logo and Description */}
            <div className="space-y-4 ">
              <img src={mindfulllogo} alt="" />
              <p className="text-sm" style={{color:'D9D9D9'}}>
                Mindfull is a creative design agency specializing in branding, web design,  <br /> UI/UX,performance marketing
                and marketing visuals businesses stand out.
              </p>
            </div>

            {/* Navigation */}
            <nav>
              <ul className="flex flex-wrap justify-around border-b border-white/20 pb-4">
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
            <div className="">
              <div className="flex items-center space-x-2 ">
                <div className="w-4 h-4 rounded-full bg-white"></div>
                <span className='text-xl'>Business / Sales Enquiry</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a  onClick={handleWhatsAppClick}
                  href="#" target="_blank" rel="noreferrer"
                  className="  py-2 px-8 rounded flex items-center justify-center space-x-2" style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
                >
                  <span className="w-5 h-5 flex items-center justify-center"><img src={wp} alt="" /></span>
                  <span className='text-black'>Chat With Us</span>
                </a>
                <div className=' relative'>
                <a onClick={handlePhoneClick}
                 href={`tel:${phoneNumber}`}  target="_blank" rel="noreferrer"
                 className=" py-2 px-8 rounded flex items-center justify-center space-x-2" style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
                 >
                  <span className="w-5 h-5 flex items-center justify-center"><img src={call} alt="" /></span>
                  <span className='text-black'>{displayNumber}</span>
                </a>
                {showCopied && (
                  <div className="absolute left-32 bottom-11 transform -translate-x-1/2 bg-gray-800 text-white text-xs w-36 p-2 rounded">
            Copied to clipboard!
          </div>
         )}
         </div>
              </div>

              <a
                href="mailto:marketing@mindfull.co.in" onClick={handleEmailClick}
                className=" py-2 px-8 mt-3 rounded flex items-center justify-center space-x-2" style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
              >
                <span className="w-5 h-5 flex items-center justify-center"><img src={massage} alt="" /></span>
                <span className='text-black'>marketing@mindfull.co.in</span>
              </a>
            </div>

            {/* Address */}
            <div className="space-y-2 ">
              <div className="flex items-start space-x-2">
                <span className="w-5 h-5 flex items-center justify-center mt-1"><img src={location} alt="" /></span>
                <div>
                  <h3 className="font-medium">Pimpri Chinchwad</h3>
                </div>
              </div>
                  <p className="text-xs text-white/80 m">
                  Ganeesham-D, 1st Floor, Unit No. 1,  <br />
Govind-Yashada Chowk. Pimple Saudagar, Pune 411027
                  </p>
            {/* </div> */}


            {/* Social Media */}
            <div className="flex space-x-6 pt-3">

              <div className='w-8 h-8' style={{cursor:'pointer'}} >
                <a href="https://www.linkedin.com/company/mindfull-creative-studio/" target="_blank" rel="noreferrer" >
              <img src={linkdin} alt="" /> </a>
              </div>
             <div className='w-8 h-8' style={{cursor:'pointer'}}>
              <a href="https://www.facebook.com/share/1AAnudm6Fw/" target="_blank" rel="noreferrer" ><img src={facebook} alt="" /></a>
              </div> 
             <div className='w-8 h-8' style={{cursor:'pointer'}}>
              <a href="https://www.instagram.com/mindfull.co.in/" target="_blank" rel="noreferrer" > <img src={insta} alt="" />
              </a>
              </div> 
             <div className='w-8 h-8 mt-1' style={{cursor:'pointer'}} onClick={handleEmailClick}>
              <img src={mail2} alt=""  href="mailto:marketing@mindfull.co.in" />
              </div> 
            </div>
            </div>
          </div>
          </div>

            <div className=" bg-white p-7 rounded-md">
            {/* <div className=""> */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h3>
              <p className="text-gray-600">
                We help you to unleash the power within your business
              </p>

            {submitStatus && (
              <div className={`mb-4 p-3 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-1">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-3 text-black block w-full border-b border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-3 block text-black w-full border-b border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-3 block w-full border-b text-black border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-3 mb-4 block w-full border-b text-black border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{ backgroundColor: '#11526B' }}
                className="text-white px-20 py-3 rounded-md transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-4 border-t border-white/20 text-sm flex flex-col gap-3 sm:flex-row justify-center  items-center ">
          <div>© 2025 Mindfull Creative Studios LLP</div>
          <div className="flex space-x-4">
            <a href="#"  >
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

export default MyFooter