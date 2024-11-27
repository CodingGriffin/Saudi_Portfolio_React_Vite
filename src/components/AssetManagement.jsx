import React from 'react'
import imghead from "../assets/Layer 12.png"
import img1 from "../assets/AssetManagement1.png"
import img2 from "../assets/AssetManagement2.png"
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'
function AssetManagement() {
    const { t } = useTranslation();
    return (
        <>
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <div className="flex flex-col items-center justify-center  min-h-[20vh] ">
                    <img loading="lazy" src={imghead} alt="" className='w-11/12 m-4' />
                    <div className="flex gap-4 w-11/12 justify-center items-center">

                        <div className='flex justify-center  basis-1/2  '>
                            <img loading="lazy" src={img1} alt="" className='h-1/2' />
                        </div>
                        <div className='flex justify-center basis-1/2  '>
                            <img loading="lazy" src={img2} alt="" className='h-1/2' />
                        </div>
                    </div>
                    <h2 className='bg-backgroundSecondary p-2 text-center my-4 xl:text-2xl md:text-lg text-lg text-background font-bold w-11/12'>{t("Asset Management")} </h2>
                </div>
            </ScrollAnimation>

        </>
    )
}

export default AssetManagement



