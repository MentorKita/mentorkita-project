import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import ProfileInfo from "../components/Fragments/ProfileInfo";
import mentors from "../data/mentors";
import LogoutBtn from "../components/Elements/Button/logoutBtn";
import MyMentorCard from "../components/Fragments/MyMentorCard";
import RatingBadge from "../components/Fragments/RatingBadge";
import ProfileUserCard from "../components/Fragments/ProfileUserCard";

const ProfileUser = () => {
  let { id } = useParams();
  const mentor = mentors.find((mentor) => mentor.id === parseInt(id));

  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
              <button type="button" onClick={toggleDropdown}>
                <img src="../svg/double-arrow.svg" alt="" className="" />
              </button>
              {isOpen && <ProfileUserCard />}
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
          </section>
          <section className="flex flex-col gap-2 px-4 py-2 text-xs rounded-md border border-solid border-gray-200">
            <ProfileInfo
              label={"About Me"}
              value={mentor.about}
              layout={"column"}
            />
          </section>
          <LogoutBtn />
        </div>
        <div>
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileUser;
