import React from "react";
import PropTypes from "prop-types";

const SkillsSection = ({ skills }) => {
  SkillsSection.propTypes = {
    skills: PropTypes.array,
  };
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-2 py-1 text-[8px] font-medium bg-[#D4DBEC] text-textColor rounded-full"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SkillsSection;
