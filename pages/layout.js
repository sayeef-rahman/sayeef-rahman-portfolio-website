import Intro from "../components/Common/Intro";
import Nav from "../components/Common/Nav/Nav";
import { FaBars, FaMousePointer } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { useState } from "react";

export default function Layout({ children }) {
  const [intro, setIntro] = useState(false);

  return (
    <div className="h-screen lg:p-[0.8rem] flex flex-col font-circular">
      <div className="lg:hidden">
        <div className="bg-DeepNightBlack text-LightGray w-full h-10 flex items-center justify-between p-4 lg:hidden relative">
          <div
            className="icon flex items-center gap-x-2"
            onClick={(e) => setIntro(!intro)}
          >
            <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
              <SlOptionsVertical />
            </span>
            <div className="text-Snow absolute -right-1 -bottom-1">
              <FaMousePointer />
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative h-full justify-between gap-x-3">
        {/* left most side */}
        <div
          className={`w-72 ld:w-2/12 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden bg-DeepNightBlack shadow-2xl z-50 lg:flex flex-col  lg:relative ${
            intro ? "flex absolute" : "hidden"
          }`}
        >
          <Intro isOpen={intro} setIsOpen={setIntro} />
        </div>
        {/* overlay */}
        {intro && (
          <div
            onClick={(e) => setIntro(false)}
            className="fixed top-0 left-0  w-full h-full bg-black/50 backdrop-blur-[2px] z-40"
          ></div>
        )}

        {/* middle of screen */}
        <div className="w-full h-auto lg:w-10/12 shadow-2xl bg-DeepNightBlack relative overflow-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
