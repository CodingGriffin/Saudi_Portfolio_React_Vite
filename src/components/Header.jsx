import { Button } from "./ui/button"
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet"
import { Menu } from "lucide-react"
import logo from "../assets/logo.avif";
import { NavLink } from "react-router-dom"; import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/utils/i18n";
function Header() {
    const { i18n, t } = useTranslation();
    const onChangeLang = (e) => {
        const lang_code = e.target.value;

        i18n.changeLanguage(lang_code);
        console.log(i18n.language);
    };

    const LANGUAGES = [
        { label: "Arabic", code: "ar" },
        { label: "English", code: "en" },
    ];
    return (
        <div className="">
            <header className="flex items-center h-20 sticky z-30 w-full bg-background justify-center gap-4 border-b-2 shadow-md p-4">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col">
                        <nav className="flex flex-col gap-2 text-lg font-medium">
                            <NavLink to="/" className=" gap-2">
                                <img loading="lazy" src={logo} className="w-14 ml-2" />
                            </NavLink>
                            <NavLink
                                to="/"
                                className={({ isActive }) => {
                                    return `   capitalize text-secondary-foreground hover:underline hover:underline-offset-8  ${(isActive) && 'font-bold'}  px-3 py-2   transition-all `
                                }}>
                                {t("home")}
                            </NavLink>
                            <NavLink
                                to="/Services"
                                className={({ isActive }) => {
                                    return `   capitalize text-secondary-foreground hover:underline hover:underline-offset-8  ${(isActive) && 'font-bold'}  px-3 py-2   transition-all `
                                }}>
                                {t("service")}
                                {" "}
                            </NavLink>
                            <NavLink
                                to="/future-partrens"
                                className={({ isActive }) => {
                                    return `   capitalize text-secondary-foreground hover:underline hover:underline-offset-8  ${(isActive) && 'font-bold'}  px-3 py-2   transition-all `
                                }}>
                                {t("FuturePartners")}
                                {" "}
                            </NavLink>
                            <NavLink
                                to="/ethics-and-believes"
                                className={({ isActive }) => {
                                    return `   capitalize text-secondary-foreground hover:underline hover:underline-offset-8  ${(isActive) && 'font-bold'}  px-3 py-2   transition-all `
                                }}>
                                {t("ethics")}
                            </NavLink>
                            <NavLink
                                to="/heritage"
                                className={({ isActive }) => {
                                    return `   capitalize text-secondary-foreground hover:underline hover:underline-offset-8  ${(isActive) && 'font-bold'}  px-3 py-2   transition-all `
                                }}>
                                {t("heritage")}
                            </NavLink>
                            <NavLink
                                to="/important-links"
                                className={({ isActive }) => {
                                    return `   capitalize text-secondary-foreground hover:underline hover:underline-offset-8  ${(isActive) && 'font-bold'}  px-3 py-2   transition-all `
                                }}>
                                {t("importantlinks")}
                            </NavLink>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => {
                                    return `   capitalize text-secondary-foreground hover:underline hover:underline-offset-8  ${(isActive) && 'font-bold'}  px-3 py-2   transition-all `
                                }}>
                                {t("projects")}
                            </NavLink>
                            <select onChange={onChangeLang} className={`flex  ${i18n.language == "en" ? "flex-col" : "flex-col-reverse"} `}>
                                <option value={"en"} className={({ isActive }) => {
                                    return `
                                        hover:underline hover:underline-offset-8 
                                        ${(isActive) && 'underline underline-offset-8'}
                                        `
                                }}>
                                    English
                                </option>
                                <option value={"ar"} className={({ isActive }) => {
                                    return `
                                        hover:underline hover:underline-offset-8 
                                        ${(isActive) && 'underline underline-offset-8'}
                                        `
                                }}>
                                    Arabic
                                </option>
                            </select>
                        </nav>
                    </SheetContent>
                </Sheet>
                <nav className="flex items-center  md:justify-around justify-end  w-full p-2 text-sm font-medium lg:px-4">
                    <NavLink to="/" className=" md:mr-10 ">
                        <img loading="lazy" src={logo} className="w-14" />
                    </NavLink>
                    <div className="md:flex hidden items-center">
                        <NavLink
                            to="/"
                            className={({ isActive }) => {
                                return `   capitalize text-secondary-foreground  ${(isActive) && 'underline underline-offset-8'}  hover:underline hover:underline-offset-8  px-3    transition-all `
                            }}>
                            {t("home")}
                        </NavLink>
                        <NavLink
                            to="/Services"
                            className={({ isActive }) => {
                                return `   capitalize text-secondary-foreground  ${(isActive) && 'underline underline-offset-8'}  hover:underline hover:underline-offset-8  px-3    transition-all `
                            }}>
                            {t("service")}
                        </NavLink>
                        <NavLink
                            to="/future-partrens"
                            className={({ isActive }) => {
                                return `   capitalize text-secondary-foreground  ${(isActive) && 'underline underline-offset-8'}  hover:underline hover:underline-offset-8  px-3    transition-all `
                            }}>
                            {t("FuturePartners")}
                        </NavLink>
                        <NavLink
                            to="/ethics-and-believes"
                            className={({ isActive }) => {
                                return `   capitalize text-secondary-foreground  ${(isActive) && 'underline underline-offset-8'}  hover:underline hover:underline-offset-8  px-3    transition-all `
                            }}>
                            {t("ethics")}
                        </NavLink>
                        <NavLink
                            to="/heritage"
                            className={({ isActive }) => {
                                return `   capitalize text-secondary-foreground  ${(isActive) && 'underline underline-offset-8'}  hover:underline hover:underline-offset-8  px-3    transition-all `
                            }}>
                            {t("heritage")}
                            {" "}
                        </NavLink>

                        <NavLink
                            to="/important-links"
                            className={({ isActive }) => {
                                return `   capitalize text-secondary-foreground  ${(isActive) && 'underline underline-offset-8'}  hover:underline hover:underline-offset-8  px-3    transition-all `
                            }}>
                            {t("importantlinks")}
                            {" "}
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => {
                                return `   capitalize text-secondary-foreground  ${(isActive) && 'underline underline-offset-8'}  hover:underline hover:underline-offset-8  px-3    transition-all `
                            }}>
                            {t("projects")}
                            {" "}
                        </NavLink>
                        <select defaultValue={"en"} onChange={onChangeLang}>
                            {LANGUAGES.map(({ code, label }) => (
                                <option key={code} value={code} className={({ isActive }) => {
                                    return `
                                        hover:underline hover:underline-offset-8 
                                        ${(isActive) && 'underline underline-offset-8'}
                                        `
                                }}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </div>
                </nav>
            </header>
        </div >
    )
}

export default Header

/** 
    < NavLink to = "/" className = "Flex mr-3 gap-1" >
                            
    <img loading="lazy"src={logo} className="w-4 mb-1" />
                            
    <span className="">Market Ocean  </span>
                            
</ >
*/