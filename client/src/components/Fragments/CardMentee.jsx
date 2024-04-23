import PropTypes from "prop-types";
import StarRating from "../Elements/starRating";
const CardMentee = ({ name, image, rating, comment }) => {
  CardMentee.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.string,
    comment: PropTypes.string,
  };

  return (
    <main className="font-poppins mt-4 w-full  shadow-cardShadow pt-[20px] px-3 pb-1 rounded-lg ">
      <section className="flex gap-4  ">
        <div className="w-[80px] h-[80px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="p-4 text-left">
          <p className="text-base font-bold">{name}</p>
          {/* menampilkan bintang sebanyak rating */}
          <StarRating rating={rating} />
        </div>
      </section>
      <section className="mt-3 text-xs italic pe-3">
        <p>{`"${comment}"`}</p>
      </section>
    </main>
  );
};

export default CardMentee;
