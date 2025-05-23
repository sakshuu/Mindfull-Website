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
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showCopied, setShowCopied] = useState(false);
  const phoneNumber = '+917980009725';
  const displayNumber = '+917980009725';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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

  const handleEmailClick = () => {
    window.location.href = 'mailto:marketing@mindfull.co.in';
    setTimeout(() => {
      if (!document.hidden) {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=marketing@mindfull.co.in', '_blank');
      }
    }, 100);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/7980009725', '_blank');
    setTimeout(() => {
      if (!document.hidden) {
        window.location.href = 'https://web.whatsapp.com/send?phone=7980009725';
      }
    }, 100);
  };

  const handlePhoneClick = (e) => {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      e.preventDefault();
      navigator.clipboard.writeText(phoneNumber).then(() => {
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 1000);
      }).catch(() => {
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

  return (
    <footer style={{backgroundColor:'rgba(38, 35, 130, 1)'}}>
      <div className="pt-14 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="space-y-8 col-span-2 pl-20">
            {/* Logo and Description */}
            <div className="space-y-4">
              <img src={mindfulllogo} alt="" />
              <p className="text-sm" style={{color:'D9D9D9', fontFamily:'Albert Sans'}}>
                Mindfull is a creative design agency specializing in branding, web design,  <br /> UI/UX,performance marketing
                and marketing visuals businesses stand out.
              </p>
            </div>

            {/* Navigation */}
            <nav>
              <ul className="flex flex-wrap justify-around border-b border-white/20 pb-4">
                <li>
                  <NavLink to="/" style={{fontFamily:'Albert Sans'}}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" style={{fontFamily:'Albert Sans'}}>
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" style={{fontFamily:'Albert Sans'}}>
                    Services
                  </NavLink>
                </li>
                <li 
                  onMouseEnter={() => setHoveredItem('blogs')}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative"
                >
                  {hoveredItem === 'blogs' && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs p-1 px-2 rounded whitespace-nowrap">
                      Coming soon
                    </div>
                  )}
                  <NavLink to="/" style={{fontFamily:'Albert Sans'}}>
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink target="_blank" rel="noreferrer" to="https://forms.gle/qXoQAAMGpcKFcieB9" style={{fontFamily:'Albert Sans'}}>
                    Career
                  </NavLink>
                </li>
                <li 
                  onMouseEnter={() => setHoveredItem('testimonials')}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative"
                >
                  {hoveredItem === 'testimonials' && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs p-1 px-2 rounded whitespace-nowrap">
                      Coming soon
                    </div>
                  )}
                  <NavLink to="/" style={{fontFamily:'Albert Sans'}}>
                    Testimonials
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="flex justify-start flex-wrap gap-12 w-[100%]">
              {/* Contact Info */}
              <div className="w-[55%] px-6 py-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full"></div>
                  <span className='text-xl' style={{fontFamily:'Albert Sans'}}>Business / Sales Enquiry</span>
                </div>

                <div className="flex flex-wrap flex-row justify-between gap-2 mt-4 w-full">
                  <a onClick={handleWhatsAppClick}
                    href="#" target="_blank" rel="noreferrer"
                    className="py-2 w-[45%] px-8 rounded-xl flex items-center justify-center space-x-2" style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
                  >
                    <span className="w-5 h-5 flex items-center justify-center"><img src={wp} alt="" /></span>
                    <span className='text-black' style={{fontFamily:'Albert Sans'}}>Chat With Us</span>
                  </a>
                  <div className='relative w-[45%] rounded-xl'>
                    <a onClick={handlePhoneClick}
                      href={`tel:${phoneNumber}`} target="_blank" rel="noreferrer"
                      className="py-2 w-full rounded-xl flex items-center justify-center space-x-2" style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
                    >
                      <span className="w-5 h-5 flex justify-start"><img src={call} alt="" /></span>
                      <span className='text-black' style={{fontFamily:'Albert Sans'}}>{displayNumber}</span>
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
                  className="py-2 w-full px-8 mt-3 rounded-xl flex items-center justify-center space-x-2" style={{backgroundColor:'rgba(212, 226, 255, 1)'}}
                >
                  <span className="w-5 h-5 flex items-center justify-center"><img src={massage} alt="" /></span>
                  <span className='text-black' style={{fontFamily:'Albert Sans'}}>marketing@mindfull.co.in</span>
                </a>
              </div>

              {/* Address */}
              <div className="space-y-2 w-[35%] px-6">
                <div className="flex items-start space-x-2">
                  <span className="w-5 h-5 flex items-center justify-center mt-1"><img src={location} alt="" /></span>
                  <div>
                    <h3 className="font-medium" style={{fontFamily:'Albert Sans'}}>Pimpri Chinchwad</h3>
                  </div>
                </div>
                <p className="text-xs text-white/80 m" style={{fontFamily:'Albert Sans'}}>
                  Ganeesham-D, 1st Floor, Unit No. 1,  <br />
                  Govind-Yashada Chowk. Pimple Saudagar, Pune 411027
                </p>

                {/* Social Media */}
                <div className="flex space-x-6 pt-3">
                  <div className='w-8 h-8' style={{cursor:'pointer'}}>
                    <a href="https://www.linkedin.com/company/mindfull-creative-studio/" target="_blank" rel="noreferrer">
                      <img src={linkdin} alt="" />
                    </a>
                  </div>
                  <div className='w-8 h-8' style={{cursor:'pointer'}}>
                    <a href="https://www.facebook.com/share/1AAnudm6Fw/" target="_blank" rel="noreferrer">
                      <img src={facebook} alt="" />
                    </a>
                  </div>
                  <div className='w-8 h-8' style={{cursor:'pointer'}}>
                    <a href="https://www.instagram.com/mindfull.co.in/" target="_blank" rel="noreferrer">
                      <img src={insta} alt="" />
                    </a>
                  </div>
                  <div className='w-8 h-8 mt-1' style={{cursor:'pointer'}} onClick={handleEmailClick}>
                    <img src={mail2} alt="" href="mailto:marketing@mindfull.co.in" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-7 rounded-md">
            <h3 className="text-2xl font-normal text-blue-800 mb-2" style={{fontFamily:'Spartan'}}>Get In Touch</h3>
            <p className="text-gray-600" style={{fontFamily:'Spartan'}}>
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
                  style={{fontFamily:'Albert Sans'}}
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
                  style={{fontFamily:'Albert Sans'}}
                  className="mt-3 block text-black w-full border-b border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  required
                  style={{fontFamily:'Albert Sans'}}
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
                  style={{fontFamily:'Albert Sans'}}
                  className="mt-3 mb-4 block w-full border-b text-black border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{ backgroundColor: '#11526B', fontFamily:'Albert Sans' }}
                className="text-white px-20 py-3 rounded-xl transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-4 border-t border-white/20 text-sm flex flex-col gap-3 sm:flex-row justify-center items-center">
          <div style={{fontFamily:'Inter'}}>© 2025 Mindfull Creative Studios LLP</div>
          <div className="flex space-x-4">
            <div 
              onMouseEnter={() => setHoveredItem('privacy')}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative"
            >
              {hoveredItem === 'privacy' && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs p-1 px-2 rounded whitespace-nowrap">
                  Coming soon
                </div>
              )}
              <a href="#" style={{fontFamily:'Inter'}}>
                Privacy policy
              </a>
            </div>
            <div 
              onMouseEnter={() => setHoveredItem('terms')}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative"
            >
              {hoveredItem === 'terms' && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs p-1 px-2 rounded whitespace-nowrap">
                  Coming soon
                </div>
              )}
              <a href="#" style={{fontFamily:'Inter'}}>
                Terms of use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;