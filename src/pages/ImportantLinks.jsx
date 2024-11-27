import React from 'react'
import { useTranslation } from 'react-i18next'

function ImportantLinks() {
    const { t } = useTranslation();
    return (
        <div className="m-4 flex flex-col justify-center">

            <h2 className='font-bold text-6xl mb-2'>{t("links")}</h2>
            <div className="flex flex-col">
                <div className="flex flex-col gap-1 mb-4">
                    <h4 className="text-xl mb-2">{t("linkText1")}</h4>
                    <a className='text-xl px-2  underline underline-offset-1' href='    https://www.vision2030.gov.sa/'> https://www.vision2030.gov.sa/</a>
                    <h4 className="text-xl mb-2">{t("linkText2")}</h4>
                    <a className='text-xl px-2  underline underline-offset-1' href='https://www.visitsaudi.com/' > https://www.visitsaudi.com/</a>
                </div>
                <div className="flex flex-col gap-1 mb-4">
                    <h3 className='text-xl px-2 font-bold'>{t("linkText3")}</h3>
                    <h4 className="text-xl mb-2">{t("linkText4")}
                        <a className='text-xl px-2  underline underline-offset-1' href=" https://mt.gov.sa/"> https://mt.gov.sa/</a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText5")}
                        <a className='text-xl px-2  underline underline-offset-1' href="https://www.moc.gov.sa/">  https://www.moc.gov.sa/</a>
                    </h4>
                </div>
                <div className="flex flex-col gap-1 mb-4">
                    <h3 className='text-xl px-2 font-bold'>{t("linkText6")}</h3>
                    <h4 className="text-xl mb-2">{t("linkText7")}
                        <a className='text-xl px-2  underline underline-offset-1' href=" https://www.rcrc.gov.sa/">  https://www.rcrc.gov.sa/</a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText8")}
                        <a className='text-xl px-2  underline underline-offset-1' href=" https://rcmc.gov.sa/">      https://rcmc.gov.sa/</a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText9")}
                        <a className='text-xl px-2  underline underline-offset-1' href="https://www.mda.gov.sa/"> https://www.mda.gov.sa/</a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText10")}
                        <a className='text-xl px-2  underline underline-offset-1' href="https://www.asda.gov.sa/"> https://www.asda.gov.sa/</a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText11")}
                        <a className='text-xl px-2  underline underline-offset-1' href="    https://www.rcu.gov.sa/">     https://www.rcu.gov.sa/</a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText12")}
                        <a className='text-xl px-2  underline underline-offset-1' href="         https://www.gea.gov.sa/">          https://www.gea.gov.sa/</a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText13")}
                        <a className='text-xl px-2  underline underline-offset-1' href="         https://sdaia.gov.sa/ar/default.aspx">          https://sdaia.gov.sa/ar/default.aspx
                        </a>
                    </h4>
                </div>
                <div className="flex flex-col gap-1 mb-4 ">
                    <h3 className='text-xl px-2 font-bold'>{t("linkText14")}</h3>
                    <h4 className="text-xl mb-2">{t("linkText15")}
                        <a className='text-xl px-2  underline underline-offset-1' href="https://sgs.gov.sa/"> https://sgs.gov.sa/
                        </a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText16")}
                        <a className='text-xl px-2  underline underline-offset-1' href="https://www.geosa.gov.sa/ar/Pages/default.aspx"> https://www.geosa.gov.sa/ar/Pages/default.aspx                        </a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText17")}
                        <a className='text-xl px-2  underline underline-offset-1' href="https://sdaia.gov.sa/ar/default.aspx"> https://sdaia.gov.sa/ar/default.aspx   </a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText18")}
                        <a className='text-xl px-2  underline underline-offset-1' href="https://www.cst.gov.sa/ar/Pages/default.aspx"> https://www.cst.gov.sa/ar/Pages/default.aspx                        </a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText19")}
                        <a className='text-xl px-2  underline underline-offset-1' href="         https://heritage.moc.gov.sa/">          https://heritage.moc.gov.sa/                        </a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText20")}
                        <a className='text-xl px-2  underline underline-offset-1' href="         https://museums.moc.gov.sa/">          https://museums.moc.gov.sa/                        </a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText21")}
                        <a className='text-xl px-2  underline underline-offset-1' href="        https://archdesign.moc.gov.sa/">         https://archdesign.moc.gov.sa/                        </a>
                    </h4>
                </div>
                <div className="flex flex-col gap-1 mb-4">
                    <h3 className='text-xl px-2 font-bold '>{t("linkText22")}</h3>
                    <h4 className="text-xl mb-2">{t("linkText23")}
                        <a className='text-xl px-2  underline underline-offset-1' href=" https://whc.unesco.org/en/list/?type=natural">  https://whc.unesco.org/en/list/?type=natural</a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText24")}
                        <a className='text-xl px-2  underline underline-offset-1' href=" https://www.icomos.org/en">  https://www.icomos.org/en</a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText25")}
                        <a className='text-xl px-2  underline underline-offset-1' href=" https://www.iccrom.org/">  https://www.iccrom.org/</a>
                    </h4>
                    <h4 className="text-xl mb-2 ">{t("linkText26")}
                        <a className='text-xl px-2  underline underline-offset-1' href=" https://www.cipaheritagedocumentation.org/about/whatiscipa/">  https://www.cipaheritagedocumentation.org/about/whatiscipa/</a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText27")}
                        <a className='text-xl px-2  underline underline-offset-1' href=" https://www.getty.edu/conservation/">  https://www.getty.edu/conservation/</a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText28")}
                        <a className='text-xl px-2  underline underline-offset-1' href=" https://www.apti.org/">  https://www.apti.org/</a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText29")}
                        <a className='text-xl px-2  underline underline-offset-1' href="     https://www.sah.org/">      https://www.sah.org/</a>
                    </h4>
                    <h4 className="text-xl mb-2">{t("linkText30")}
                        <a className='text-xl px-2  underline underline-offset-1' href="https://www.panterra.ae/en/timelapse.php"> https://www.panterra.ae/en/timelapse.php
                        </a>
                    </h4>
                </div>
            </div>
        </div >
    )
}

export default ImportantLinks
