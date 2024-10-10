import React from "react";
import CardLayout from "../Common/CardLayout";

const CertificationCard = ({ data }) => {
  // {
  //   id: 1,
  //   title: "Marketing on Instagram",
  //   platform: "Linkedin Learning ",
  //   credentialId: "AW37Pn6kC41rN17HXN_wukr8UXzw",
  //   year: "Jun 2021",
  // }
  return (
    <CardLayout>
      <div className="card_stylings transition p-8">
        <div className="flex-initial text-[17px] text-Snow font-normal">
          {data.title}
        </div>
        <div className="text-base text-LightGray font-normal italic mt-1 ">
          {data.platform}
        </div>
        <div className="text-LightGray text-base opacity-50 font-normal italic">
          Credential ID:{data.credentialId}
        </div>
        <div className="text-LightGray text-base opacity-50 font-normal italic">
         {data.year}
        </div>
        {/* <div className="flex justify-between text-LightGray bg-DeepNightBlack w-full h-auto text-base rounded-full py-3 px-6 mt-4 font-normal opacity-50">
          <div>{data.year}</div> <div>{data.location}</div>
        </div> */}
      </div>
    </CardLayout>
  );
};

export default CertificationCard;
