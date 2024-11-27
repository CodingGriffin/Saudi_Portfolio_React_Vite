import React from 'react'
import { useTranslation } from 'react-i18next';
import img from "../assets/system2.png"
import ScrollAnimation from 'react-animate-on-scroll';
function System() {
    const { t, i18n } = useTranslation();
    return (
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
            <div className="relative flex  w-full flex-col font-semibold   justify-center  background_System py-4" >
                <div className="w-full h-full bg-black bg-opacity-40 top-0 right-0 z-10 absolute">
                </div>
                <div className="flex items-center justify-center md:flex-row flex-col">
                    <div className={`flex flex-col  text-background z-10 md:mt-10  mx-16 sm:w-1/2 w-10/12`}>
                        <h2 className=' text-background mb-10 xl:mb-14 xl:text-9xl sm:text-5xl  text-4xl font-bold  w-3/4'>{t("system")}</h2>
                        <ol className='list-inside list-disc marker:text-[#fbaf3f] xl:marker:text-6xl marker:text-4xl '>
                            <li className='xl:mb-6 mb-2  xl:text-5xl  lg:text-xl sm:text-lg text-base text-background'>{t("systemText1")}</li>
                            <li className='xl:mb-6 mb-2  xl:text-5xl  lg:text-xl sm:text-lg text-base text-background'>{t("systemText2")}</li>
                            <li className='xl:mb-6 mb-2  xl:text-5xl  lg:text-xl sm:text-lg text-base text-background'>{t("systemText3")}</li>
                            <li className='xl:mb-6 mb-2  xl:text-5xl  lg:text-xl sm:text-lg text-base text-background'>{t("systemText4")}</li>
                            <li className='xl:mb-6 mb-2  xl:text-5xl  lg:text-xl sm:text-lg text-base text-background'>{t("systemText5")}</li>
                            <li className='xl:mb-6 mb-2  xl:text-5xl  lg:text-xl sm:text-lg text-base text-background'>{t("systemText6")}</li>
                            <li className='xl:mb-6 mb-2  xl:text-5xl  lg:text-xl sm:text-lg text-base text-background'>{t("systemText7")}</li>
                        </ol>
                    </div>
                    <div className="flex md:justify-center justify-end  basis-1/2 z-20">
                        <img loading="lazy" src={img} alt="" className='lg:w-9/12 ' />
                    </div>
                </div>
            </div >
        </ScrollAnimation>
    )
}


export default System