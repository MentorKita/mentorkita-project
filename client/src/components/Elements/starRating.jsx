import PropTypes from "prop-types";

const StarRating = ({ rating }) => {
  StarRating.propTypes = {
    rating: PropTypes.string,
  };
  // Membuat array dengan panjang sesuai rating
  const starArray = [...Array(parseInt(rating))];

  return (
    <div className="flex items-center">
      {/* Membuat elemen img untuk setiap bintang dalam array */}
      {starArray.map((_, index) => (
        <img
          key={index}
          src="../../../svg/yellow-star.svg"
          alt="star"
          className="w-4 h-4 mr-1"
        />
      ))}
    </div>
  );
};

export default StarRating;
