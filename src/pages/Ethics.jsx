import React from 'react'
import { useTranslation } from 'react-i18next';
import image from "../assets/about.png"
import imagetwo from "../assets/mission2.png";

function Ethics() {
    const { t, i18n } = useTranslation();
    return (
        <div className="mx-2 gap-2 text-backgroundSecondary flex font-bold lg:flex-row flex-col justify-center items-center my-8 ">
            <div className="flex flex-col mx-2  w-2/3  gap-4 ">
                <h2 className='xl:text-6xl md:text-4xl  text-2xl  text-backgroundSecondary mb-10'>{t("believe")}</h2>
                <div className={`${i18n.language == 'ar' ? 'border-r-8' : 'border-l-8'} border-backgroundSecondary px-4 mt-4 `}
                >
                    <p className='text-[#c27139]   xl:text-4xl sm:text-2xl text-lg'>{t("think")}</p>
                    <p className='md:text-xl text-base' dangerouslySetInnerHTML={{ __html: t("thinkText1") }}></p>
                </div>
                <div className=' p-4 bg-[#baac9ea1]'>
                    <p className='text-[#c27139]  xl:text-4xl sm:text-2xl text-lg'>{t("think")}</p>
                    <p className='md:text-xl text-base text-backgroundSecondary' dangerouslySetInnerHTML={{ __html: t("thinkText2") }}></p>
                </div>
                <div className={`${i18n.language == 'ar' ? 'border-r-8' : 'border-l-8'} border-backgroundSecondary px-4 `}>
                    <p className='text-[#c27139]  xl:text-4xl sm:text-2xl text-lg'>{t("think")}</p>
                    <p className='md:text-xl text-base' dangerouslySetInnerHTML={{ __html: t("thinkText3") }}></p>
                </div>
            </div>
            <div className="flex justify-center items-center lg:w-1/4 w-1/2 shadow-lg  lg:my-0 my-8  ">
                <img loading="lazy" src={image} alt="" className='w-full rounded-md  ' />
            </div>
        </div >
    )
}

export default Ethics