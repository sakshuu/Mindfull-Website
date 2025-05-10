

import React, { useState } from 'react'
import { facebook, insta, linkdin, mail } from '../assets/img/logos'
import searchbar from '../assets/img/logos/searchbar.png'
import plus from '../assets/img/logos/plus.png'
import minus from '../assets/img/logos/minus.png'

const Contactus = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How long does it take to complete a web development project?",
      answer:
        "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
      isOpen: false,
    },
    {
      question: "Can you create a responsive website design that looks great on all devices?",
      answer:
        "Yes, we specialize in creating responsive designs that work seamlessly across all device sizes, from mobile phones to desktop computers.",
      isOpen: false,
    },
    {
      question: "What digital marketing strategies do you employ to drive website traffic?",
      answer:
        "We utilize a combination of SEO, content marketing, social media, and paid advertising tailored to your specific business needs and target audience.",
      isOpen: false,
    },
    {
      question: "How do you ensure cross-platform compatibility for mobile apps?",
      answer:
        "We use cross-platform frameworks and extensive testing across different devices and operating systems to ensure consistent performance and user experience.",
      isOpen: false,
    },
    {
      question: "Can you handle large-scale mobile app development projects?",
      answer:
        "Yes, our experienced team has successfully delivered numerous large-scale mobile applications across various industries and platforms.",
      isOpen: false,
    },
    {
      question: "Do you offer maintenance services for websites and apps developed by other companies?",
      answer:
        "Yes, we provide comprehensive maintenance and support services for existing websites and applications, regardless of who originally developed them.",
      isOpen: false,
    },
  ])

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen }
        }
        return faq
      }),
    )
  }
  
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

  return (
    <>
      <div className='mainhero'>
        <div style={{ display: 'flex', width:'60%' , padding:'8%' }}>
          <div style={{marginTop:'10%'}}>
            <div className=' text-xl text-gray-400' style={{fontFamily:'Spartan'}}>Join Us</div>
            <div className='text-7xl font-bold'>Contact us</div>
            <p className='main-content mt-4 text-1xl' style={{fontFamily:'Spartan'}}>
              We’d love to hear from you! Whether you have a question or want to discuss how we can collaborate, our team is here to help. Reach out today, and let’s start building something great together!
            </p>
          </div>
        </div>
      </div>
     
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3781.487675346857!2d73.80180917519351!3d18.597122382511362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM1JzQ5LjYiTiA3M8KwNDgnMTUuOCJF!5e0!3m2!1sen!2sin!4v1746771024448!5m2!1sen!2sin"         style={{width:'99vw', height:'70vh', border:'0px'}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">  
            <div className="lg:w-1/2">
              <div className="mb-12">
                <h2 className="text-4xl text-gray-300 mb-1" style={{fontFamily:'Spartan'}}>Contact Us,</h2>
                <p className="text-5xl text-white mb-10" style={{fontFamily:'Spartan'}}>Let's Build your <br /> Digital Legacy.</p>
                <p className="text-lg max-w-lg text-gray-600" style={{fontFamily:'Spartan'}}>
                  At <span className='text-white' style={{fontFamily:'Spartan'}}>Mindfull,</span> we design with purpose blending creativity and strategy to craft brand identities that resonate.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 content-start items-start">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <h3 className="text-sm text-white" style={{fontFamily:'Spartan'}}>Call Center</h3>
                  </div>
                  <p className="text-gray-400 text-sm" style={{fontFamily:'Spartan'}}>+917980009725</p>
                  <span className="text-gray-400 text-sm" style={{fontFamily:'Spartan'}}>+918888866365</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <h3 className="text-sm text-white" style={{fontFamily:'Spartan'}}>Our Location</h3>
                  </div>
                  <p className="text-gray-400 text-sm" style={{fontFamily:'Spartan'}}>
                    Ganesham-D. 1st Floor, Unit No. 1,<br />
                    Govind-Yashada Chowk. Pimple<br />
                    Saudagar, Pune 411027
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <h3 className="text-sm text-white" style={{fontFamily:'Spartan'}}>Email</h3>
                  </div>
                  <p className="text-gray-400 text-sm" style={{fontFamily:'Spartan'}}>marketing@mindfull.co.in</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <h3 className="text-sm text-white" style={{fontFamily:'Spartan'}}>Social Network</h3>
                  </div>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/company/mindfull-creative-studio/">
                      <img src={linkdin} alt="" width="30" />
                    </a>
                    <a href="https://www.facebook.com/share/1AAnudm6Fw/">
                      <img src={facebook} alt="" width="30" />
                    </a>
                    <a href="https://www.instagram.com/mindfull.co.in/">
                      <img src={insta} alt="" width="30" />
                    </a>
                    <a href="#" className="-mt-1">
                      <img src={mail} alt="" width="40" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white p-9">
              <div className="mb-8">
                <h3 className="text-2xl font-normal text-blue-800 mb-2" style={{fontFamily:'Spartan'}}>Get In Touch</h3>
                <p className="text-gray-600" style={{fontFamily:'Spartan'}}>
                  We help you to unleash the power within your business
                </p>
              </div>
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
                    style={{fontFamily:'Albert Sans'}}
                    required
                    className="mt-5 text-black block w-full border-b border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}  style={{fontFamily:'Albert Sans'}}
                    required
                    className="mt-5 block text-black w-full border-b border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}   style={{fontFamily:'Albert Sans'}}
                    className="mt-1 block w-full border-b text-black border-gray-900 py-2 focus:outline-none focus:border-gray-500"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}   style={{fontFamily:'Albert Sans'}}
                    required
                    className="mt-5 mb-10 block w-full border-b text-black border-gray-900 py-1 focus:outline-none focus:border-gray-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ backgroundColor: '#11526B' , fontFamily:'Albert Sans'}}
                  className="text-white px-20 py-3 rounded-xl transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 bg-black text-white p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-light" style={{fontFamily:'Spartan'}}>
              <span className="text-gray-500" style={{fontFamily:'Spartan'}}>Frequently</span> Asked Questions
            </h1>
            <div className="relative w-[48%]">
              <input
                type="text"
                placeholder="Search"
                className="bg-zinc-900  rounded-full py-2 pl-10 pr-4 w-[100%] text-sm focus:outline-none"
              />
              <img src={searchbar} alt="" className="absolute left-3 top-2.5 w-4" />
            </div>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {faqs.map((faq, index) => (
              // <div key={index} className="border border-zinc-800 rounded-2xl p-6" >
              <div key={index} className={`border border-zinc-800 rounded-2xl p-6  flex flex-col ${faq.isOpen ? "bg-blue-600" : ""}`} >
                <div className="flex justify-between items-center" >
                  <h3 className="text-sm font-medium">{faq.question}</h3>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`rounded-full p-1 flex items-center justify-center ${faq.isOpen ? "bg-white" : "bg-zinc-800"}`}
                  >
                    {faq.isOpen ? <img src={minus} className="w-4" /> : <img src={plus} className="w-4" />}
                  </button>
                </div>
                {faq.isOpen && <p className="mt-4 text-xs text-gray-400">{faq.answer}</p>}
              </div>
            ))}
          </div> */}


        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className={`border-b border-zinc-800 p-6  flex flex-col ${faq.isOpen ? "bg-blue-600 rounded-2xl " : ""}`}
               >
                <div className="flex justify-between items-center min-h-[3rem]">
                  <h3 className="text-sm font-medium pr-4">{faq.question}</h3>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`rounded-full p-1 flex items-center justify-center ${faq.isOpen ? "bg-white" : "bg-zinc-800"}`}
                  >
                    {faq.isOpen ? <img src={minus} className="w-4" /> : <img src={plus} className="w-4" />}
                  </button>
                </div>
                {faq.isOpen && <p className="mt-4 text-xs text-gray-400">{faq.answer}</p>}
              </div>
            ))}
          </div> */}



