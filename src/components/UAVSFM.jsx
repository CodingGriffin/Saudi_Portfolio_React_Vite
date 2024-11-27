import React from 'react'
import imghead from "../assets/Layer 12.png";
import img1 from "../assets/HeritageDocumentation1.png"
import img2 from "../assets/uav1.png"
import img3 from "../assets/uav2.png"
import img4 from "../assets/uav3.png"
import { useTranslation } from 'react-i18next';
import ScrollAnimation from 'react-animate-on-scroll';
function UAVSFM() {
    const { t } = useTranslation();
    return (
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
            <div className="flex flex-col justify-center sm:min-h-[60vh] my-2 min-h-[30vh]  items-center ">
                <img loading="lazy" src={imghead} alt="" className='w-11/12 m-4' />
                <div className="flex justify-center items-center flex-row  w-11/12 my-2">
                    <div className="flex w-3/4 justify-center mr-2">
                        <img loading="lazy" src={img1} alt="" className=' sm:h-[490px] h-[350px]  ' />
                    </div>
                    <div className="flex flex-col justify-center h-96 items-baseline w-1/4  gap-2 m-0  ">
                        <div className='flex justify-center'>
                            <img loading="lazy" src={img2} alt="" className='w-52' />
                        </div>
                        <div className='flex justify-center'>
                            <img loading="lazy" src={img3} alt="" className='w-56' />
                        </div>
                        <div className='flex justify-center'>
                            <img loading="lazy" src={img4} alt="" className='w-56' />
                        </div>
                    </div>
                </div>
                <h2 className='bg-backgroundSecondary p-2 text-center my-4 xl:text-2xl md:text-lg text-lg text-background font-bold w-11/12'>{t("Uav")} </h2>
            </div>
        </ScrollAnimation>
    )
}


export default UAVSFM