import React from "react";
import CardLayout from "../Common/CardLayout";

const EducationCard = ({ data }) => {
  return (
    <CardLayout className="keepItEmpty">
      <div className="card_stylings transition px-8 py-10">
        <div className="flex justify-between">
          <div className="flex-initial text-[17px] text-Snow font-medium">
            {data.title}
          </div>
          <div className="flex justify-items-center justify-center text-LightGray bg-DeepNightBlack ml-2 w-32 lg:w-28 h-10 text-base rounded-full py-3 font-normal opacity-50 text-center">
            {" "}
            {data.year}{" "}
          </div>
        </div>
        <div className="text-base text-LightGray font-normal italic mt-1 ">
          {data.institute}
        </div>
        <div className="text-LightGray text-base font-normal mt-4 ">
          {data.detail}
        </div>
      </div>
    </CardLayout>
  );
};

export default EducationCard;
