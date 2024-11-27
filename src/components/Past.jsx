import React from 'react'
import imghead from "../assets/Layer 12.png"
import img1 from "../assets/Past1.png"
import img2 from "../assets/Past2.png"
import img3 from "../assets/Past3.png"
import img4 from "../assets/Past4.png"
import img5 from "../assets/Past5.png"
import img6 from "../assets/Past6.png"
import img7 from "../assets/Past7.png"
import { useTranslation } from 'react-i18next'
function Past() {
    const { t } = useTranslation();
    return (
        <>

            <div className="flex flex-col  justify-center sm:min-h-[100vh] min-h-[30vh] items-center ">
                <div className="flex w-11/12 flex-col  justify-center gap-1 items-center  my-2">
                    <div className="w-full h-20 flex items-center justify-center   bg-backgroundSecondary  p-2">
                        <h2 className='bg-backgroundSecondary xl:text-3xl md:text-lg text-lg text-background font-bold text-center p-2 w-11/12'>{t("PastAuthenticity")}</h2>
                    </div>
                    <div className=' flex flex-col justify-between gap-2 items-stretch w-full'>
                        <div className=' flex  gap-1  justify-stretch  basis-full'>
                            <div className="basis-3/12 flex  justify-stretch items-stretch">
                                <img loading="lazy" src={img1} alt="" className='w-full ' />
                            </div>
                            <div className="basis-3/12 flex items-stretch">
                                <img loading="lazy" src={img2} alt="" className='w-full ' />
                            </div>
                            <div className="basis-6/12 bg-green-800 h-full flex items-stretch">
                                <img loading="lazy" src={img3} alt="" className=' w-full' />
                            </div>
                        </div>
                        <div className=' flex  justify-stretch gap-1 items-stretch  basis-full'>
                            <div className="basis-4/12 flex justify-stretch ">
                                <img loading="lazy" src={img4} alt="" className='w-full  ' />
                            </div>
                            <div className="basis-3/12 flex justify-stretch items-stretch">
                                <img loading="lazy" src={img5} alt="" className=' w-full ' />
                            </div>
                            <div className="basis-3/12 flex items-stretch">
                                <img loading="lazy" src={img6} alt="" className=' w-full ' />
                            </div>
                            <div className="basis-2/12 flex items-stretch">
                                <img loading="lazy" src={img7} alt="" className='w-full ' />
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='bg-backgroundSecondary p-2 text-center my-4 xl:text-3xl md:text-lg text-lg text-background font-bold w-11/12'>{t("PastAuthenticityTitle")} </h2>
            </div >
        </>
    )
}

export default Past