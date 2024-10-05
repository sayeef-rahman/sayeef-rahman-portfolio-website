import React from "react";
import CardLayout from "../../Common/CardLayout";
import Link from "next/link";

const RecommendationCard = ({ data }) => {
  return (
    <CardLayout>
      <div className="p-4 h-full flex flex-col card_stylings transition">
        <div className="flex items-center justify-center">
          <img
            src={data?.image}
            className="border-Green w-16 h-16  border-[3px] rounded-full m-0"
          />
        </div>
        <Link
          href={data?.linkednURL}
          target="_blank"
          rel="noreferrer"
          className="text-Snow text-center"
        >
          {data?.name}
        </Link>
        <p className="text-base text-LightGray italic mt-1 text-center">
          {data?.designation}
        </p>

        <div className="text-base mt-2 text-LightGray font-normal ">
          {data?.view}
        </div>
      </div>
    </CardLayout>
  );
};

export default RecommendationCard;
