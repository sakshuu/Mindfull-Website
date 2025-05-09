import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Abhi,
  Arjun,
  bigprofileabhi,
  bigprofilearjun,
  bigprofilechetana,
  bigprofilegauri,
  bigprofilejanhavi,
  bigprofilemanish,
  bigprofilenikita,
  bigprofilerohit,
  bigprofilesagar,
  bigprofilesakshi,
  bigprofilesanket,
  bigprofileshantanu,
  bigprofilesonali,
  bigprofilesudipto,
  bigprofilesuhas,
  bigprofiletarun,
  bluechetana,
  bluegauri,
  bluenikita,
  bluerohit,
  bluesanket,
  bluesonali,
  bluesudipto,
  Chetana,
  darkbluearjun,
  darkbluejanhavi,
  darkblueshantanu,
  darkbluesuhas,
  darkbluetarun,
  Gauri,
  Janhavi,
  Manish,
  Nikita,
  pinksakshi,
  purpleabhi,
  purplemanish,
  purplesagar,
  Rohit,
  sagar,
  Sakshi,
  Sanket,
  Shantanu,
  Sonali,
  Sudipto,
  Suhas,
  Tarun,
} from "../assets/img/about"
import { headingcommaend, headingcommastart } from "../assets/img"

const OurTeam = () => {
  const teamAll = [
    {
      id: "1",
      fullName: "Sagar Ghanate",
      name: "Sagar",
      colorprofile: purplesagar,
      profile: sagar,
      bigprofile: bigprofilesagar,
      roll: "Director",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
    },
    {
      id: "2",
      fullName: "Abhijeet Bhandare",
      name: "Abhijeet",
      colorprofile: purpleabhi,
      profile: Abhi,
      bigprofile: bigprofileabhi,
      roll: "Director",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
    },
    {
      id: "3",
      fullName: "Manish Jain",
      name: "Manish",
      colorprofile: purplemanish,
      profile: Manish,
      bigprofile: bigprofilemanish,
      roll: "Director",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
    },
    {
      id: "4",
      fullName: "Sanket Taware",
      name: "Sanket",
      colorprofile: bluesanket,
      profile: Sanket,
      bigprofile: bigprofilesanket,
      roll: "SR. Graphic Designer",
      thought:
        " Design Made By Visuals",
    },
    {
      id: "5",
      fullName: "Shantanu patil",
      name: "Shantanu",
      colorprofile: darkblueshantanu,
      profile: Shantanu,
      bigprofile: bigprofileshantanu,
      roll: "SR. Digital Marketer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
    },
    {
      id: "6",
      fullName: "Janhavi Patil",
      name: "Janhavi",
      colorprofile: darkbluejanhavi,
      profile: Janhavi,
      bigprofile: bigprofilejanhavi,
      roll: "UX Steategist",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
    },
    {
      id: "7",
      fullName: "Suhas Bandebuche",
      name: "Suhas",
      colorprofile: darkbluesuhas,
      profile: Suhas,
      bigprofile: bigprofilesuhas,
      roll: "Interaction Designer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
    },
    {
      id: "8",
      fullName: "Sudipto Adhikary",
      name: "Sudipto",
      colorprofile: bluesudipto,
      profile: Sudipto,
      bigprofile: bigprofilesudipto,
      roll: "Graphic Designer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
    },
    {
      id: "9",
      fullName: "Sonali Umrikar",
      name: "Sonali",
      colorprofile: bluesonali,
      profile: Sonali,
      bigprofile: bigprofilesonali,
      roll: "JR. Graphic Designer",
      thought:
        "Curves, colors, and confidence.",
    },
    {
      id: "10",
      fullName: "Sakshi Bodke",
      name: "Sakshi",
      colorprofile: bluegauri,
      profile: Gauri,
      bigprofile: bigprofilegauri,
      roll: "JR. Digital Marketer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
    },
    {
      id: "11",
      fullName: "Rohit patil",
      name: "Rohit",
      colorprofile: bluerohit,
      profile: Rohit,
      bigprofile: bigprofilerohit,
      roll: "Motion Designer",
      thought:
        "From Silence to Symphony",
    },
    {
      id: "12",
      fullName: "Arjun Zadee",
      name: "Arjun",
      colorprofile: darkbluearjun,
      profile: Arjun,
      bigprofile: bigprofilearjun,
      roll: "SR. Graphic Designer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
    },
    {
      id: "13",
      fullName: "Chetana Bangar",
      name: "Chetana",
      colorprofile: bluechetana,
      profile: Chetana,
      bigprofile: bigprofilechetana,
      roll: "Graphic Designer",
      thought:
        "A single line can spark a universe.",
    },
    {
      id: "14",
      fullName: "Nikita Sangle",
      name: "Nikita",
      colorprofile: bluenikita,
      profile: Nikita,
      bigprofile: bigprofilenikita,
      roll: "Graphic Designer",
      thought:
        "Graphic design is emotion, purpose, and problem-solving—made visual.",
    },
    {
      id: "15",
      fullName: "Sakshi Jadhav",
      name: "Sakshi",
      colorprofile: pinksakshi,
      profile: Sakshi,
      bigprofile: bigprofilesakshi,
      roll: "Full Stack Developer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
    },
    {
      id: "16",
      fullName: "Tarun Jain",
      name: "Tarun",
      colorprofile: darkbluetarun,
      profile: Tarun,
      bigprofile: bigprofiletarun,
      // roll: "Chief Marketing executive",
      roll: "Chf. Marketing executive",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
    },
  ]

  // Set default to Sakshi Jadhav (id: "15", index 14)
  const [selectedMember, setSelectedMember] = useState(teamAll[0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [profileImages, setProfileImages] = useState(
    teamAll.map((member, index) => (index === 0 ? member.colorprofile : member.profile))
  )
  const containerRef = useRef(null)

  const handleMemberClick = (member, index) => {
    setSelectedMember(member)
    setCurrentIndex(index)
    // Update the clicked profile image to colorprofile, reset others to default
    const updatedImages = teamAll.map((m, i) => 
      i === index ? member.colorprofile : m.profile
    )
    setProfileImages(updatedImages)
  }

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? teamAll.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setSelectedMember(teamAll[newIndex])
    // Update the profile image to colorprofile for the new selected member
    const updatedImages = teamAll.map((m, i) => 
      i === newIndex ? m.colorprofile : m.profile
    )
    setProfileImages(updatedImages)
  }

  const handleNext = () => {
    const newIndex = currentIndex === teamAll.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setSelectedMember(teamAll[newIndex])
    // Update the profile image to colorprofile for the new selected member
    const updatedImages = teamAll.map((m, i) => 
      i === newIndex ? m.colorprofile : m.profile
    )
    setProfileImages(updatedImages)
  }

  // useEffect(() => {
  //   const container = containerRef.current
  //   if (container) {
  //     const selectedElement = container.children[currentIndex]
  //     selectedElement.scrollIntoView({
  //       behavior: "smooth",
  //       inline: "center",
  //       block: "nearest",
  //     })
  //   }
  // }, [currentIndex])

  return (
    <div className="h-[100vh] w-[99vw] text-white">
      <div className="relative">
         <div className="w-[100%] h-[97vh] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4">
          {/*<div className="w-[60%] h-full">
            <div className="  flex flex-col text-center items-center justify-center h-[calc(100%-15rem)] bg-slate-500">
            <h2 className="text-2xl font-normal text-left text-gray-300">Our Team</h2> */}
             <div className="w-[60%]  h-full flex flex-col ">
            <h2 className="text-2xl font-semibold pt-10 ml-20 text-left text-gray-400">Our Team</h2>

            <div className="flex-grow flex text-center flex-col justify-center mb-[22%] items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMember.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h1
                    className="md:text-3xl lg:text-5xl xl:text-7xl font-bold mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    style={{ textTransform:'uppercase'}}
                  >
                    {selectedMember.roll}
                  </motion.h1>
                  <motion.h2
                    className="text-xl md:text-2xl mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    style={{ textTransform:'uppercase'}}>
                    {selectedMember.fullName}
                  </motion.h2>
                  <motion.div
                    className="flex items-center justify-center gap-2 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <div className="flex  justify-between gap-4 items-baseline">
                      <img src={headingcommastart} width={17} alt="" /> 
                    <p className="text-sm md:text-base max-w-md text-center">
                      {selectedMember.thought}
                    </p>
                   <img className="-mt-16" src={headingcommaend} width={17} alt="" />
                    </div>
                  </motion.div>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={handlePrev}
                      className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={handleNext}
                      className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="w-[40%] flex justify-center items-center ">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMember.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <img
                  src={selectedMember.bigprofile}
                  alt={selectedMember.fullName}
                  className="w-full h-[95vh] object-cover rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="w-full  bg-black/40 backdrop-blur-md  absolute -bottom-10">
          <div
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4"
            style={{ scrollBehavior: "smooth", touchAction: "pan-x" }}
          >
            {teamAll.map((member, index) => (
              <div
                key={member.id}
                onClick={() => handleMemberClick(member, index)}
                className="snap-center flex-shrink-0 cursor-pointer transition-all duration-300 transform py-[2%]"  >
                <div
                  className={`relative rounded-full ml-6 overflow-hidden w-32 h-32 p-0 ${
                    selectedMember.id === member.id ? `h-36 w-36 -mt-4 shadow-[0_0_15px_5px_rgba(255,255,255,0.5)]` : ""
                  } ${profileImages[index] === member.colorprofile ? "shadow-[0_0_15px_5px_rgba(255,255,255,0.5)]" : "shadow-[0_0_15px_5px-rgba(255,255,255,0.5)]"}`}
                >
                  <img
                    src={profileImages[index]}
                    alt={member.name}
                    className="w-[100%] h-[100%] object-cover rounded-full"
                  />
                </div>
                <div className="text-center mt-2 ">
                  <span
                  //  className="text-lg text-gray-500 font-medium text-center "
                   className={`text-base text-gray-500 font-medium text-center ${
                    selectedMember.id === member.id ? `text-lg text-white font-medium text-center` : ""
                  } `}
                  >{member.name}</span>
                  <div
                  //  className="text-sm text-gray-500 text-center" 
                                     className={`text-xs text-gray-500 text-center ${
                                      selectedMember.id === member.id ? `text-base text-white text-center` : ""
                                    } `}
                  style={{lineHeight:'0.4rem'}}>{member.roll}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam