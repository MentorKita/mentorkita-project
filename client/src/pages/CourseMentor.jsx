import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import TitleH2 from "../components/Elements/titleH2";
import { mentees, alumniMentees } from "../data/mentees";
import CurrentCourseCard from "../components/Fragments/CurrentCourseCard";
import CardMentee from "../components/Fragments/CardMentee";

const CourseMentor = () => {
  return (
    <div >
      <Navbar />
      <div className="flex flex-col font-poppins min-h-screen">
      <div className="w-full h-[84px] flex pl-5 pt-6 pb-1 bg-gradient-to-r from-[#081C87] to-[#27B2DD]"></div>
      <main className="relative z-10 flex-grow bg-white">
        <section className="absolute z-10 left-2 -top-14  w-[95.6%] flex flex-col items-center rounded-[10px] bg-white border border-[#BDBDBD]">
          <TitleH2 title="Web Development Course" />
          {/* rating */}
          <div className="flex gap-1 items-center text-xs mt-6 mb-7">
            <img
              src="../../../svg/yellow-star.svg"
              alt="Star icon"
              className="w-5 h-5"
            />
            <p className="font-semibold text-textColor ps-1">5.0</p>
            <p className="font-normal text-textColor">196 Reviews</p>
          </div>

          <div className="w-full px-5 pb-12">
            {/* current course */}
            {mentees.map((mentee) => (
              <CurrentCourseCard key={mentee.id} {...mentee} />
            ))}
          </div>
        </section>
        <section className="mt-[520px] flex flex-col items-center px-9 mb-60">
          <TitleH2 title="Mentee Overview" />
          {/* mentee overview */}
          {alumniMentees.map((mentee) => (
            <CardMentee key={mentee.id} mentee={mentee} />
          ))}
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </div>
  );
};

export default CourseMentor;
