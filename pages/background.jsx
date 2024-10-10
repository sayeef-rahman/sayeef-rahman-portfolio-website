import axios from "axios";
import { useQuery } from "react-query";
import EducationCard from "../components/Background/EducationCard";
import ExperienceCard from "../components/Background/ExperienceCard";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";
import CertificationCard from "../components/Background/CertificationCard";

function Background() {
  const { isLoading, error, data } = useQuery("background", () =>
    axios
      .get("api/background")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );

  return (
    <div className="w-full mt-16">
      <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4">
        <div className="flex flex-col gap-y-4 order-2 md:order-1 md:mr-12">
          <div className="text-center text-2xl md:text-3xl text-Snow font-normal">
            EDUCATION
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
            <div className="text-center text-2xl md:text-3xl text-Snow font-normal">
              EXPERIENCE
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
      {/* Certification section */}
      <div className="px-4">
        <div className="my-16 text-2xl md:test-3xl text-Snow font-normal text-center">
          CERTIFICATION
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? [1, 2, 3].map((index) => (
                <ParagraphSkeleton
                  key={index}
                  className={"p-8 h-full w-full relative"}
                />
              ))
            : data &&
              data[2]?.certifications?.map((data, key) => (
                <CertificationCard key={key} data={data} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Background;
