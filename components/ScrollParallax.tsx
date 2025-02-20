import Image from 'next/image'
import Picture1 from "../public/images/image1.jpg";
import Picture2 from "../public/images/image2.jpg";
import Picture3 from "../public/images/image3.jpg";
import Picture4 from "../public/images/image4.jpg";
import Picture5 from "../public/images/image5.jpg";
import Picture6 from "../public/images/image6.webp";
import Picture7 from "../public/images/image7.webp";
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

const ScrollParallax = () => {

    const bg1 = useRef(null)
    const img_container = useRef(null)
    const img = useRef(null)
    const text1 = useRef(null)
    const text2 = useRef(null)
    const text3 = useRef(null)
    const text4 = useRef(null)
    const container = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: bg1.current,
                pin: bg1.current,
                pinSpacing: false,
                start: "top top",
                endTrigger: ".last",
                end: "bottom bottom"
            });
            
            gsap.set(container.current, {
                marginTop: -container.current.offsetHeight,
            });
            gsap.timeline({
                scrollTrigger: {
                    trigger: img_container.current,
                    pin: img_container.current,
                    scrub: 1,
                    start: "0% 0%"
                }
            })
            .to(img.current, {transform: "translateZ(2200px)"}, 0)
            .to(text1.current, {y: -800}, "<")
            .to(text2.current, {y: -800},"<")
            .to(text4.current, {y: -1000},"<")
            .fromTo(text4.current, 
                { yPercent: 100, scaleY: 2},
                { yPercent: 0, scaleY: 1},
            )
            .fromTo(container.current, 
                { yPercent: 100, scaleY: 2},
                { yPercent: 0, scaleY: 1},
            )
            .fromTo(text3.current, 
                { x: -1000, y: -900 },
                { x: 0, y: -900, duration: 1 }
            )
        })
        return () => ctx.revert()
    }, [])

    return (
        <div className='mt-44 relative'>
            <div ref={bg1} className="bg"></div>
            <section>
                <div ref={img_container} className='img-container perspective flex items-center justify-center h-screen w-screen'>
                    <Image
                        ref={img}
                        src={Picture7}
                        alt='image'
                        width={1000}
                        height={1000}
                        className='image m-auto'
                    />
                    <div className='absolute flex flex-col items-center justify-center'>
                        <h1 ref={text1} className='text-9xl text-white'>
                            <span className='text-stroke'>Explore</span> infinity
                        </h1>
                        <p ref={text2} className='opacity-50 w-48 text-sm text-center'>
                            {" "}
                            A Showcase of how small humanity is.
                        </p>
                    </div>
                </div>
                <div>
                    <h1 ref={text4} className='text-center font-thin text-9xl'>and finally</h1>
                    <h1 ref={text3} className='text-center font-thin text-9xl'>what if...</h1>
                </div>
                <div ref={container} className="container py-12 flex items-center justify-around flex-wrap">
                    <div className="col-1 flex flex-col translate-y-[20%] pb-8 gap-16">
                        <Image
                            src={Picture2}
                            alt='image2'
                            width={450}
                            height={350}
                        />
                        <Image
                            src={Picture4}
                            alt='image3'
                            width={450}
                            height={400}
                        />
                    </div>
                    <div className="col-2 flex flex-col gap-16">
                        <Image
                            src={Picture6}
                            alt='image2'
                            width={400}
                            height={400}
                        />
                        <Image
                            src={Picture3}
                            alt='image3'
                            width={400}
                            height={400}
                            className='last'
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ScrollParallax;