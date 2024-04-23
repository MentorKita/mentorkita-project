import TitleH2 from "../Elements/titleH2";
import PropTypes from "prop-types";

const SkillsSection = ({ skills }) => {
  SkillsSection.propTypes = {
    skills: PropTypes.array,
  };
  return (
    <section className="px-6">
      <TitleH2 title="Skills" />
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-[8px] font-medium bg-[#D4DBEC] text-textColor rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
