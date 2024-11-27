import React from 'react'
import { useTranslation } from 'react-i18next'
import imgone from "../assets/about.png";
import ScrollAnimation from 'react-animate-on-scroll';
function Abouts() {
    const { t, i18n } = useTranslation();
    const name = "John";
    return (
        <>
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <div className='relative text-backgroundSecondary flex lg:flex-row-reverse flex-col lg:justify-start   min-h-full justify-center  lg:my-40 my-6'>
                    <div className="flex w-full  bg-backgroundThird flex-col justify-center py-5 px-6 min-h-64 ">
                        <p className={` xl:text-9xl md:text-7xl text-4xl font-bold mb-2  md:w-1/2 w-3/4 `}  >
                            {t("about")}
                        </p>
                        <p className='lg:w-1/2 xl:text-3xl md:text-xl text-lg w-full  my-4' dangerouslySetInnerHTML={{ __html: t('aboutText') }}></p>
                    </div>
                    <div className={`flex justify-center items-center  z-10  my-6 lg:absolute xl:w-[600px] xl:-bottom-[80px] lg:w-[400px] lg:-bottom-[90px] w-full ${i18n.language == "en" ? "lg:right-8" : "lg:left-8"}`} >
                        <img loading="lazy" src={imgone} alt="" className='shadow-lg shadow-black/50  rounded-sm xl:w-3/4 lg:w-full md:w-9/12 w-3/4' />
                    </div>
                </div >
            </ScrollAnimation>
        </>
    )
}

export default Abouts