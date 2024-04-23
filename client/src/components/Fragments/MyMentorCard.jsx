import PropTypes from "prop-types";
import StarRating from "../Elements/starRating";

const CurrentCourseCard = ({ name, status, photo, rating, course }) => {
  CurrentCourseCard.propTypes = {
    name: PropTypes.string,
    status: PropTypes.string,
    photo: PropTypes.string,
    rating: PropTypes.string,
    course: PropTypes.string,
  };

  const ratingInNumber = Number(rating);

  return (
    <main
      className={`font-poppins mb-4 w-full shadow-cardShadow py-[10px] px-5 rounded-lg bg-[#ECF1FF] ${
        status === "not my mentor" ? "hidden" : "block"
      }`}
    >
      <section className="flex gap-6 py-2">
        {/* photo */}
        <div className="flex items-center">
          <img
            src={photo}
            alt={name}
            className="rounded-[10px] w-[100px]  object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-1 text-left">
          {/* nama */}
          <p className="text-base font-bold">{name}</p>
          {/* course */}
          <p className="text-[10px] font-normal mb-1">{course}</p>
          {/* Rating */}
          <div className={` ${status === "Done" ? "block" : "hidden"} mb-2`}>
            <StarRating rating={ratingInNumber} />
          </div>
          {/* status */}
          <div
            className={`${
              status === "Done" ? "hover:bg-[#081C87]" : "hover:bg-[#27B2DD]"
            }
            bg-[#081C87] text-white text-base font-bold w-36 py-2 text-center rounded-[10px]`}
          >
            {status}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CurrentCourseCard;
