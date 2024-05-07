import PropTypes from "prop-types";

const DisplaySkills = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2  px-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-2 py-1 text-[10px] font-medium bg-[#D4DBEC] text-textColor rounded-full"
        >
          {skill.label} {/* Mengakses properti label */}
        </span>
      ))}
    </div>
  );
};

DisplaySkills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired, // Perubahan prop-types untuk memeriksa apakah properti yang diperlukan ada
};

export default DisplaySkills;
