import ReviewCard from "./ReviewCard";
import axios from "axios";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const ClientReviews = () => {
  const { isLoading, error, data } = useQuery("review", () =>
    axios
      .get("api/review")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );

  return (
    <div className="w-full px-4">
      <h1 className="text-2xl md:text-3xl text-Snow text-center my-16">
        CLIENTS REVIEWS
      </h1>
      <div className="overflow-x-auto w-full grid justify-items-center grid-flow-col gap-4 pb-4">
        {isLoading
          ? [1, 2, 3, 4, 5].map((index) => (
              <ParagraphSkeleton
                key={index}
                className="w-80 md:w-96 h-full p-4 md:p-8"
              />
            ))
          : data?.map((data, key) => <ReviewCard key={key} data={data} />)}
      </div>
    </div>
  );
};

export default ClientReviews;
