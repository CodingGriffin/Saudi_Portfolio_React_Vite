import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';
function Strategic() {
    const { t } = useTranslation();
    return (
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
            <div className="relative flex  w-full h-[100vh]  flex-col md:justify-center items-center md:items-start justify-center  background_Strategic" >
                <div className="w-full h-full bg-black bg-opacity-20 top-0 right-0 z-10 absolute">
                </div>
                <div className={`flex flex-col md:mx-12 px-4 py-4 bg-dark/50 text-background z-10 lg:w-3/5 md:w-3/4 w-11/12 `}>
                    <h2 className=' text-background mb-4 xl:text-8xl md:text-6xl text-4xl  font-bold  md:pt-8 pt-4'>{t("Strategic")}</h2>
                    <ol className=' list-inside list-disc marker:text-[#fbaf3f]  xl:text-3xl  lg:text-xl text-lg text-background'>
                        <li className='mb-2' dangerouslySetInnerHTML={{ __html: t("StrategicText1") }}></li>
                        <li className='mb-2' dangerouslySetInnerHTML={{ __html: t("StrategicText2") }}></li>
                        <li className='mb-2' dangerouslySetInnerHTML={{ __html: t("StrategicText3") }}></li>
                        <li className='mb-2' dangerouslySetInnerHTML={{ __html: t("StrategicText4") }}></li>
                        <li className='mb-2' dangerouslySetInnerHTML={{ __html: t("StrategicText5") }}></li>
                        <li className='mb-2' dangerouslySetInnerHTML={{ __html: t("StrategicText6") }}></li>
                        <li className='mb-2' dangerouslySetInnerHTML={{ __html: t("StrategicText7") }}></li>
                        <li className='mb-2' dangerouslySetInnerHTML={{ __html: t("StrategicText8") }}></li>
                        <li className='mb-2' dangerouslySetInnerHTML={{ __html: t("StrategicText9") }}></li>
                    </ol>
                </div>
            </div>
        </ScrollAnimation>
    )
}


export default Strategic