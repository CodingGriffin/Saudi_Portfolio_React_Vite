import React from 'react'
import imghead from "../assets/Layer 12.png"
import img1 from "../assets/DataIntegration1.png"
import img2 from "../assets/DataIntegration2.png"
import img3 from "../assets/DataIntegration3.png"
import img4 from "../assets/DataIntegration4.png"
import img5 from "../assets/DataIntegration5.png"
import img6 from "../assets/DataIntegration6.png"
import img7 from "../assets/DataIntegration7.png"
import img8 from "../assets/DataIntegration8.png"
import img9 from "../assets/DataIntegration9.png"
import img10 from "../assets/DataIntegration10.png"
import img11 from "../assets/DataIntegration11.png"
import img12 from "../assets/DataIntegration12.png"
import img13 from "../assets/DataIntegration13.png"
import img14 from "../assets/DataIntegration14.png"
import img15 from "../assets/DataIntegration15.png"
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'
function DataIntegration() {
    const { t } = useTranslation();
    return (
        <>
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <div className="flex flex-col lg:min-h-[100vh] min-h-[30vh] justify-center items-center ">
                    <img loading="lazy" src={imghead} alt="" className='w-11/12 m-4' />
                    <div className="flex flex-col justify-center gap-2  w-11/12 my-2">
                        <div className="flex justify-evenly">
                            <div className="flex basis-1/3 justify-between gap-y-2 flex-wrap ">
                                <div className='basis-1/2'>
                                    <img loading="lazy" src={img1} alt="" />
                                </div>
                                <div className='basis-1/2'>
                                    <img loading="lazy" src={img2} alt="" />
                                </div>
                                <div className='basis-1/2'>
                                    <img loading="lazy" src={img3} alt="" />
                                </div>
                                <div className='basis-1/2'>
                                    <img loading="lazy" src={img4} alt="" />
                                </div>
                            </div>
                            <div className="flex basis-2/3">
                                <img loading="lazy" src={img5} alt="" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="basis-1/4">
                                <img loading="lazy" src={img6} alt="" />
                            </div>
                            <div className="basis-1/4">
                                <img loading="lazy" src={img7} alt="" />
                            </div>
                            <div className="basis-1/4">
                                <img loading="lazy" src={img8} alt="" />
                            </div>
                            <div className="basis-1/4">
                                <img loading="lazy" src={img9} alt="" />
                            </div>
                        </div>
                    </div>
                    <h2 className='bg-backgroundSecondary p-2 text-center my-4 xl:text-2xl md:text-lg text-lg text-background font-bold w-11/12'>{t("DataIntegration")} </h2>
                </div>
            </ScrollAnimation>
            {/**end page one **/}
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <div className="flex flex-col lg:min-h-[100vh] min-h-[30vh] justify-center items-center ">
                    <img loading="lazy" src={imghead} alt="" className='w-11/12 m-4' />
                    <div className="flex  items-center flex-wrap justify-center  w-11/12 my-2">
                        <div className="md:basis-1/3 basis-1/2 bg-white">
                            <img loading="lazy" src={img10} alt="" />
                            <h3 className='font-bold text-center'>Dense cloud</h3>
                        </div>
                        <div className="md:basis-1/3 basis-1/2 bg-white">
                            <img loading="lazy" src={img11} alt="" />
                            <h3 className='font-bold text-center'>Mesh</h3>
                        </div>
                        <div className="md:basis-1/3 basis-1/2 bg-white">
                            <img loading="lazy" src={img12} alt="" />
                            <h3 className='font-bold text-center'>DEM and countour</h3>
                        </div>
                        <div className="md:basis-1/3 basis-1/2 bg-white">
                            <img loading="lazy" src={img13} alt="" />
                            <h3 className='font-bold text-center'>Texture</h3>
                        </div>

                        <div className="flex flex-wrap items-center md:basis-2/3 basis-full">
                            <div className="basis-1/2 bg-white">
                                <img loading="lazy" src={img14} alt="" />
                            </div>
                            <div className="basis-1/2 bg-white">
                                <img loading="lazy" src={img15} alt="" />
                            </div>
                            <h3 className='font-bold text-center  w-full'>Integration between laser scanner and Drone</h3>
                        </div>
                    </div>
                    <h2 className='bg-backgroundSecondary p-2 text-center my-4 xl:text-2xl md:text-lg text-lg text-background font-bold w-11/12'>{t("DataIntegration")} </h2>
                </div>
            </ScrollAnimation>
        </>


    )
}
export default DataIntegration