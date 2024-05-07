import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import TitleH2 from "../components/Elements/titleH2";
import mentors from "../data/mentors";
import MyMentorCard from "../components/Fragments/MyMentorCard";

const CourseUser = () => {
  return (
    <div >
      <Navbar />
      <div className="flex flex-col font-poppins min-h-screen">
      <div className="w-full h-[84px] flex pl-5 pt-6 pb-1 bg-gradient-to-r from-[#081C87] to-[#27B2DD]"></div>
      <main className="relative z-10 flex-grow bg-white">
        <section className="absolute z-10 left-2 -top-14  w-[95.6%] flex flex-col items-center rounded-[10px] bg-white border border-[#BDBDBD]">
          <TitleH2 title="My Course" />
          <div className="w-full px-5 pb-10 mt-8">
            {/* my mentor */}
            {mentors.map((mentor) => (
              <MyMentorCard key={mentor.id} {...mentor} />
            ))}
          </div>
        </section>
        {/* section ini biar footer ada jarak dengan card */}
        <section className="mt-[520px] flex flex-col items-center px-9 mb-60"></section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </div>
  );
};

export default CourseUser;
