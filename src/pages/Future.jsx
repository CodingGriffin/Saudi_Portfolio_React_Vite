import React, { useEffect } from 'react'
import future1 from "../assets/future1.png"
import future1en from "../assets/future1en.png"

import future2 from "../assets/future2.png"
import future3 from "../assets/future3.png"
import future3en from "../assets/future3en.png"
import future4 from "../assets/future4.png"
import future5 from "../assets/future5.png"
import future5en from "../assets/future5en.png"
import future6 from "../assets/future6.png"
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'
function Future() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="flex flex-col  ">
                <img loading="lazy" src={i18n.language == "en" ? future1en : future1} alt="" />
                <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                    <img loading="lazy" src={future2} alt="" />
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                    <img loading="lazy" src={i18n.language == "en" ? future3en : future3} alt="" />
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                    <img loading="lazy" src={future4} alt="" />
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                    <img loading="lazy" src={i18n.language == "en" ? future5en : future5} alt="" />
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                    <img loading="lazy" src={future6} alt="" />
                </ScrollAnimation>

            </div >
        </>
    )
}

export default Future