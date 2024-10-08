import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import HeroImage from "../../public/images/heroSectionImage.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full px-4 rounded-lg flex flex-col items-center justify-evenly h-[550px] bg-gradient-bg bg-400% animate-gradient">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-evenly">
        <div className="!w-50 flex flex-col items-center gap-6 md:justify-between">
          <h1 className="text-2xl md:text-4xl x text-Snow font-thin">
            Hello, Welcome to my profile
          </h1>
          <div className="font-openSans-regular text-Snow text-base font-light">
            <span className="text-Snow sm:text-xl xl:text-2xl">
              I am a{" "}
              <span className="inline-block text-black">
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
          {/* <div className="font-openSans-regular text-Snow text-lg text-center w-80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            fugit quibusdam dolorem totam molestias nostrum! Optio a quo libero
            nihil sit odit, possimus doloribus fugiat recusandae numquam
            deleniti nobis inventore itaque, illum, ad quam? Sapiente molestiae
            odit nulla nesciunt sint rem alias quas ad quam?
          </div> */}
          {/* <Link
            to="intro"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            className="button"
          >
            Explore
          </Link> */}
        </div>
        <div className="!w-50">
          <Image src={HeroImage} alt="hero section image" className="w-75" />
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
