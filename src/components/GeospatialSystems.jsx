import React from 'react'
import imghead from "../assets/Layer 12.png"
import img1 from "../assets/Geospatial1.png"
import img2 from "../assets/Geospatial2.png"
import img3 from "../assets/Geospatial3.png"
import img4 from "../assets/Geospatial4.png"
import img5 from "../assets/Geospatial5.png"
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'

function GeospatialSystems() {
    const { t } = useTranslation();
    return (
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
            <div className="flex flex-col  lg:min-h-[100vh] min-h-[30vh] items-center ">
                <img loading="lazy" src={imghead} alt="" className='w-11/12 m-4' />
                <div className="flex md:flex-row flex-col gap-4 w-11/12  my-2">
                    <div className='flex justify-center md:basis-1/2  basis-full '>
                        <img loading="lazy" src={img1} alt="" />
                    </div>
                    <div className='flex flex-wrap items-center justify-center md:basis-1/2 basis-full '>
                        <div className="basis-1/2">
                            <img loading="lazy" src={img2} alt="" />
                        </div>
                        <div className="basis-1/2">
                            <img loading="lazy" src={img3} alt="" />
                        </div>
                        <div className="basis-1/2">
                            <img loading="lazy" src={img4} alt="" />
                        </div>
                        <div className="basis-1/2">
                            <img loading="lazy" src={img5} alt="" />
                        </div>
                    </div>
                </div>
                <h2 className='bg-backgroundSecondary p-2 text-center my-4 xl:text-3xl md:text-lg text-lg text-background font-bold w-11/12'>{t("Geospatial")} </h2>
            </div>
        </ScrollAnimation>
    )
}


export default GeospatialSystems