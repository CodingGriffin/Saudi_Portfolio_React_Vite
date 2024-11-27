import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next'
function Heritage() {
    const { t, i18n } = useTranslation();
    return (

        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
            <div className="relative flex  w-full h-[100vh]  flex-col md:justify-center items-center md:items-start justify-center  background_Heritage" >
                <div className="w-full h-full bg-black bg-opacity-40 top-0 right-0 z-10 absolute">
                </div>
                <div className={`flex flex-col md:mx-12 bg-dark/30 text-background z-10 lg:w-3/5 md:w-3/4 w-11/12 `}>
                    <h2 className='px-6 text-background md:mb-4 mb-1 xl:text-8xl md:text-6xl text-4xl  font-bold  md:pt-8 pt-4'>{t("HeritageTitle")}</h2>
                    <div className={` ${i18n.language == 'ar' ? " border-r-8" : "border-l-8"} border-[#fbaf3f] md:p-3 md:m-2 p-2 m-1 `}>
                        <p className='mb-1 xl:text-3xl lg:text-xl text-lg font-semibold' dangerouslySetInnerHTML={{ __html: t("Heritage") }}></p>
                        <p className='mb-4 xl:text-xl md:text-lg text-base text-background' dangerouslySetInnerHTML={{ __html: t("HeritageText") }}></p>
                        <p className='mb-1 xl:text-3xl md:text-xl text-lg font-semibold' dangerouslySetInnerHTML={{ __html: t("ConnectingHistory") }}></p>
                        <p className='mb-4 xl:text-xl md:text-lg text-base text-background' dangerouslySetInnerHTML={{ __html: t("ConnectingHistoryText") }}></p>
                        <p className='mb-1 xl:text-3xl md:text-xl text-lg font-semibold' dangerouslySetInnerHTML={{ __html: t("Past") }}></p>
                        <p className='mb-4 xl:text-xl md:text-lg text-base text-background' dangerouslySetInnerHTML={{ __html: t("PastText") }}></p>
                    </div>
                </div>
            </div >
        </ScrollAnimation >
    )
}

export default Heritage