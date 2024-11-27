import React from 'react'
import { useTranslation } from 'react-i18next'
import imgar from "../assets/service3.png"
import imgen from "../assets/serviceen.png"
function Services() {
    const { t, i18n } = useTranslation();
    return (
        <div className="relative  flex  w-full flex-col items-center md:justify-start justify-center  background_Services" >
            <div className="w-full h-full bg-white bg-opacity-50 top-0 right-0 z-10 absolute">
            </div>
            <div className='flex z-20 flex-col justify-center items-center md:w-3/4 w-10/12 text-center '>
                <h2 className='font-bold md:text-5xl text-3xl pb-6  px-4 pt-4  underline underline-offset-[14px] decoration-backgroundSecondary decoration-8 text-black '>{t("Capabilities")}</h2>
                <p className='md:text-3xl mb-2 text-black' dangerouslySetInnerHTML={{ __html: t("CapabilitiesText") }}></p>
            </div>
            <div className="flex justify-center md:items-start items-center ">
                <img loading="lazy" src={i18n.language == "en" ? imgen : imgar} alt="" className='max-w-full z-30' />
            </div>
        </div >
    )
}

export default Services