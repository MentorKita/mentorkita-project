import React from "react";

const SkillCheckbox = ({ name, value, label }) => (
  <div className="flex gap-1.5 justify-center self-start mt-2 whitespace-nowrap items-center">
    {" "}
    <input
      id={value}
      type="checkbox"
      name={name}
      value={value}
      className="box-border flex relative flex-col shrink-0 p-2.5 rounded border border-solid border-stone-300 my-auto"
    />{" "}
    <label
      htmlFor={value}
      className="box-border flex relative flex-col shrink-0 ml-2"
    >
      {" "}
      <p>{label}</p>{" "}
    </label>{" "}
  </div>
);

const RatingCheckbox = ({ value, label }) => (
  <div className="flex gap-1.5 justify-center items-center">
    {" "}
    <input
      id={value}
      type="checkbox"
      name="rating"
      value={value}
      className="box-border flex relative flex-col shrink-0 p-2.5 rounded border border-solid border-stone-300"
    />{" "}
    <label htmlFor={value} className="box-border flex relative shrink-0 gap-1">
      {" "}
      <p>{label}</p>{" "}
      <img
        loading="lazy"
        src="../svg/rating-star.svg"
        alt="Star icon"
        className="shrink-0 self-stretch my-auto aspect-square w-3"
      />{" "}
    </label>{" "}
  </div>
);

const skills = [
  { value: "advertising", label: "Advertising" },
  { value: "branding", label: "Branding" },
  { value: "backend", label: "Back-End Developing" },
  { value: "entrepreneurship", label: "Entrepreneurship" },
  { value: "frontend", label: "Front-End Developing" },
  { value: "marketing", label: "Marketing" },
  { value: "project-managering", label: "Project Managering" },
  { value: "ux-design", label: "UX Design" },
];

const ratings = [5, 4, 3, 2, 1];

function FilterMentor() {
  return (
    <section className="absolute flex flex-col justify-center py-2.5 pl-4 mt-12 z-10 text-sm text-black bg-gray-200 rounded-xl shadow-sm max-w-[367px]">
      {" "}
      <h2 className="text-base font-semibold">Skills</h2>{" "}
      {skills.map((skill) => (
        <SkillCheckbox
          key={skill.value}
          name="skills"
          value={skill.value}
          label={skill.label}
        />
      ))}{" "}
      <h2 className="mt-4 text-base font-semibold">Rating</h2>{" "}
      <div className="flex gap-5 justify-between py-1 pr-5 whitespace-nowrap">
        {" "}
        {ratings.map((rating) => (
          <RatingCheckbox
            key={rating}
            value={rating}
            label={rating.toString()}
          />
        ))}{" "}
      </div>{" "}
    </section>
  );
}

export default FilterMentor;
