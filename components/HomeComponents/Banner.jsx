import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import HeroImage from "../../public/images/heroSectionImage.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full px-40 rounded-lg flex flex-col items-center justify-around h-[550px] bg-gradient-bg bg-400% animate-gradient">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-50 flex flex-col items-center gap-6 md:justify-between">
          <h1 className="text-2xl md:text-4xl x text-Snow font-bold">
            Hello, Check This Outttttt!
          </h1>
          <div className="font-openSans-regular text-Snow text-base">
            <span className="text-Snow sm:text-xl xl:text-2xl font-bold">
              I am a{" "}
              <span className="inline-block">
                <Typewriter
                  options={{
                    strings: [
                      "MERN Stack Developer",
                      "NexJs Developer",
                      "ReactJs Developer",
                      "React Native Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
          </div>
          <Link
            to="intro"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            className="button"
          >
            Explore
          </Link>
        </div>
        <div className="w-50">
          <Image src={HeroImage} alt="hero section image" className="w-full" />
        </div>
      </div>

      {/* details in row */}
      {/* <div className="w-full grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between">
        <div className="card_stylings flex items-center gap-x-1">
          <span className="text-base md:text-lg text-Green font-bold">10+</span>
          <span className="text-base text-Snow">Completed Projects</span>
        </div>

        <div className="card_stylings flex items-center gap-x-1">
          <span className="text-base md:text-lg text-Green font-bold">8+</span>
          <span className="text-base text-Snow">Freelance Clients</span>
        </div>

        <div className="card_stylings flex items-center gap-x-1">
          <span className="text-base md:text-lg text-Green font-bold">5+</span>
          <span className="text-base text-Snow">Honors & Awards</span>
        </div>

        <div className="card_stylings flex items-center gap-x-1">
          <span className="text-base md:text-lg text-Green font-bold">10+</span>
          <span className="text-base text-Snow">Opensource Projects</span>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
