
import React from 'react'
import imghead from "../assets/Layer 12.png"
import img1 from "../assets/Saudi1.png"
import img2 from "../assets/Saudi2.png"
import img3 from "../assets/Saudi3.png"
import img4 from "../assets/Saudi4.png"
import img5 from "../assets/Saudi5.png"
import img6 from "../assets/Saudi6.png"
import img7 from "../assets/Saudi7.png"
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'
function SaudiHeritage() {
    const { t } = useTranslation();
    return (
        <>
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <div className="flex flex-col sm:min-h-[80vh] min-h-[40vh] justify-center items-center ">
                    <div className="flex w-11/12 flex-col  justify-center gap-1 items-center  my-2">
                        <div className="w-full h-20 flex items-center justify-center   bg-backgroundSecondary  p-2">
                            <h2 className='bg-backgroundSecondary xl:text-3xl md:text-lg text-lg text-background font-bold text-center p-2 w-11/12'>{t("SaudiHeritage")}</h2>
                        </div>
                        <div className=' flex  gap-1  justify-stretch  w-full'>
                            <div className="basis-3/12 ">
                                <img loading="lazy" src={img1} alt="" className='w-full ' />
                            </div>
                            <div className="basis-3/12 flex items-stretch ">
                                <img loading="lazy" src={img2} alt="" className=' w-full' />
                            </div>
                            <div className="basis-6/12 flex items-stretch justify-stretch">
                                <img loading="lazy" src={img3} alt="" className='w-full' />
                            </div>
                        </div>
                        <div className=' flex flex-row  justify-center gap-1 items-star w-full'>
                            <div className="basis-2/12 flex items-stretch ">
                                <img loading="lazy" src={img4} alt="" className=' w-full ' />
                            </div>
                            <div className="basis-6/12 flex justify-stretch">
                                <img loading="lazy" src={img5} alt="" className='w-full  ' />
                            </div>
                            <div className="basis-2/12 flex items-stretch " >
                                <img loading="lazy" src={img6} alt="" className=' w-full' />
                            </div>
                            <div className="basis-2/12 flex items-stretch " >
                                <img loading="lazy" src={img7} alt="" className=' w-full' />
                            </div>
                        </div>
                    </div>
                    <h2 className='bg-backgroundSecondary p-2 text-center my-4 xl:text-2xl md:text-lg text-lg text-background font-bold w-11/12'>{t("SaudiHeritageTitle")} </h2>
                </div >
            </ScrollAnimation>
        </>)
}

export default SaudiHeritage


/**
 * <div className="flex gap-2 flex-col basis-3/12">
                               <div className="flex">
                                   <img loading="lazy" src={img1} alt="" className='w-full ' />
                               </div>
                               <div className="flex">
                                   <img loading="lazy" src={img4} alt="" className='w-full ' />
                               </div>
                           </div>
                           <div className="flex gap-3 flex-col basis-4/12">
                               <div className="flex">
                                   <img loading="lazy" src={img2} alt="" className='w-full ' />
                               </div>
                               <div className="flex basis-10/12">
                                   <img loading="lazy" src={img5} alt="" className='w-11/12 ' />
                               </div>
                           </div>
                           <div className="flex gap-2 flex-col basis-5/12">
                               <div className="flex">
                                   <img loading="lazy" src={img3} alt="" className='w-full ' />
                               </div>
                               <div className="flex ">
                                   <div className="flex">
                                       <img loading="lazy" src={img6} alt="" className='w-full ' />
                                   </div>
                                   <div className="flex">
                                       <img loading="lazy" src={img7} alt="" className='w-full ' />
                                   </div>
                               </div>
                           </div>
                       </div>

 */