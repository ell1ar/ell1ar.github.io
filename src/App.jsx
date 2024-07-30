/* eslint-disable react/prop-types */
import Marquee from "react-double-marquee";

export default function App() {
    return (
        <div className="h-screen w-full flex items-center justify-center flex-col bg-gray-900">
            <h2 className="text-white font-bold text-xl">
                Fullstack Web Разработка
            </h2>

            <span className="text-white flex items-center gap-2 mt-1 text-sm">
                <span>Telegram</span>
                <a href="https://t.me/ell1arr" className="text-blue-500">
                    @ell1arr
                </a>
            </span>

            <div
                className="w-80 mt-10 relative"
                style={{
                    whiteSpace: "nowrap",
                }}
            >
                <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r z-10 from-gray-900"></div>
                <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l z-10 from-gray-900"></div>
                <Marquee delay={0} direction={"left"} childMargin={0}>
                    <MarqueeItem title={"Рулетки"} className="bg-sky-500" />
                    <MarqueeItem
                        title={"Игровые проекты"}
                        className="bg-indigo-500"
                    />
                    <MarqueeItem title={"Опенкейсы"} className="bg-blue-500" />
                    <MarqueeItem title={"Верстка"} className="bg-yellow-500" />
                    <MarqueeItem title={"Бэкенд"} className="bg-gray-500" />
                    <MarqueeItem title={"Фронтенд"} className="bg-orange-500" />
                    <MarqueeItem
                        title={"Базовый дизайн"}
                        className="bg-violet-600"
                    />
                </Marquee>
            </div>
        </div>
    );
}

function MarqueeItem({ title, className = "" }) {
    return (
        <span
            className={`${className} rounded-full mx-1 px-5 py-1 inline-block items-center justify-center text-white text-sm font-bold`}
        >
            {title}
        </span>
    );
}
