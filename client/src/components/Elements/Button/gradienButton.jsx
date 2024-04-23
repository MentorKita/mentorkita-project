import PropTypes from "prop-types";

const GradientButton = ({ children }) => {
  GradientButton.propTypes = {
    children: PropTypes.string,
  };
  return (
    <section className="text-right mt-4 pr-6">
      <a href="#" target="_blank">
        <button
          className="text-base p-1 py-[7px] rounded-[10px]"
          style={{
            backgroundImage: "linear-gradient(to right, #081C87, #27B2DD)",
            borderImage: "linear-gradient(to right, #081C87, #27B2DD)",
          }}
        >
          <span className="bg-white p-1 px-7 rounded-[8px] font-semibold text-[#081C87]
          hover:bg-transparent hover:text-white duration-300">
            {children}
          </span>
        </button>
      </a>
    </section>
  );
};

export default GradientButton;
