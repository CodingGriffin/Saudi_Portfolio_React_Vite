import React from 'react'
import imgbg from "../assets/Layer 12.png"
import team from "../assets/team.png"
import { useTranslation } from 'react-i18next';
import ScrollAnimation from 'react-animate-on-scroll';
function Team() {

    const { t } = useTranslation();
    return (
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
            <div className="flex flex-col min-h-[40vh] justify-center  items-center gap-2 my-2">
                <h2 className='bg-backgroundSecondary xl:text-3xl md:text-lg text-lg text-background font-bold text-center p-2 w-11/12'>{t("team")}</h2>
                <img loading="lazy" src={imgbg} alt="" className='mt-4 w-11/12' />
                <div className="flex items-center justify-center w-11/12">
                    <div className="flex  items-center  w-full justify-center">
                        <img src={team} alt="" className="w-full" />
                    </div>
                </div>
                <h2 className='bg-backgroundSecondary p-2 text-center my-4 xl:text-3xl md:text-lg text-lg text-background font-bold w-11/12'>{t("teamtext")} </h2>
            </div>
        </ScrollAnimation>
    )
}

export default Team