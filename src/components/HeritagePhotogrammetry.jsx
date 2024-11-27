import React from 'react'
import imghead from "../assets/Layer 12.png"
import img1 from "../assets/Photogrammetry1.png"
import img2 from "../assets/Photogrammetry2.png"
import img3 from "../assets/Photogrammetry3.png"
import img4 from "../assets/Photogrammetry4.png"
import img5 from "../assets/Photogrammetry5.png"
import img6 from "../assets/Photogrammetry6.png"
import img7 from "../assets/Photogrammetry7.png"
import img8 from "../assets/Photogrammetry8.png"
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'

function HeritagePhotogrammetry() {
    const { t } = useTranslation();
    return (
        <>
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <div className="flex flex-col sm:min-h-[80vh]  min-h-[30vh] justify-center items-center ">
                    <img loading="lazy" src={imghead} alt="" className='w-11/12 m-4' />
                    <div className="flex flex-col justify-center   w-11/12 my-1">
                        <div className=' flex'>
                            <div className='flex justify-center w-1/2 '>
                                <img loading="lazy" src={img1} alt="" className='md:h-80 h-64 ' />
                            </div>
                            <div className='flex justify-center w-1/2 '>
                                <img loading="lazy" src={img2} alt="" className='md:h-80 h-64 ' />
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex justify-center w-1/2 '>
                                <img loading="lazy" src={img3} alt="" className='md:h-80 h-64 ' />
                            </div>
                            <div className='flex justify-center w-1/2 '>
                                <img loading="lazy" src={img4} alt="" className='md:h-80 h-64 ' />
                            </div>
                        </div>
                    </div>

                    <h2 className='bg-backgroundSecondary p-2 text-center my-1 xl:text-2xl md:text-lg text-lg text-background font-bold w-11/12'>{t("HeritagePhotogrammetry")} </h2>
                </div>
            </ScrollAnimation>
            {/**end page one ****/}
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <div className="flex flex-col justify-center lg:min-h-[100vh] min-h-[30vh] items-center ">
                    <img loading="lazy" src={imghead} alt="" className='w-11/12 m-2' />
                    <div className="flex   justify-center   w-11/12 my-1">
                        <div className=' flex flex-col  basis-1/2'>
                            <div className='flex justify-center w-10/12 '>
                                <img loading="lazy" src={img5} alt="" className='' />
                            </div>
                            <div className="flex w-10/12 justify-center gap-2">
                                <div className='flex justify-center w-1/4'>
                                    <img loading="lazy" src={img6} alt="" className='' />
                                </div>
                                <div className='flex justify-center w-3/4'>
                                    <img loading="lazy" src={img7} alt="" className='' />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center  h-full basis-1/2'>
                            <img loading="lazy" src={img8} alt="" className='w-1/2 ' />
                        </div>
                    </div>
                    <hr className='bg-backgroundSecondary p-4 md:text-base text-sm text-center my-1 text-background font-bold w-11/12 h-10' />
                </div>
            </ScrollAnimation>
        </>


    )
}
export default HeritagePhotogrammetry