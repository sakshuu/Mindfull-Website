import React from 'react'
import { main404 } from '../assets/img'

const Page404 = () => {
  return (
    <div className="min-h-screen w-full bg-[url('./../img/bg404.png')] bg-cover bg-no-repeat bg-center">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <img 
            src={main404} 
            className=" max-w-full h-auto" 
            alt="404 illustration" 
          />
          <h1 className="text-5xl  text-white mt-4">
            Oops, you've lost in space.
          </h1>
          <p className="text-xl text-white mt-4">
            We can't find the page that you're looking for.....
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page404