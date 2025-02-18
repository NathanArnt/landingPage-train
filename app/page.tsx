'use client'

import Image from 'next/image'
import Picture1 from "../public/images/image1.jpg";
import Picture2 from "../public/images/image2.jpg";
import Picture3 from "../public/images/image3.jpg";
import Picture4 from "../public/images/image4.jpg";
import Picture5 from "../public/images/image5.jpg";
import Picture6 from "../public/images/image6.jpg";
import Picture7 from "../public/images/image7.jpg";
import gsap from "gsap"
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScroll, useTransform, motion } from 'framer-motion'

const HomePage = () => {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }


  const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0,1], [0,4])
  return (
    <div className='overflow-hidden relative'>
      <div className='m-auto tracking-[20px] py-4 font-thin [writing-mode:vertical-lr]'>
        universe
      </div>
      <div className="container m-auto">
            <div className="sticky">
                <div className="el">
                    <motion.div style={{scale: scale4}} className="imageContainer">
                        <Image
                            src={Picture1}
                            fill
                            alt="image"
                            placeholder='blur'
                        />
                    </motion.div>
                </div>
            </div>
        </div>
      <div className="sliderContainer">
        <div ref={slider} className="slider m-0 uppercase">
          <p ref={firstText}>The stars mark out your path -</p>
          <p ref={secondText}>The stars mark out your path -</p>
        </div>
      </div>
      <div className='h-[200vh]'></div>
    </div>
  )
}

export default HomePage