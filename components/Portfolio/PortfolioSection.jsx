import { useQuery } from "react-query";
import BannerLayout from "../Common/BannerLayout";
import Footer from "../Footer";
import PortfolioCard from "./PortfolioCard";
import axios from "axios";
import ImageAndParagraphSkeleton from "../Common/ImageAndParagraphSkeleton";

const PortfolioSection = () => {
  const { isLoading, error, data } = useQuery("portfolio", () =>
    axios
      .get("api/portfolio")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );
  return (
    <div className="px-4">
      <h1 className="text-2xl lg:text-3xl text-center text-Snow my-16">MY PROJECTS</h1>
      <div className="grid justify items-center grid-flow-row md:grid-cols-3 grid-rows-auto gap-6">
        {isLoading
          ? [1, 2, 3, 4].map((index) => (
              <ImageAndParagraphSkeleton
                key={index}
                className={"w-full object-cover"}
              />
            ))
          : data?.map((data, key) => <PortfolioCard key={key} data={data} />)}
      </div>
    </div>
  );
};

export default PortfolioSection;
