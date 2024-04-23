import PropTypes from "prop-types";
const TitleH2 = ({ title }) => {
  TitleH2.propTypes = {
    title: PropTypes.string,
  };
  return (
    <div className="">
      <h2 className="font-medium text-[#020721] mt-5 mb-2 text-base">{title}</h2>
    </div>
  );
};

export default TitleH2;
