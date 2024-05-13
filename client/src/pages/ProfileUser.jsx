import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import ProfileInfo from "../components/Fragments/ProfileInfo";
import mentors from "../data/mentors";
import LogoutBtn from "../components/Elements/Button/logoutBtn";
import MyMentorCard from "../components/Fragments/MyMentorCard";
import RatingBadge from "../components/Fragments/RatingBadge";
import EditBtn from "../components/Elements/Button/editBtn";

const stats = [
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

const ProfileUser = () => {
  let { id } = useParams();
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
    <div >
      <Navbar />
      <div className="flex flex-col font-poppins min-h-screen">
      <div className="w-full h-20 bg-gradient-to-r from-blue-900 to-sky-500"></div>
      <main className="px-6 md:px-20">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-12 bg-white md:border md:border-gray-200 md:shadow-sm md:-mt-12 md:rounded-xl md:px-8">
          <div className="md:w-2/3 flex flex-col md:flex-row justify-center md:justify-between gap-4 px-8 md:px-0 py-4 -mt-12 md:mt-0 bg-white rounded-xl border border-gray-200 border-solid md:border-transparent shadow-sm md:shadow-none">
            <section className="md:w-1/3 flex flex-col gap-4 items-center">
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
            <section className="md:w-3/5 flex flex-col gap-3">
              <div className="flex flex-col gap-2 px-4 py-2 mt-3 text-xs rounded-md border border-solid border-gray-200">
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
                  label={"About Me"}
                  value={mentor.about}
                  layout={"text-center"}
                  editable={isEditing}
                  inputType={"textarea"}
                />
              </div>
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
          <section className="md:w-1/3">
            <div className="flex justify-between mt-7 w-full font-medium">
              <div className="text-base font-semibold">My Course</div>
              <a
                href="#"
                className="text-sm text-sky-500 cursor-pointer hover:text-sky-300 transition-all"
              >
                Show more
              </a>
            </div>
            <div className="w-full py-5">
              {mentors.map((mentor) => (
                <MyMentorCard
                  key={mentor.id}
                  {...mentor}
                  ratingBadge={
                    <RatingBadge
                      rating={mentor.rating}
                      reviewers={mentor.reviewers}
                    />
                  }
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
    </div>
  );
};

export default ProfileUser;
