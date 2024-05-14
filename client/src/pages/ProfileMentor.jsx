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
import LogoutBtn from "../components/Elements/Button/logoutBtn";
import CurrentCourseCard from "../components/Fragments/CurrentCourseCard";
import EditBtn from "../components/Elements/Button/editBtn";

const stats = [
  { value: 0, label: "Mentee" },
  { value: 2, label: "Course" },
  { value: 1, label: "Reviews" },
];

function Divider() {
  return <div className="border border-black border-solid aspect-[0.08]" />;
}

function Stat({ value, label }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="self-center text-xl font-semibold">{value}</div>
      <div className="text-xs text-center">{label}</div>
    </div>
  );
}

function ProfileMentor() {
  let { id } = useParams();
  // Filter mentor based on ID
  const mentor = mentors.find((mentor) => mentor.id === parseInt(id));

  const [isEditing, setIsEditing] = React.useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Logic to save changes
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Logic to cancel editing
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col font-poppins min-h-screen">
      <Navbar />
      <div className="w-full h-20 bg-gradient-to-r from-blue-900 to-sky-500"></div>
      <main className="flex-grow bg-white px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-4 px-8 py-4 -mt-12 bg-white rounded-xl border border-gray-200 border-solid shadow-sm">
          <section className="md:w-1/4 flex flex-col gap-4 items-center">
            <img
              src="../../../images/photo-mentor-1.png"
              alt="Profile Photo"
              className="w-28"
            />
            <div className="text-center font-medium">My Profile</div>
            {!isEditing && <EditBtn onClick={toggleEdit} />}
            <div className="flex gap-4 items-center">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <Stat {...stat} />
                  {index < stats.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </div>
            <div className="hidden md:block w-full">
              {isEditing ? (
                <div className="flex gap-4">
                  <button
                    onClick={handleSave}
                    className="flex justify-center items-center py-2.5 w-full text-xs font-semibold text-red-600 bg-white rounded-md border border-solid border-red-300 cursor-pointer hover:bg-red-500 hover:text-white transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex justify-center items-center py-2.5 w-full text-xs font-semibold text-blue-800 bg-white rounded-md border border-solid border-blue-300 cursor-pointer hover:bg-blue-600 hover:text-white transition-all"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <LogoutBtn />
              )}
            </div>
          </section>
          <section className="md:w-1/3 flex flex-col gap-3">
            <div className="flex flex-col gap-2 px-4 py-2 text-xs rounded-md border border-solid border-gray-200">
              <ProfileInfo
                label={"Name"}
                value={mentor.name}
                layout={"text-left"}
                editable={isEditing}
                inputType={"text"}
              />
              <ProfileInfo
                label={"Email"}
                value={mentor.email}
                layout={"text-left"}
                editable={isEditing}
                inputType={"text"}
              />
              <ProfileInfo
                label={"Phone Number"}
                value={mentor.phone}
                layout={"text-left"}
                editable={isEditing}
                inputType={"text"}
              />
            </div>
            <div className="flex flex-col gap-2 px-4 py-2 text-xs rounded-md border border-solid border-gray-200">
              <ProfileInfo
                label={"Job"}
                value={mentor.work}
                layout={"text-left"}
                editable={isEditing}
                inputType={"text"}
              />
              <ProfileInfo
                label={"Location"}
                value={mentor.location}
                layout={"text-left"}
                editable={isEditing}
                inputType={"text"}
              />
            </div>
            <div>
              <Accordion
                title={"Edit Skill"}
                content={<FilterMentor addClass={"mt-2"} />}
              />
              <SkillsSection
                skills={mentor.skills}
                customClass={`bg-[#D4DBEC] text-textColor`}
              />
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
                layout={"text-center"}
                editable={isEditing}
                inputType={"textarea"}
              />
            </section>
            <section className="flex flex-col gap-2 px-4 py-2 text-xs rounded-md border border-solid border-gray-200">
              <ProfileInfo
                label={"Experience"}
                value={mentor.experiences}
                layout={"text-center"}
                editable={isEditing}
                inputType={"textarea"}
              />
            </section>
            <div className="md:hidden">
              {isEditing ? (
                <div className="flex gap-4">
                  <button
                    onClick={handleSave}
                    className="flex justify-center items-center py-2.5 w-full text-xs font-semibold text-red-600 bg-white rounded-md border border-solid border-red-300 cursor-pointer hover:bg-red-500 hover:text-white transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex justify-center items-center py-2.5 w-full text-xs font-semibold text-blue-800 bg-white rounded-md border border-solid border-blue-300 cursor-pointer hover:bg-blue-600 hover:text-white transition-all"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <LogoutBtn />
              )}
            </div>
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