{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className={`border-b border-zinc-800 p-6 flex flex-col ${faq.isOpen ? "bg-blue-600 rounded-2xl" : ""}`}>
                <div className="flex justify-between items-center min-h-[3rem]">
                  <h3 className="text-sm font-medium pr-4">{faq.question}</h3>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`rounded-full p-1 flex items-center justify-center ${faq.isOpen ? "bg-white" : "bg-zinc-800"}`}
                  >
                    {faq.isOpen ? <img src={minus} className="w-4" /> : <img src={plus} className="w-4" />}
                  </button>
                </div>
                {faq.isOpen && <p className="mt-4 text-xs text-gray-400">{faq.answer}</p>}
              </div>
            ))}
          </div> */}


{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {faqs.map((faq, index) => (
              <div key={index} className={`border-b border-zinc-800 p-6 flex flex-col ${faq.isOpen ? "bg-blue-600 rounded-2xl" : ""}`}>
                <div className="flex justify-between items-center min-h-[3rem]">
                  <h3 className="text-sm font-medium pr-4">{faq.question}</h3>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`rounded-full p-1 flex items-center justify-center ${faq.isOpen ? "bg-white" : "bg-zinc-800"}`}
                  >
                    {faq.isOpen ? <img src={minus} className="w-4" /> : <img src={plus} className="w-4" />}
                  </button>
                </div>
                {faq.isOpen && <p className="mt-4 text-xs text-gray-400">{faq.answer}</p>}
              </div>
            ))}
          </div> */}


