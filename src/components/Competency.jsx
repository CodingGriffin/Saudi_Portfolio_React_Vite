
import React from 'react'
import imghead from "../assets/Layer 12.png"
import img1 from "../assets/Competency1.png"
import img2 from "../assets/Competency2.png"
import img3 from "../assets/Competency3.png"
import img4 from "../assets/Competency4.png"
import img5 from "../assets/Competency5.png"
import img6 from "../assets/Competency6.png"
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'
function Competency() {
    const { t } = useTranslation();

    return (
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
            <div className="flex  flex-col  lg:min-h-[100vh] min-h-[30vh] justify-center items-center ">
                <div className='w-11/12'>
                    <img loading="lazy" src={imghead} alt="" className='w-full my-4' />
                </div>
                <div className=" w-11/12   bg-backgroundSecondary  p-2">
                    <h2 className='bg-backgroundSecondary xl:text-3xl md:text-lg text-lg text-background font-bold text-center p-2 w-11/12'>{t("Competency")}</h2>
                </div>
                <div className="flex  gap-1 justify-stretch items-stretch w-11/12 my-2">
                    <div className="flex flex-col gap-1 justify-center basis-1/6 ">
                        <div>
                            <img loading="lazy" src={img1} alt="" className='w-full ' />
                        </div>
                        <div>
                            <img loading="lazy" src={img2} alt="" className='w-full' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 items-stretch justify-between basis-1/6  ">
                        <div className='basis-full flex items-stretch '>
                            <img loading="lazy" src={img3} alt="" className='w-full h-full' />
                        </div>
                        <div className='basis-full flex items-stretch '>
                            <img loading="lazy" src={img4} alt="" className='w-full h-full ' />
                        </div>
                        <div className='basis-full flex items-stretch '>
                            <img loading="lazy" src={img5} alt="" className='w-full h-full' />
                        </div>
                    </div>
                    <div className=" basis-4/6 flex justify-stretch">
                        <img loading="lazy" src={img6} alt="" />
                    </div>
                </div>
                <hr className='h-9 bg-backgroundSecondary p-2 md:text-base text-sm text-center my-4 text-background font-bold w-11/12' />

            </div>
        </ScrollAnimation>
    )
}

export default Competency