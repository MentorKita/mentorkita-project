import React from "react";
import RatingBadge from "./RatingBadge";
import DetailBtn from "../Elements/Button/detailBtn";
import SkillsSection from "./SkillsSection";

const CardMentor = ({ mentor }) => {
  return (
    <div className="flex flex-col flex-wrap justify-center content-center px-5 py-3 mt-7 w-full bg-white rounded-md shadow-xl">
      <div className="flex gap-5">
        <RatingBadge rating={mentor.rating} reviewers={mentor.reviewers} />
        <img
          loading="lazy"
          src={mentor.photo}
          alt={`${mentor.name} profile`}
          className="shrink-0 max-w-full aspect-square w-28 self-center"
        />
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="text-base font-semibold">{mentor.name}</div>
            <div className="text-xs font-normal">{mentor.work}</div>
          </div>
          <SkillsSection skills={mentor.skills} />
        </div>
      </div>
      <div className="mt-3 text-justify text-black font-normal text-[8px] leading-3">
        {mentor.about}
      </div>
      <DetailBtn />
    </div>
  );
};

export default CardMentor;
