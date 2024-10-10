import axios from "axios";
import { useQuery } from "react-query";
import EducationCard from "../components/Background/EducationCard";
import ExperienceCard from "../components/Background/ExperienceCard";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

function Background() {
  const { isLoading, error, data } = useQuery("background", () =>
    axios
      .get("api/background")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );

  return (
    <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
      <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
        <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">
          Education
        </div>
        {isLoading
          ? [1, 2, 3].map((index) => (
              <ParagraphSkeleton
                key={index}
                className={"p-8 h-full w-full relative"}
              />
            ))
          : data &&
            data[0]?.eduCards?.map((data, key) => (
              <EducationCard key={key} data={data} />
            ))}
      </div>
      <div className="order-1 md:order-2">
        <div className="flex flex-col gap-y-4 md:ml-12">
          <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">
            Experience
          </div>

          {isLoading
            ? [1, 2, 3].map((index) => (
                <ParagraphSkeleton
                  key={index}
                  className={"p-8 h-full w-full relative"}
                />
              ))
            : data &&
              data[1]?.expCards?.map((data, key) => (
                <ExperienceCard key={key} data={data} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Background;
