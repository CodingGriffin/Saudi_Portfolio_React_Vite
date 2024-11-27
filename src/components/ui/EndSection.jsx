import React from 'react'
import imghead from "@/assets/Layer 12.png"
import img1 from "@/assets/end1.png"
import img2 from "@/assets/end2.png"
import img3 from "@/assets/end3.png"
import img4 from "@/assets/end4.png"
import img5 from "@/assets/end5.png"
import img6 from "@/assets/end6.png"
import img7 from "@/assets/end7.png"
import ScrollAnimation from 'react-animate-on-scroll'
function EndSection() {
    return (
        <>
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <div className="flex flex-col lg:min-h-[100vh] min-h-[30vh] justify-center items-center ">
                    <img loading="lazy" src={imghead} alt="" className='w-11/12 m-4' />
                    <div className="flex justify-stretch items-stretch gap-2  w-11/12 my-2">
                        <div className='flex  flex-col gap-2  basis-1/4 '>
                            <div className="w-full flex items-stretch">
                                <img src={img1} alt="" loading="lazy" />
                            </div>
                            <div className="w-full flex items-stretch">
                                <img src={img2} alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className='flex  flex-col items-stretch justify-stretch gap-4  basis-1/2 '>
                            <div className="w-full flex items-stretch justify-stretch">
                                <img src={img3} alt="" loading="lazy" />
                            </div>
                            <div className="w-full flex items-stretch justify-stretch">
                                <img src={img4} loading="lazy" alt="" />
                            </div>
                        </div>
                        <div className='flex  flex-col items-stretch justify-stretch gap-4  basis-1/4 '>
                            <div className="flex items-stretch gap-x-2 w-full">
                                <div className="basis-1/2 flex items-stretch">
                                    <img src={img5} alt="" loading="lazy" />
                                </div>
                                <div className="basis-1/2 flex items-stretch">
                                    <img src={img6} alt="" className='' loading="lazy" />
                                </div>
                            </div>
                            <div className="w-full flex items-stretch justify-stretch">
                                <img src={img7} alt="" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <hr className='bg-backgroundSecondary p-4  my-4 text-background font-bold w-11/12' />
                </div>
            </ScrollAnimation >

        </>
    )
}

export default EndSection
/**     <div className='flex justify-center md:1/2 w-full'>
< img loading = "lazy" src = { img4 } alt = "" className = '' />
                        </div >
                        */
