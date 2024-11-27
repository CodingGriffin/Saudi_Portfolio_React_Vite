import React from 'react'

import imgeone from "../assets/temp1.png";
import imgetwo from "../assets/temp2.png";
import imgethree from "../assets/Layer 1.png";
import { useTranslation } from 'react-i18next';
import ScrollAnimation from 'react-animate-on-scroll';
function Landing() {
    const { i18n, t } = useTranslation();

    return (
        <div className=' flex flex-col'>
            <div className="relative flex items-center w-full flex-col md:justify-center  justify-start  background mb-10" >
                <div className="w-full h-full bg-black bg-opacity-50 top-0 right-0 z-10 absolute">
                </div>
                <div className="text-background  flex flex-col translate-y-64 sm:translate-y-80 md:translate-y-0 px-4 z-20 relative text-center border-x-8 mx-8  border-[#f0d29c]  ">
                    <h2 className='font-bold xl:text-8xl md:text-7xl sm:text-6xl text-4xl w-full mb-2 px-2'>{t("Title")}</h2>
                    <h3 className='font-bold xl:text-3xl md:text-2xl sm:text-lg text-xs '>
                        {t("SecondTitle")}
                    </h3>
                </div>
                <div className="w-full justify-self-end flex items-center justify-center  md:translate-y-48 translate-y-96 relative text-background z-10">
                    <a href='' className='xl:text-xl md:text-lg text-base   text-center text-[#f0d29c] '>www.saudilegacy.com</a>
                </div>
                <div className="absolute z-10 left-4 md:left-10 top-12 ">
                    <img loading="lazy" src={imgeone} alt="" className='md:w-28 w-16 ' />
                </div>
                <div className="absolute z-10  md:left-10 left-4 sm:bottom-36 bottom-40">
                    <img loading="lazy" src={imgetwo} alt="" className='md:w-28 w-16' />
                </div>
            </div>
            {/**end page one */}
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <div className="flex justify-between items-center lg:min-h-[100vh] min-h-[30vh]  lg:flex-row flex-col relative  bg-background">
                    <div className={`basis-1/2 h-full flex flex-row ${i18n.language == "ar" ? "transform -scale-x-100" : ""} `}>
                        <img loading="lazy" src={imgethree} className='w-full h-full' alt="" />
                    </div>
                    <div className="lg:basis-2/3 basis-full items-center  px-4 flex justify-center flex-col  text-center mt-4 ">
                        <p className='w-3/4  font-bold  xl:text-4xl md:text-xl text-lg mb-4  '>
                            {t("quote")}
                        </p>
                        <p className='text-center w-10/12 xl:text-xl md:text-lg text-base'>{t("Prince")}</p>
                        <p className='text-center mb-4 w-full xl:text-xl md:text-lg  text-sm font-bold   decoration-backgroundSecondary underline underline-offset-8 decoration-8'>{t("MohammadbinSalman")}</p>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Landing