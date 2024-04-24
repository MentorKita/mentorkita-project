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

function ProfileMentor() {
  let { id } = useParams();
  // Filter mentor based on ID
  const mentor = mentors.find((mentor) => mentor.id === parseInt(id));

  return (
    <div className="flex flex-col font-poppins min-h-screen">
      <Navbar />
      <div className="w-full h-20 bg-gradient-to-r from-blue-900 to-sky-500"></div>
      <main className="flex-grow bg-white px-6">
        <div className="flex flex-col flex-wrap justify-center gap-4 px-8 py-4 -mt-12 w-full bg-white rounded-xl border border-gray-200 border-solid shadow-sm">
          <div className="flex gap-5 justify-between self-center">
            <img
              src="../../../images/photo-mentor-1.png"
              alt="Profile Photo"
              className=""
            />
            <div className="flex flex-col justify-center px-3 py-5 items-center gap-2">
              <div className="text-xl font-bold">My Profile</div>
              <img src="../svg/double-arrow.svg" alt="" className="" />
            </div>
          </div>
          <section>
            <div className="flex flex-col gap-2 px-4 py-2 mt-3 text-xs rounded-md border border-solid border-gray-200">
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
            <div className="flex flex-col gap-2 px-4 py-2 mt-3 text-xs rounded-md border border-solid border-gray-200">
              <ProfileInfo label={"Job"} value={mentor.work} layout={"row"} />
              <ProfileInfo
                label={"Location"}
                value={mentor.location}
                layout={"row"}
              />
            </div>
          </section>
          <section>
            <Accordion
              title={"Edit Skill"}
              content={<FilterMentor addClass={"mt-2"} />}
            />
            <SkillsSection skills={mentor.skills} />
          </section>
          <section>
            <Accordion title={"Course List"} content={<CourseCheckbox />} />
          </section>
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
        </div>
        <div>
          <div className="flex gap-5 justify-between self-center mt-7 w-full font-medium max-w-[361px]">
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
