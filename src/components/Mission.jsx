import React from 'react'
import { useTranslation } from 'react-i18next'
import image from "../assets/mission1.png";
import imagetwo from "../assets/Layer 12.png";
import ScrollAnimation from 'react-animate-on-scroll';
function Mission() {
    const { t, i18n } = useTranslation();
    return (
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
            <div className=" flex flex-col text-backgroundSecondary min-h-[100vh] font-bold justify-center items-center">
                <img loading="lazy" src={imagetwo} alt="" className=" w-11/12 my-4" />
                <div className="flex items-center justify-center md:mt-0 mt-4 md:flex-row flex-col w-11/12">
                    <div className="flex flex-col mx-2  md:w-1/2 w-3/4 ">
                        <p className={`xl:text-7xl sm:text-5xl text-2xl   mb-3 `}>{t("vision")}</p>
                        <p className=' xl:text-4xl sm:text-2xl text-base mb-8 ' dangerouslySetInnerHTML={{ __html: t("visionText") }}></p>
                        <p className={`xl:text-7xl sm:text-5xl text-2xl   mb-3 `}>{t("mission")}</p>
                        <p className='xl:text-4xl sm:text-2xl text-base mb-8 ' dangerouslySetInnerHTML={{ __html: t("missionText") }}></p>
                    </div>
                    <div className="flex justify-center items-center w-1/2 ">
                        <img loading="lazy" src={image} alt="" className='md:w-10/12 w-3/4 ' />
                    </div>
                </div>
                <hr className='bg-backgroundSecondary p-6 md:text-base text-sm text-center my-4 text-background  w-11/12 ' />
            </div>

        </ScrollAnimation>
    )
}

export default Mission