// import React from 'react'
// import { Abhi, Arjun, bigprofileabhi, bigprofilearjun, bigprofilechetana, bigprofilegauri, bigprofilejanhavi, bigprofilemanish, bigprofilenikita, bigprofilerohit, bigprofilesagar, bigprofilesakshi, bigprofilesanket, bigprofileshantanu, bigprofilesonali, bigprofilesudipto, bigprofilesuhas, bigprofiletarun, Chetana, Gauri, Janhavi, Manish, Nikita, Rohit, Sagar, Sakshi, Sanket, Shantanu, Sonali, Sudipto, Suhas, Tarun, } from '../assets/img/about'



// const OurTeam = () => {
//     const teamAll = [
//         {
//             id:'1',
//             fullName:'Sagar Ghanate',
//             name:'Sagar',
//             profile:Sagar,
//             bigprofile:bigprofilesagar,
//             roll:'DIRECTOR',
//             thought:'we help you to unleash the power within your businesswe help you to unleash the power within your business',
//         },
//         {
//             id:'2',
//             fullName:'Abhijeet Bhandare',
//             name:'Abhijeet',
//             profile:Abhi,
//             bigprofile:bigprofileabhi,
//             roll:'DIRECTOR',
//             thought:'we help you to unleash the power within your businesswe help you to unleash the power within your business',
//         },
//         {
//             id:'3',
//             fullName:'Manish Jain',
//             name:'Manish',
//             profile:Manish,
//             bigprofile:bigprofilemanish,
//             roll:'DIRECTOR',
//             thought:'we help you to unleash the power within your businesswe help you to unleash the power within your business',
//         },
       
//         {
//             id:'4',
//             fullName:'Tarun',
//             name:'Tarun Jain',
//             profile:Tarun,
//             bigprofile:bigprofiletarun,
//             roll:'Chief Marketing executive',
//             thought:'we help you to unleash the power within your businesswe help you to unleash the power within your business',
//         },
//         {
//             id:'5',
//             fullName:'Sanket Taware',
//             name:'Sanket',
//             profile:Sanket ,
//             bigprofile:bigprofilesanket,
//             roll:'SR.Graphic Designer',
//             thought:'we help you to unleash the power within your businesswe help you to unleash the power within your business',
//         },
//         {
//             id:'6',
//             fullName:'Shantanu patil',
//             name:'Shantanu',
//             profile:Shantanu,
//             bigprofile:bigprofileshantanu,
//             roll:'SR. Digital Marketer',
//             thought:'we help you to unleash the power within your businesswe help you to unleash the power within your business',
//         },
//         {
//             id:'7',
//             fullName:'Janhavi Patil',
//             name:'Janhavi',
//             profile:Janhavi,
//             bigprofile:bigprofilejanhavi,
//             roll:'UX Steategist',
//             thought:'we help you to unleash the power within your businesswe help you to unleash the power within your business',
//         },
//         {
//             id:'8',
//             fullName:'Suhas Bandebuche',
//             name:'Suhas',
//             profile:Suhas,
//             bigprofile:bigprofilesuhas,
//             roll:'Interaction Designer',
//             thought:'we help you to unleash the power within your businesswe help you to unleash the power within your business',
//         },
//         {
//             id:'9',
//             fullName:'Sudipto Adhikary',
//             name:'Sudipto',
//             profile:Sudipto,
//             bigprofile:bigprofilesudipto,
//             roll:'Graphic Designer',
//             thought:'we help you to unleash the power within your businesswe help you to unleash the power within your business',
//         },
//         {
//             id:'10',
//             fullName:'Sonali Umrikar',
//             name:'Sonali',
//             profile:Sonali,
//             bigprofile:bigprofilesonali,
//             roll:'JR. Graphic Designer',
//             thought:'we help you to unleash the power within your businesswe help you to unleash the power within your business',
//         },
//         {
//             id:'11',
//             fullName:'Sakshi Bodke',
//             name:'Sakshi',
//             profile:Gauri,
//             bigprofile:bigprofilegauri,
//             roll:'JR. Digital Marketer',
//             thought:'we help you to unleash the power within your businesswe help you to unleash the power within your business',
//         },
//         {
//             id:'12',
//             fullName:'Rohit patil',
//             name:'Rohit',
//             profile:Rohit,
//             bigprofile:bigprofilerohit,
//             roll:'Motion Designer',
//             thought:'we help you to unleash the power within your businesswe help you to unleash the power within your business',
//         },
//         {
//             id:'13',
//             fullName:'Arjun Zadee',
//             name:'Arjun',
//             profile:Arjun,
//             bigprofile:bigprofilearjun,
//             roll:'SR. Graphic Designer',
//             thought:'we help you to unleash the power within your businesswe help you to unleash the power within your business',
//         },
//         {
//             id:'14',
//             fullName:'Chetana Bangar',
//             name:'Chetana',
//             profile:Chetana,
//             bigprofile:bigprofilechetana,
//             roll:'Graphic Designer',
//             thought:'we help you to unleash the power within your businesswe help you to unleash the power within your business',
//         },
//         {
//             id:'15',
//             fullName:'Nikita Sangle',
//             name:'Nikita',
//             profile:Nikita,
//             bigprofile:bigprofilenikita,
//             roll:'Graphic Designer',
//             thought:'we help you to unleash the power within your businesswe help you to unleash the power within your business',
//         },
//         {
//             id:'16',
//             fullName:'Sakshi Jadhav',
//             name:'Sakshi',
//             profile:Sakshi,
//             bigprofile:bigprofilesakshi,
//             roll:'Full Stack Developer',
//             thought:'we help you to unleash the power within your businesswe help you to unleash the power within your business',
//         },
//     ]
//   return  <>
//   <div>Our Team</div>

