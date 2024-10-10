import ExpertiseCard from "./ExpertiseCard";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const MyExpertise = () => {
  const { isLoading, error, data } = useQuery("expertise", () =>
    axios
      .get("api/expertise")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );

  return (
    <div className="px-4">
      <h1 className="text-2xl lg:text-3xl text-center text-Snow my-16">MY EXPERTISE</h1>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4">
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map((index) => (
              <ParagraphSkeleton key={index} className={"space-y-2 p-8"} />
            ))
          : data?.map((data, key) => <ExpertiseCard key={key} data={data} />)}
      </div>
    </div>
  );
};

export default MyExpertise;
