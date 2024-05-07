import React from "react";
import { useParams } from "react-router-dom";
import mentors from "../data/mentors";
import { mentees } from "../data/mentees";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import ProfileInfo from "../components/Fragments/ProfileInfo";
import Accordion from "../components/Fragments/Accordion";
import SkillsSection from "../components/Fragments/SkillsSection";
import FilterMentor from "../components/Fragments/FilterMentor";
import CourseCheckbox from "../components/Fragments/CourseCheckbox";
import ExperienceList from "../components/Fragments/ExperienceList";
import LogoutBtn from "../components/Elements/Button/logoutBtn";
import CurrentCourseCard from "../components/Fragments/CurrentCourseCard";
import ProfileUserCard from "../components/Fragments/ProfileUserCard";

function ProfileMentor() {
  let { id } = useParams();
  // Filter mentor based on ID
  const mentor = mentors.find((mentor) => mentor.id === parseInt(id));

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col font-poppins min-h-screen">
      <Navbar />
      <div className="w-full h-20 bg-gradient-to-r from-blue-900 to-sky-500"></div>
      <main className="flex-grow bg-white px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-4 px-8 py-4 -mt-12 bg-white rounded-xl border border-gray-200 border-solid shadow-sm">
          <section className="md:w-1/6 flex md:flex-col gap-5 justify-between self-center">
            <img
              src="../../../images/photo-mentor-1.png"
              alt="Profile Photo"
              className=""
            />
            <div className="flex flex-col justify-center px-3 py-5 items-center gap-2">
              <div className="text-xl font-bold">My Profile</div>
              <button type="button" onClick={toggleDropdown}>
                <img src="../svg/double-arrow.svg" alt="" className="" />
              </button>
              {isOpen && <ProfileUserCard />}
            </div>
          </section>
          <section className="md:w-1/3 flex flex-col gap-3">
            <div className="flex flex-col gap-2 px-4 py-2 text-xs rounded-md border border-solid border-gray-200">
              <ProfileInfo label={"Name"} value={mentor.name} layout={"row"} />
              <ProfileInfo
                label={"Email"}
                value={mentor.email}
                layout={"row"}
              />
              <ProfileInfo
                label={"Phone Number"}
                value={mentor.phone}
                layout={"row"}
              />
            </div>
            <div className="flex flex-col gap-2 px-4 py-2 text-xs rounded-md border border-solid border-gray-200">
              <ProfileInfo label={"Job"} value={mentor.work} layout={"row"} />
              <ProfileInfo
                label={"Location"}
                value={mentor.location}
                layout={"row"}
              />
            </div>
            <div>
              <Accordion
                title={"Edit Skill"}
                content={<FilterMentor addClass={"mt-2"} />}
              />
              <SkillsSection skills={mentor.skills} />
            </div>
            <div>
              <Accordion title={"Course List"} content={<CourseCheckbox />} />
            </div>
          </section>
          <section className="md:w-1/3 flex flex-col gap-3">
            <section className="flex flex-col gap-2 px-4 py-2 text-xs rounded-md border border-solid border-gray-200">
              <ProfileInfo
                label={"About Me"}
                value={mentor.about}
                layout={"column"}
              />
            </section>
            <section className="flex flex-col gap-2 px-4 py-2 text-xs rounded-md border border-solid border-gray-200">
              <ProfileInfo
                label={"Experience"}
                value={<ExperienceList experiences={mentor.experiences} />}
                layout={"column"}
              />
            </section>
            <LogoutBtn />
          </section>
        </div>
        <div className="max-w-xl mx-auto">
          <div className="flex justify-between mt-7 w-full font-medium">
            <div className="text-base font-semibold">My Mentee</div>
            <div className="text-sm text-sky-500">Show more</div>
          </div>
          <div className="w-full py-5">
            {mentees.map((mentee) => (
              <CurrentCourseCard key={mentee.id} {...mentee} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProfileMentor;