//   </>
// }

// export default OurTeam




import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
// import { ChevronLeft, ChevronRight } from "lucide-react"


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
  Chetana,
  Gauri,
  Janhavi,
  Manish,
  Nikita,
  Rohit,
  Sagar,
  Sakshi,
  Sanket,
  Shantanu,
  Sonali,
  Sudipto,
  Suhas,
  Tarun,
} from "../assets/img/about"

const OurTeam = () => {
  const teamAll = [
    {
      id: "1",
      fullName: "Sagar Ghanate",
      name: "Sagar",
      profile: Sagar,
      bigprofile: bigprofilesagar,
      roll: "DIRECTOR",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
      bgColor: "bg-purple-700",
    },
    {
      id: "2",
      fullName: "Abhijeet Bhandare",
      name: "Abhijeet",
      profile: Abhi,
      bigprofile: bigprofileabhi,
      roll: "DIRECTOR",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
      bgColor: "bg-purple-700",
    },
    {
      id: "3",
      fullName: "Manish Jain",
      name: "Manish",
      profile: Manish,
      bigprofile: bigprofilemanish,
      roll: "DIRECTOR",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
      bgColor: "bg-purple-700",
    },
    {
      id: "4",
      fullName: "Tarun Jain",
      name: "Tarun",
      profile: Tarun,
      bigprofile: bigprofiletarun,
      roll: "Chief Marketing executive",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
      bgColor: "bg-red-600",
    },
    {
      id: "5",
      fullName: "Sanket Taware",
      name: "Sanket",
      profile: Sanket,
      bigprofile: bigprofilesanket,
      roll: "SR.Graphic Designer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
      bgColor: "bg-yellow-600",
    },
    {
      id: "6",
      fullName: "Shantanu patil",
      name: "Shantanu",
      profile: Shantanu,
      bigprofile: bigprofileshantanu,
      roll: "SR. Digital Marketer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
      bgColor: "bg-pink-600",
    },
    {
      id: "7",
      fullName: "Janhavi Patil",
      name: "Janhavi",
      profile: Janhavi,
      bigprofile: bigprofilejanhavi,
      roll: "UX Steategist",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
      bgColor: "bg-teal-600",
    },
    {
      id: "8",
      fullName: "Suhas Bandebuche",
      name: "Suhas",
      profile: Suhas,
      bigprofile: bigprofilesuhas,
      roll: "Interaction Designer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
      bgColor: "bg-orange-600",
    },
    {
      id: "9",
      fullName: "Sudipto Adhikary",
      name: "Sudipto",
      profile: Sudipto,
      bigprofile: bigprofilesudipto,
      roll: "Graphic Designer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
      bgColor: "bg-cyan-600",
    },
    {
      id: "10",
      fullName: "Sonali Umrikar",
      name: "Sonali",
      profile: Sonali,
      bigprofile: bigprofilesonali,
      roll: "JR. Graphic Designer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
      bgColor: "bg-violet-600",
    },
    {
      id: "11",
      fullName: "Sakshi Bodke",
      name: "Sakshi",
      profile: Gauri,
      bigprofile: bigprofilegauri,
      roll: "JR. Digital Marketer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
      bgColor: "bg-rose-600",
    },
    {
      id: "12",
      fullName: "Rohit patil",
      name: "Rohit",
      profile: Rohit,
      bigprofile: bigprofilerohit,
      roll: "Motion Designer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
      bgColor: "bg-emerald-600",
    },
    {
      id: "13",
      fullName: "Arjun Zadee",
      name: "Arjun",
      profile: Arjun,
      bigprofile: bigprofilearjun,
      roll: "SR. Graphic Designer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
      bgColor: "bg-amber-600",
    },
    {
      id: "14",
      fullName: "Chetana Bangar",
      name: "Chetana",
      profile: Chetana,
      bigprofile: bigprofilechetana,
      roll: "Graphic Designer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
      bgColor: "bg-lime-600",
    },
    {
      id: "15",
      fullName: "Nikita Sangle",
      name: "Nikita",
      profile: Nikita,
      bigprofile: bigprofilenikita,
      roll: "Graphic Designer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
      bgColor: "bg-indigo-600",
    },
    {
      id: "16",
      fullName: "Sakshi Jadhav",
      name: "Sakshi",
      profile: Sakshi,
      bigprofile: bigprofilesakshi,
      roll: "Full Stack Developer",
      thought:
        "we help you to unleash the power within your businesswe help you to unleash the power within your business",
      bgColor: "bg-fuchsia-600",
    },
  ]

  const [selectedMember, setSelectedMember] = useState(teamAll[0])
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleMemberClick = (member) => {
    setSelectedMember(member)
  }

  const handleScroll = (direction) => {
    const container = document.getElementById("team-scroll-container")
    const scrollAmount = 200

    if (direction === "left") {
      setScrollPosition(Math.max(scrollPosition - scrollAmount, 0))
      container.scrollTo({
        left: Math.max(scrollPosition - scrollAmount, 0),
        behavior: "smooth",
      })
    } else {
      const maxScroll = container.scrollWidth - container.clientWidth
      setScrollPosition(Math.min(scrollPosition + scrollAmount, maxScroll))
      container.scrollTo({
        left: Math.min(scrollPosition + scrollAmount, maxScroll),
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="h-[90vh] bg-purple-950 text-white ">
     
<div className="relative ">

{/* </div> */}
      <div className="flex  flex-col md:flex-row items-center justify-between px-16 mb-20 gap-8">
        <div className="w-full md:w-1/2 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMember.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
                 <h2 className="text-2xl font-bold mb-16">Our Team</h2>
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {selectedMember.roll}
              </motion.h1>

              <motion.h2
                className="text-xl md:text-2xl mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {selectedMember.fullName}
              </motion.h2>

              <motion.div
                className="flex items-center justify-center md:justify-start gap-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className="text-4xl text-purple-500">"</span>
                <p className="text-sm md:text-base max-w-md">{selectedMember.thought}</p>
                <span className="text-4xl text-purple-500">"</span>
              </motion.div>

              <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
                <button
                  onClick={() => handleScroll("left")}
                  className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-all"
                >
                  {/* <ChevronLeft size={20} /> */}
                </button>
                <button
                  onClick={() => handleScroll("right")}
                  className="bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-all"
                >
                  {/* <ChevronRight size={20} /> */}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full md:w-1/2 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMember.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src={selectedMember.bigprofile || "/placeholder.svg"}
                alt={selectedMember.fullName}
                className="w-full h-[90vh] object-cover rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className=" overflow-hidden mt-10" >
        <div
          id="team-scroll-container"
          className="flex gap-4 overflow-x-auto pb-6 py-10 absolute bottom-24 scrollbar-hide bg-orange-400 "
          style={{ scrollBehavior: "smooth" }} >
          {teamAll.map((member) => (
            <div
              key={member.id}
              onClick={() => handleMemberClick(member)}
              className={`flex-shrink-0  cursor-pointer transition-all duration-300 transform hover:scale-105  ${
                selectedMember.id === member.id ? "scale-105" : ""}`}>
              <div className={`relative rounded-full overflow-hidden w-20 h-20 md:w-24 md:h-24 ${member.bgColor} p-1`}>
                <img
                  src={member.profile || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-center mt-2">
                <p className="text-xs font-medium">{member.name}</p>
                <p className="text-xs text-gray-400">{member.roll}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    {/* </div> */}
    </div>
  )
}

export default OurTeam
