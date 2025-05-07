import React from 'react'

const AlternatingCards = ({ourWorks}) => {
    const cardColors = ['#E6BDFF', '#F8E8ED', '#D4E2FF', '#E6BDFF', '#F8E8ED']
      
  return <>
   <div>
      {ourWorks &&
        ourWorks.map((item, index) => (
          <div className="flex px-28 flex-col lg:flex-row gap-4 mt-10" key={index}>
            {/* Conditionally render text and images based on index */}
            {index % 2 === 0 ? (
              <>
                {/* Text content */}
                <div
                  className="lg:w-1/2 rounded-lg xl:p-7 md:p-4"
                  style={{ backgroundColor: cardColors[index % cardColors.length] }}
                >
                  <div className="xl:py-20 mb:py-2">
                    <div className="mb-4"> 
                      <img src={item.icon || "/placeholder.svg"} className="w-10 h-10 ml-4" alt="" />
                    </div>
                    <h2 className="xl:text-2xl md:text-xl md:mb-4 font-bold text-black xl:mt-8">{item.title}</h2>
                    <p className="xl:text-lg md:text-sm text-black leading-relaxed xl:mt-8">{item.desc}</p>
                  </div>
                </div>

                {/* Images grid with square boxes */}
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    {item.images.map((image, idx) => (
                      <div
                        key={idx}
                        className="relative overflow-hidden group"
                        style={{ paddingBottom: "100%" }} // Creates square container
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${item.title} example ${idx + 1}`}
                          className="absolute top-0 left-0 w-full h-full object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Images grid with square boxes (reversed order) */}
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    {item.images.map((image, idx) => (
                      <div
                        key={idx}
                        className="relative overflow-hidden group"
                        style={{ paddingBottom: "100%" }} // Creates square container
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${item.title} example ${idx + 1}`}
                          className="absolute top-0 left-0 w-full h-full object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text content (reversed order) */}
                <div
                  className="lg:w-1/2 rounded-lg xl:p-7 md:p-4"
                  style={{ backgroundColor: cardColors[index % cardColors.length] }}
                >
                  <div className="xl:py-20 mb:py-2">
                    <div className="mb-4">
                      <img src={item.icon || "/placeholder.svg"} className="w-10 h-10 ml-4" alt="" />
                    </div>
                    <h2 className="xl:text-2xl md:text-xl md:mb-4 font-bold text-black xl:mt-8">{item.title}</h2>
                    <p className="xl:text-lg md:text-sm text-black leading-relaxed xl:mt-8">{item.desc}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  </>
}

export default AlternatingCards