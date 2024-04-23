// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import { useState } from "react";
import TitleH2 from "../components/Elements/titleH2";
import CardMentee from "../components/Fragments/CardMentee";
import mentors from "../data/mentors";
import menteesOverview from "../data/menteesOverview";
import GradientButton from "../components/Elements/Button/gradienButton";
import SkillsSection from "../components/Fragments/SkillsSection";
import ExperienceSection from "../components/Fragments/ExperienceSection";

const MentorDetail = () => {
  let { id } = useParams();
  // Filter mentor based on ID
  const mentor = mentors.find((mentor) => mentor.id === parseInt(id));

  const [isSaved, setIsSaved] = useState(false);
  const onclick = () => {
    setIsSaved(!isSaved); // Toggle nilai state isSaved saat tombol diklik
  };

  return (
    <div className="flex flex-col font-poppins min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white">
        <header className="w-full flex pl-5 pt-6 pb-1 bg-gradient-to-r from-[#081C87] to-[#27B2DD]">
          <section className="relative w-[45%]">
            <img
              src={mentor.photo}
              alt={`${mentor.name} photo`}
              className="absolute top-0 left-0"
            />
          </section>
          <section className="w-full flex justify-between pr-1 pl-5">
            <div className="text-white pt-2 pb-1">
              <h2 className="text-base font-semibold">{mentor.name}</h2>
              <p className="text-sm font-normal">{mentor.work}</p>
            </div>
            <a
              href={mentor.linkedin}
              className="flex items-end pb-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../../svg/linkedin.svg" alt="Linkedin icon" />
            </a>
          </section>
        </header>

        {/* BUTTON CONTACT NOW */}
        <GradientButton>Contact Now</GradientButton>

        {/* BAGIAN RATING LOKASI DAN SAVE */}
        <section className=" mt-8 px-6">
          {/* rating */}
          <div className="flex gap-1 items-center">
            <img src="../../../svg/star.svg" alt="Star icon" />
            <p className="text-sm font-semibold text-textColor ps-1">
              {mentor.rating}
            </p>
            <p className="text-sm font-semibold text-textColor">
              ({mentor.reviewers} Reviews)
            </p>
          </div>
          {/* location */}
          <div className="flex gap-1 items-center mt-2">
            <img src="../../../images/location.png" alt="Location icon" />
            <p className="text-sm font-semibold text-textColor ps-[3px]">
              {mentor.location}
            </p>
          </div>
          {/* location */}
          <div className="flex gap-1 items-center mt-2">
            <img
              src={
                isSaved ? "../../../svg/save-fill.svg" : "../../../svg/save.svg"
              }
              alt="Save icon"
              id="save"
              className={`${isSaved ? "ps-[2px]" : "ps-[5px]"} cursor-pointer`}
              onClick={onclick} // Memanggil fungsi onclick saat tombol diklik
            />
            <p className="text-sm font-semibold text-textColor ps-[7px]">
              Save
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <SkillsSection skills={mentor.skills} />

        {/* ABOUT */}
        <section className="px-6 mt-10">
          <TitleH2 title="About" />
          <p className="font-light text-xs pr-4 text-textColor">
            {mentor.about}
          </p>
        </section>

        {/* EXPERIENCE */}
        <ExperienceSection experiences={mentor.experiences} />

        {/* MENTEE OVERVIEW */}
        <section className="px-6 mt-12 mb-8">
          <TitleH2 title="Mentee Overview" />
          {menteesOverview.map((mentee) => (
            <div key={mentee.id}>
              <CardMentee {...mentee} />
            </div>
          ))}
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MentorDetail;