{/* <div className="flex flex-wrap -mx-3">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full md:w-1/2 px-3 mb-6">
                <div className={`border-b border-zinc-800 p-6 flex flex-col ${faq.isOpen ? "bg-blue-600 rounded-2xl" : ""}`}>
                  <div className="flex justify-between items-center min-h-[3rem]">
                    <h3 className="text-sm font-medium pr-4">{faq.question}</h3>
                    <button
                      onClick={() => toggleFAQ(index)}
                      className={`rounded-full p-1 flex items-center justify-center ${faq.isOpen ? "bg-white" : "bg-zinc-800"}`}
                    >
                      {faq.isOpen ? <img src={minus} className="w-4" /> : <img src={plus} className="w-4" />}
                    </button>
                  </div>
                  {faq.isOpen && <p className="mt-4 text-xs text-gray-400">{faq.answer}</p>}
                </div>
              </div>
            ))}
          </div> */}

{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0 items-start">
            {faqs.map((faq, index) => (
              <div key={index} className={`border-b border-zinc-800 p-6 flex flex-col ${faq.isOpen ? "bg-blue-600 rounded-2xl" : ""}`}>
                <div className="flex justify-between items-center min-h-[3rem]">
                  <h3 className="text-sm font-medium pr-4">{faq.question}</h3>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`rounded-full p-1 flex items-center justify-center ${faq.isOpen ? "bg-white" : "bg-zinc-800"}`}
                  >
                    {faq.isOpen ? <img src={minus} className="w-4" /> : <img src={plus} className="w-4" />}
                  </button>
                </div>
                {faq.isOpen && <p className="mt-4 text-xs text-gray-400">{faq.answer}</p>}
              </div>
            ))}
          </div> */}

<div className="max-w-6xl mx-auto px-4 py-12 mb-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* FAQ Items - Left Column */}
        <div className="space-y-4">
          {faqs.slice(0, 3).map((faq, index) => (
            <div 
            key={index} className={`border-b border-zinc-800 p-6 flex flex-col ${faq.isOpen ? "bg-blue-600 rounded-2xl" : ""}`}
              // key={index} 
              // className={`border border-zinc-200 rounded-lg p-6 transition-all duration-200 ${faq.isOpen ? "bg-blue-50 border-blue-300" : ""}`}
            >
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base font-light pr-4" style={{fontFamily:'Spartan'}}>{faq.question}</h3>
                <button
                  className={`rounded-full p-2 flex items-center justify-center ${faq.isOpen ? "bg-blue-100" : "bg-gray-900"}`}
                >
                  {faq.isOpen ? <img src={minus} className="w-4" /> : <img src={plus} className="w-4" />}
                </button>
              </div>
              {faq.isOpen && (
                <p className="mt-4  font-light text-gray-200" style={{fontFamily:'Spartan'}}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        
        {/* FAQ Items - Right Column */}
        <div className="space-y-4">
          {faqs.slice(3).map((faq, index) => (
            <div 
              // key={index + 3} 
              // className={`border border-zinc-200 rounded-lg p-6 transition-all duration-200 ${faq.isOpen ? "bg-blue-50 border-blue-300" : "hover:bg-gray-50"}`}
              key={index + 3} className={`border-b border-zinc-800 p-6 flex flex-col ${faq.isOpen ? "bg-blue-600 rounded-2xl" : ""}`}
           >
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index + 3)}
              >
                <h3 className="text-base font-light pr-4" style={{fontFamily:'Spartan'}}>{faq.question}</h3>
                <button
                  className={`rounded-full p-2 flex items-center justify-center ${faq.isOpen ? "bg-blue-100" : "bg-gray-900"}`}
                >
                  {faq.isOpen ? <img src={minus} className="w-4" /> : <img src={plus} className="w-4" />}
                </button>
              </div>
              {faq.isOpen && (
                <p className="mt-4 font-light text-gray-200" style={{fontFamily:'Spartan'}}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

        </div>
      </div>
    </>
  )
}

export default Contactus