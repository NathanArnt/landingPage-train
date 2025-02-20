'use client'

import ScrollParallax from "@/components/ScrollParallax"
import TextSlider from "@/components/TextSlider"
import { ArrowDown, ArrowDownCircle } from "lucide-react"

const HomePage = () => {

  return (
    <div className='overflow-hidden relative'>
      <div className="flex flex-col justify-center items-center">
        <div className='flex flex-col justify-center items-center text-6xl gap-8 pb-8 font-thin'>
          <p>u</p>
          <p>n</p>
          <p>i</p>
          <p>v</p>
          <p>e</p>
          <p>r</p>
          <p>s</p>
          <p>e</p>
        </div>
        <div className="hover:scale-110 transition ease-linear cursor-pointer border-2 p-2 rounded-full"><ArrowDown/></div>
      </div>
      <TextSlider/>
      <ScrollParallax/>
      <div className="h-screen">

      </div>
    </div>
  )
}

export default HomePage