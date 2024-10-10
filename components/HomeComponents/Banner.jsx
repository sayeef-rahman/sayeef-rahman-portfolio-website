import Typewriter from "typewriter-effect";
import HeroImage from "../../public/images/heroSectionImage.png";
import Image from "next/image";
// import Typewriter from "./TypeWritter";

const Banner = () => {
  const strings = ["MERN Stack", "NexJs", "ReactJs", "React Native"];
  return (
    <div className="w-full px-4 rounded-lg flex flex-col items-center justify-evenly h-[550px] bg-gradient-bg bg-400% animate-gradient">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-around">
        <div className="w-full flex flex-col items-center gap-6 md:justify-between">
          <h1 className="text-2xl md:text-4xl x text-Snow font-thin text-center">
            Welcome
          </h1>
          <div className="flex flex-col justify-center items-center  font-openSans-regular text-Snow text-base font-light">
            <p className="text-Snow text-2xl">Passionate About </p>
            <p className="inline-block text-black text-center font-light text-2xl">
              {/* <Typewriter
                options={{
                  strings: ["MERN Stack", "NexJs", "ReactJs", "React Native"],
                  autoStart: true,
                  loop: true,
                }}
                className="text-4xl"
              /> */}
              {/* <Typewriter
                textArray={strings}
                className="text-black text-2xl mt-4"
              /> */}
            </p>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={HeroImage}
            alt="hero section image"
            className="w-full md:w-3/4"
          />
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
