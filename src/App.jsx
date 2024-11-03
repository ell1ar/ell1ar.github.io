/* eslint-disable react/prop-types */
import Marquee from "react-double-marquee";
import { FaTelegramPlane, FaVk } from "react-icons/fa";
import "react-photo-view/dist/react-photo-view.css";
import ImageCaseloverLogo from "./assets/img/projects/caselover/logo.svg";
import ImageLovedropLogo from "./assets/img/projects/lovedrop/logo.png";
import ImageSkinzlyLogo from "./assets/img/projects/skinzly/logo.png";

export default function App() {
    return (
        <div className="relative min-h-screen max-w-screen-sm mx-auto justify-center items-center w-full px-2 py-10 flex flex-col font-['Gilroy']">
            <div className="whitespace-nowrap w-full">
                <Marquee delay={0} direction={"left"} childMargin={0}>
                    <MarqueeItem title={"Frontend"} />
                    <MarqueeItem title={"Backend"} />
                    <MarqueeItem title={"Figma to HTML"} />
                    <MarqueeItem title={"Gambling"} />
                    <MarqueeItem title={"Opencase"} />
                    <MarqueeItem title={"Design"} />
                </Marquee>
            </div>

            <h1 className="flex items-center w-full mt-10">
                <span className="text-black font-bold text-3xl">
                    <span className="text-[#484848]">{"<WEB>"}</span>
                    <span>DEVELOPER</span>
                </span>

                <div className="ml-auto flex items-center gap-2 mt-2 text-2xl">
                    <a
                        className="text-black text-xl duration-200 hover:scale-110"
                        href="https://t.me/ell1arr"
                        target="_blank"
                    >
                        <FaTelegramPlane />
                    </a>

                    <a
                        className="text-black duration-200 hover:scale-110"
                        href="https://vk.com/ell1ar"
                        target="_blank"
                    >
                        <FaVk />
                    </a>
                </div>
            </h1>

            <h2 className="text-md font-normals uppercase text-[#484848] w-full">
                Last projects:
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3">
                <LastProjectItem className="bg-[#222432]">
                    <img src={ImageLovedropLogo} alt="" />
                </LastProjectItem>

                <LastProjectItem className="bg-[#101117]">
                    <img src={ImageSkinzlyLogo} alt="" />
                </LastProjectItem>

                <LastProjectItem className="bg-[#15171f]">
                    <div className="flex gap-1 flex-col items-center">
                        <img className="w-16" src={ImageCaseloverLogo} alt="" />
                        <span className="text-white font-bold">CASELOVER</span>
                    </div>
                </LastProjectItem>
            </div>
        </div>
    );
}

function Block({ children, className = "" }) {
    return (
        <div
            className={`${className} aspect-[2/1] sm:aspect-[3/1] col-span-2 sm:col-span-3 relative`}
        >
            {children}

            {/* <div className="absolute top-0 left-0 place-content-start border-t z-[-1] border-[var(--color-border)] border-r grid grid-cols-2 sm:grid-cols-3 w-full">
                <div className="w-full col-span-1 border-l border-[var(--color-border)] aspect-square"></div>
                <div className="w-full col-span-1 border-l border-[var(--color-border)] aspect-square"></div>
                <div className="w-full col-span-1 border-l border-[var(--color-border)] aspect-square"></div>
            </div> */}
        </div>
    );
}

function LastProjectItem({ children, className = "" }) {
    return (
        <div className={`aspect-square col-span-1 relative w-full p-1`}>
            <div
                className={`${className} p-4 w-full rounded-2xl h-full flex flex-col items-center justify-center`}
            >
                {children}

                <div className="absolute bottom-3 truncate left-3 text-white text-xs">
                    #opencase
                </div>
            </div>
        </div>
    );
}

function MarqueeItem({ title, className = "" }) {
    return (
        <span
            className={`${className} bg-black rounded-full mx-1 px-5 py-1 inline-block items-center justify-center text-white text-sm font-bold`}
        >
            {title}
        </span>
    );
}
