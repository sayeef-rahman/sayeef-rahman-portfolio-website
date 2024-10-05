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
    <div className="px-2 md:px-4 my-6">
      <p className="text-base font-bold text-Snow mb-4">My Projects</p>
      <div className="grid justify items-center grid-flow-row md:grid-cols-3 grid-rows-auto gap-4">
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
