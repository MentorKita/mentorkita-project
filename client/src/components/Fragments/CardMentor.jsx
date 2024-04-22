import React from "react";
import RatingBadge from "./RatingBadge";
import DetailBtn from "../Elements/Button/detailBtn";

const CardMentor = ({ mentor }) => {
  return (
    <div className="flex flex-col flex-wrap justify-center content-center px-5 py-3 mt-7 w-full bg-white rounded-md shadow-xl">
      <div className="flex gap-5">
        <RatingBadge mentor={mentor} />
        <img
          loading="lazy"
          src={mentor.image}
          alt={`${mentor.name} profile`}
          className="shrink-0 max-w-full aspect-square w-28"
        />
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="text-base font-semibold">{mentor.name}</div>
            <div className="text-xs font-normal">{mentor.title}</div>
          </div>
          <div className="flex flex-wrap gap-1 mt-4 whitespace-nowrap text-zinc-600">
            {mentor.skills.map((skill, index) => (
              <div
                key={index}
                className="justify-center px-2 py-1 rounded-2xl bg-slate-300 text-[8px]"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 text-justify text-black font-normal text-[8px] leading-3">
        {mentor.description}
      </div>
      <DetailBtn />
    </div>
  );
};

export default CardMentor;
