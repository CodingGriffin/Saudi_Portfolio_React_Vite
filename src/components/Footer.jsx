import React from 'react'
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Instagram, Mail, PhoneCall } from 'lucide-react';
import { NavLink } from 'react-router-dom';
function Footer() {
    const { i18n, t } = useTranslation();
    return (
        <div className=" bg-backgroundSecondary">

            <div className="flex lg:flex-row flex-col items-start justify-between md:gap-0 gap-3 text-background  mx-8 p-8">
                <div className="flex flex-col items-start justify-start ">
                    <NavLink to={"/"} className='text-2xl'>"{t("Title")}"</NavLink>
                    <p className='text-lg'>{t("Footer")}</p>
                    <div className="flex justify-between   items-center my-2">
                        <NavLink to="https://www.instagram.com/" title='Go to instagram page' className={"px-1"}>
                            <Instagram />
                        </NavLink>
                        <NavLink to="mailto:adahlan@saudilegacy.com <adahlan@saudilegacy.com>" title='Go to Mail Page' className={"px-1"}>
                            <Mail />
                        </NavLink>
                        <NavLink to="https://api.whatsapp.com/send/?phone=%2B966505651988&text&type=phone_number&app_absent=0" title='Go to whatsapp Page' className={"px-1"}>
                            <PhoneCall />
                        </NavLink>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className='text-xl font-bold capitalize mb-2'>{t("contact")}</p>
                    <p>+9665-05651388</p>
                    <NavLink to="mailto:info@saudilegacy.com">info@saudilegacy.com</NavLink>
                </div>
                <div className="flex flex-col justify-between md:basis-1/3 basis-full w-11/12">
                    <lable className='text-xl font-bold capitalize mb-2'>{t("lable")}</lable>
                    <input type='email' placeholder="Your Email for Update" className='rounded-sm p-2 border-solid border-gray-100 border-2 mb-4 lg:w-3/4 w-full' />
                    <Button variant="primary" className=" w-3/4    rounded-lg  text-center">{t("button")}</Button>
                </div>
            </div >
            <div className="flex mx-8 px-8">
                <a className='text-background text-sm mx-2 pb-2' href="https://www.linkedin.com/in/roaa-shamia-967aaa24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">{t("dev")}</a>
            </div>
        </div >
    )
}

export default Footer