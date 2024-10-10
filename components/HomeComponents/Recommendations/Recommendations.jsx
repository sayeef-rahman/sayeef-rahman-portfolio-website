import RecommendationCard from "./RecommendationCard";
import axios from "axios";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const Recommendations = () => {
  const { isLoading, error, data } = useQuery("recommendations", () =>
    axios
      .get("api/recommendations")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );

  return (
    <div className="px-4">
      <h1 className="text-2xl md:text-3xl text-Snow text-center my-16">RECOMMENDATIONS</h1>
      <div className="grid w-full h-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-6 pb-8">
        {isLoading
          ? [1, 2, 3, 4].map((index) => (
              <ParagraphSkeleton
                key={index}
                className={"p-8 h-full w-full relative"}
              />
            ))
          : data?.map((data, key) => (
              <RecommendationCard key={key} data={data} />
            ))}
      </div>
    </div>
  );
};

export default Recommendations;
