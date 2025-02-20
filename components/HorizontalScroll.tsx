'use client'

import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import Picture1 from "../public/images/image1.jpg";
import Picture2 from "../public/images/image2.jpg";
import Picture3 from "../public/images/image3.jpg";
import Picture4 from "../public/images/image4.jpg";
import Picture5 from "../public/images/image5.jpg";
import Picture6 from "../public/images/image6.webp";
import Picture7 from "../public/images/image7.webp";

const HorizontalScroll = () => {

    gsap.registerPlugin(ScrollTrigger)

  return (
    <div>
        <Image
            ref={img}
            src={Picture7}
            alt='image'
            width={1000}
            height={1000}
            className='image m-auto'
        />
    </div>
  )
}

export default HorizontalScroll