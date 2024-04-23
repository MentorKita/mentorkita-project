import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";

const CourseMentor = () => {
  return (
    <div className="flex flex-col font-poppins min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="w-full h-[84px] flex pl-5 pt-6 pb-1 bg-gradient-to-r from-[#081C87] to-[#27B2DD]"></div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CourseMentor;
