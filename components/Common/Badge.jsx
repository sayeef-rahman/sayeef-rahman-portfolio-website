import React from "react";

const Badge = ({ title }) => {
  return (
    <span className="bg-gray-800 px-3 py-2 text-base text-Snow rounded-full">
      {title}
    </span>
  );
};

export default Badge;
