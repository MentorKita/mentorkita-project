// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import TitleH2 from "../components/Elements/titleH2";
import CardMentee from "../components/Fragments/CardMentee";

const MentorDetail = () => {
  // object mentors
  const mentors = [
    {
      id: 1,
      name: "Alex Freshman",
      work: "Head of Phaselleus Vitae",
      photo: "../../../images/photo-mentor-1.png",
      linkedin: "https://www.linkedin.com/in/muhammad-abdanul-ikhlas/",
      location: "United States of Majalengka",
      rating: "5.0",
      reviewers: 196,
      skills: ["Enterpreneurship", "Marketing", "Advertising", "Branding"],
      about:
        "Alex Freshman is an exceptional mentor who brings a wealth of experience  and enthusiasm to the mentoring program. With a solid background in mention relevant field or industry, Alex demonstrates a genuine  passion for guiding and supporting mentees in their personal and  professional development.",
      experiences: [
        { year: 2019, desc: "Sunt nostrud amet sint do" },
        { year: 2020, desc: "Exercitation veniam consequat" },
        { year: 2021, desc: "Velit officia consequat duis" },
      ],
      mentees: [1, 2, 3],
    },
  ];

  // object mentee overview
  const menteesOverview = [
    {
      id: 1,
      name: "Alex Jr.",
      image: "../images/mentee-profile-1.png",
      rating: 5.0,
      comment:
        "Saya telah menggunakan platform Mentor Kita selama beberapa bulan, dan  pengalaman saya sungguh luar biasa. Sebagai seorang profesional yang  ingin terus berkembang, saya mencari sumber pembelajaran yang tidak  hanya informatif tetapi juga interaktif. Mentor Kita memberikan lebih  dari yang saya harapkan.",
    },
    {
      id: 2,
      name: "David Jr.",
      image: "../images/mentee-profile-2.png",
      rating: 4.0,
      comment:
        "Saya telah menggunakan platform Mentor Kita selama beberapa bulan, dan  pengalaman saya sungguh luar biasa. Sebagai seorang profesional yang  ingin terus berkembang, saya mencari sumber pembelajaran yang tidak  hanya informatif tetapi juga interaktif. Mentor Kita memberikan lebih  dari yang saya harapkan.",
    },
    {
      id: 3,
      name: "Jesse Jr.",
      image: "../images/mentee-profile-3.png",
      rating: 1.0,
      comment:
        "Saya telah menggunakan platform Mentor Kita selama beberapa bulan, dan  pengalaman saya sungguh luar biasa. Sebagai seorang profesional yang  ingin terus berkembang, saya mencari sumber pembelajaran yang tidak  hanya informatif tetapi juga interaktif. Mentor Kita memberikan lebih  dari yang saya harapkan.",
    },
  ];

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
        <section className="text-right mt-4 pr-6">
          <a href="#" target="_blank">
            <button
              className="text-base p-1 py-[7px] rounded-[10px]"
              style={{
                backgroundImage: "linear-gradient(to right, #081C87, #27B2DD)",
                borderImage: "linear-gradient(to right, #081C87, #27B2DD)",
              }}
            >
              <span className="bg-white p-1 px-7 rounded-[8px] font-semibold text-[#081C87]">
                Contact Now
              </span>
            </button>
          </a>
        </section>

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
        <section className="px-6">
          <TitleH2 title="Skills" />
          <div className="flex flex-wrap gap-2 mt-2">
            {mentor.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-[#D4DBEC] text-textColor rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="px-6 mt-10">
          <TitleH2 title="About" />
          <p className="font-light text-xs pr-4 text-textColor">
            {mentor.about}
          </p>
        </section>

        {/* EXPERIENCE */}
        <section className="mt-10 overflow-x-auto">
          <div className="px-6">
            <TitleH2 title="Experience" />
          </div>
          <section className="overflow-x-auto bg-[#ECF1FF]">
            <div className="flex">
              {mentor.experiences.map((experience, index) => (
                <div
                  key={index}
                  className="w-[151px] flex-shrink-0 flex items-center
                  odd:flex-col-reverse even:flex-col"
                >
                  {/* tahun */}
                  <div className="flex flex-col justify-center items-center h-24 w-full">
                    <span className="text-2xl font-bold text-[#3D5AF1]">
                      {experience.year}
                    </span>
                  </div>
                  {/* bulat yang biru */}
                  <div className="flex items-center justify-center my-2">
                    <div className="w-16 border border-blue-500"></div>
                    <img src="../../../svg/point.svg" alt="" />
                    <div className="w-16 border border-blue-500"></div>
                  </div>
                  {/* deskripsi pengalaman */}
                  <div className="w-full h-24 flex flex-col items-center text-wrap justify-center ">
                    <p className="text-sm text-center w-[90%] text-ellipsis overflow-hidden ...">
                      {experience.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>

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
