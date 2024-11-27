import React from 'react'
import imghead from "../assets/Layer 12.png"
import img1 from "../assets/HeritageDocumentation1.png"
import img2 from "../assets/HeritageDocumentation2.png"
import img3 from "../assets/HeritageDocumentation3.png"
import img4 from "../assets/HeritageDocumentation4.png"
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'
function HeritageDocumentation() {
    const { t } = useTranslation();
    return (

        <div className="flex flex-col   justify-center items-center ">
            <img loading="lazy" src={imghead} alt="" className='w-11/12 mx-2 my-2' />
            <div className="flex justify-center  w-11/12 my-1">
                <div className="flex w-3/4 justify-center items-center mt-2 mr-2">
                    <img loading="lazy" src={img1} alt="" className=' sm:h-[490px] h-[350px]  ' />
                </div>
                <div className="flex flex-col justify-center  h-[480px] items-center w-1/4  gap-2 m-0  ">
                    <div className='flex justify-center'>
                        <img loading="lazy" src={img2} alt="" className='w-48' />
                    </div>
                    <div className='flex justify-center'>
                        <img loading="lazy" src={img3} alt="" className='w-48' />
                    </div>
                    <div className='flex justify-center'>
                        <img loading="lazy" src={img4} alt="" className='w-48' />
                    </div>
                </div>
            </div>
            <h2 className='bg-backgroundSecondary p-2 text-center my-4 xl:text-3xl md:text-lg text-lg text-background font-bold w-11/12'>{t("HeritageDocumentation")} </h2>
        </div>
    )
}

export default HeritageDocumentation