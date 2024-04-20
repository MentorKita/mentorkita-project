import PropTypes from "prop-types";
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
          <div className="flex items-center">
            {[...Array(parseInt(rating))].map((_, i) => (
              <img
                key={i}
                src="../../../svg/yellow-star.svg"
                alt="star"
                className="w-4 h-4 mr-1"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="mt-3 text-xs italic pe-3">
        <p>{`"${comment}"`}</p>
      </section>
    </main>
  );
};

export default CardMentee;
