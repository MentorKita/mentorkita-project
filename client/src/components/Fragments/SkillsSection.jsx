import React from "react";
import PropTypes from "prop-types";

const SkillsSection = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-2 py-1 text-[8px] font-medium bg-[#D4DBEC] text-textColor rounded-full
          lg:text-base"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

SkillsSection.propTypes = {
  skills: PropTypes.array,
};

export default SkillsSection;
