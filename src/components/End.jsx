import React from 'react'

import imgeone from "../assets/temp1.png";
import imgetwo from "../assets/temp2.png";
import end from "../assets/end.png";
import { useTranslation } from 'react-i18next';
import ScrollAnimation from 'react-animate-on-scroll';
function End() {
    const { i18n, t } = useTranslation();

    return (
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
            <div>
                <div className={`relative  flex 2xl:min-h-[100vh] min-h-[150vh] w-full flex-col justify-center    bg-[#1e1d20] mb-10 ${i18n.language == "ar" ? "items-end" : "items-start"}`} >
                    <div className={`sm:w-1/2 w-3/4 flex items-center  ${i18n.language == "ar" ? "justify-start" : "justify-end"}`}>
                        <img src={end} alt="" className='lg:w-3/4 w-10/12 ' loading="lazy" />
                    </div>
                    <div className="absolute z-10  sm:right-14 right-10 top-10 ">
                        <img loading="lazy" src={imgeone} alt="" className='sm:w-44  w-24' />
                    </div>
                    <div className="absolute z-10  sm:right-14 right-10 bottom-10">
                        <img loading="lazy" src={imgetwo} alt="" className='sm:w-44  w-24' />
                    </div>
                    <div className="absolute z-10  sm:right-60 right-36 bottom-12">
                        <div className='flex sm:text-[11px] text-[6px] flex-col text-background text-right'>
                            <p className='font-bold'>{t("Title")}</p>
                            <p className='font-bold'>{t("Footer1")}</p>
                            <p className='font-bold'>{t("Footer2")}</p>
                            <p className='font-bold'>{t("Footer3")}</p>
                            <p className='font-bold'>+966 53 0635 925</p>
                            <p className='font-bold'>www.saudilegacy.com</p>
                            <p className='font-bold'>info@saudilegacy.com</p>
                            <p className='font-bold'>{t("Footer4")}</p>
                            <p className='font-bold'>{t("Footer5")}</p>
                        </div>
                    </div>

                </div>
            </div>
        </ScrollAnimation>
    )
}

export default End