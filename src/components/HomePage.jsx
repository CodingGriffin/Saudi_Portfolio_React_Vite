import React from "react";
import { Button } from "@/components/ui/button";
import imgeone from "../assets/temp1.png";
import imgetwo from "../assets/temp2.png";
import imgethree from "../assets/about.jpg";
import imagefour from "../assets/download-removebg-preview.png";
import logo from "../assets/logo.avif";

function HomePage() {
  return (
    <>
      <div className="relative flex items-center w-full flex-col justify-center background">
        <div className="w-full h-full bg-black bg-opacity-50 top-0 right-0 z-10 absolute"></div>
        <div className="text-background  w-1/2 flex flex-col justify-center  z-20 relative text-center border-x-8 p-4 border-background">
          <h2 className="font-bold text-7xl tracking-wider mb-2">
            Saudi Legacy
          </h2>
          <h3 className="font-normal  text-2xl tracking-wide">
            A Legacy that reflects our Authenticity
          </h3>
        </div>
        <div className="w-full justify-self-end flex items-center justify-center translate-y-48 relative text-background z-10">
          <a href="" className="text-sm  text-center ">
            www.saudilegacy.com
          </a>
        </div>
        <div className="absolute z-10  left-10 top-40">
          <img src={imgeone} alt="" className="w-28" />
        </div>

        <div className="absolute z-10  left-10 bottom-10">
          <img src={imgetwo} alt="" className="w-32" />
        </div>
      </div>
      <div className="flex justify-between relative bg-background my-5 py-5">
        <div className="basis-2/3 p-4 flex justify-center flex-col ">
          <p className="w-3/4 p-4 font-bold text-2xl mb-4 ">
            We take immense pride in the historical and cultural legacy of our
            Saudi, Arab and Islamic heritage. Our land was, and continues to be,
            known for its ancient civilizations and trade routs at the cross
            roads of global trade. This heritage has given our society the
            cultural richness and diversity it is known for today
          </p>
          <p className="text-center w-10/12 text-base font-semibold">
            HRH The Crown Prince
          </p>
          <p className="text-center w-10/12 text-base font-bold  ">
            Mohammad bin Salman bin Abdulaziz Al Saud
          </p>
          <a
            href=""
            className="text-sm w-10/12 mt-6  text-center  overline-offset-8  decoration-yellow-400 overline decoration-4">
            www.saudilegacy.com
          </a>
        </div>
        <div className="basis-1/2 h-full">
          <img src={imgethree} className="w-full h-full" alt="" />
        </div>
        <div className="absolute right-1/3 top-1/4 z-10 rounded-full bg-background  shadow-2xl shadow-black">
          <img src={imagefour} alt="" className="rounded-full w-60" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
