import React from 'react'
import imghead from "../assets/Layer 12.png"
import img1 from "../assets/close1.png"
import img2 from "../assets/close2.png"
import img3 from "../assets/close3.png"
import img4 from "../assets/close4.png"
import img5 from "../assets/close5.png"
import img6 from "../assets/close6.png"
import img7 from "../assets/close7.png"
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'
function CloseRange() {
    const { t } = useTranslation();
    return (
        <>
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <div className="flex flex-col  items-center ">
                    <img loading="lazy" src={imghead} alt="" className='w-11/12 m-4' />
                    <div className="flex gap-4  w-11/12 my-2">
                        <div className='flex flex-col justify-center md:basis-1/2  '>
                            <div className="flex">
                                <div className=" flex flex-col gap-1 self-end mb-4 mx-2 basis-1/4 ">
                                    <div className='basis-1/2'>
                                        <img loading="lazy" src={img3} alt="" />
                                    </div>
                                    <div className='basis-1/2'>
                                        <img loading="lazy" src={img2} alt="" />
                                    </div>
                                </div>
                                <div className='flex  justify-center basis-10/12 rounded-3xl  '>
                                    <img loading="lazy" src={img1} alt="" className='rounded-3xl border-backgroundSecondary border-4 ' />
                                </div>
                            </div>
                            <div className="flex justify-end gap-1 mt-4">
                                <div className='basis-1/4'>
                                    <img loading="lazy" src={img6} alt="" />
                                </div>
                                <div className='basis-1/4'>
                                    <img loading="lazy" src={img5} alt="" />
                                </div>
                                <div className='basis-1/4'>
                                    <img loading="lazy" src={img4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center  md:basis-1/2'>
                            <img loading="lazy" src={img7} alt="" className='' />
                        </div>
                    </div>
                    <h2 className='bg-backgroundSecondary p-2 text-center my-4 xl:text-2xl md:text-lg text-lg text-background font-bold w-11/12'>{t("CloseRange")} </h2>
                </div>
            </ScrollAnimation>
        </>
    )
}

export default CloseRange