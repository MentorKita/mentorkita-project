import React from "react";

const RatingBadge = ({ mentor }) => {
  return (
    <div className="flex absolute gap-1 justify-center items-center w-20 h-5 bg-white rounded-2xl mt-1 ml-7">
      <img
        loading="lazy"
        src="../svg/rating-star.svg"
        alt="Star icon"
        className="shrink-0 aspect-square fill-yellow-400 w-3"
      />
      <div className="text-[10x]">
        <span className="font-semibold">{mentor.rating}</span>
        <span className="font-normal">{`(${mentor.reviewers})`}</span>
      </div>
    </div>
  );
};

export default RatingBadge;
