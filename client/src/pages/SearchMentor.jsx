import React from "react";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import CardMentor from "../components/Fragments/CardMentor";
import SearchBar from "../components/Fragments/SearchBar";
import ShowMoreBtn from "../components/Elements/Button/showMoreBtn";
import FilterMentor from "../components/Fragments/FilterMentor";

const mentorData = [
  {
    name: "Alex Freshman",
    title: "Head of Phaselleus Vitae",
    skills: ["Enterpreneurship", "Marketing", "Branding", "Advertising"],
    description:
      "Alex Freshman is an exceptional mentor who brings a wealth of experience and enthusiasm to the mentoring program. With a solid background in mention relevant field or industry, Alex demonstrates a genuine passion for guiding and supporting mentees in their personal and professional development.",
    image: "../images/mentor-photo-1.png",
    rating: "5.0",
    reviewCount: 196,
  },
  {
    name: "David Morganson",
    title: "Staff of Cube Games",
    skills: ["Enterpreneurship", "Marketing", "Branding", "Advertising"],
    description:
      "Alex Freshman is an exceptional mentor who brings a wealth of experience and enthusiasm to the mentoring program. With a solid background in mention relevant field or industry, Alex demonstrates a genuine passion for guiding and supporting mentees in their personal and professional development.",
    image:
      "../images/mentor-photo-2.png",
    rating: "4.9",
    reviewCount: 87,
  },
  {
    name: "Merry Juana",
    title: "Professional Developer",
    skills: ["Enterpreneurship", "Marketing", "Branding", "Advertising"],
    description:
      "Alex Freshman is an exceptional mentor who brings a wealth of experience and enthusiasm to the mentoring program. With a solid background in mention relevant field or industry, Alex demonstrates a genuine passion for guiding and supporting mentees in their personal and professional development.",
    image:
      "../images/mentor-photo-3.png",
    rating: "5.0",
    reviewCount: 196,
  },
  {
    name: "Luke Handson",
    title: "Staff of Cube Games",
    skills: ["Enterpreneurship", "Marketing", "Branding", "Advertising"],
    description:
      "Alex Freshman is an exceptional mentor who brings a wealth of experience and enthusiasm to the mentoring program. With a solid background in mention relevant field or industry, Alex demonstrates a genuine passion for guiding and supporting mentees in their personal and professional development.",
    image:
      "../images/mentor-photo-4.png",
    rating: "5.0",
    reviewCount: 196,
  },
  {
    name: "Mike Newwest",
    title: "Staff of Cube Games",
    skills: ["Enterpreneurship", "Marketing", "Branding", "Advertising"],
    description:
      "Alex Freshman is an exceptional mentor who brings a wealth of experience and enthusiasm to the mentoring program. With a solid background in mention relevant field or industry, Alex demonstrates a genuine passion for guiding and supporting mentees in their personal and professional development.",
    image:
      "../images/mentor-photo-5.png",
    rating: "5.0",
    reviewCount: 196,
  },
];

function SearchMentor() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="flex flex-col font-poppins min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white px-6">
        <div className="flex gap-5 justify-between py-5 text-sm bg-white text-neutral-400">
          <button onClick={toggleDropdown}>
            <img
              loading="lazy"
              src="../svg/filter-icon.svg"
              alt="Filter icon"
              className="shrink-0 my-auto aspect-square w-[33px]"
            />
          </button>
          {
            isOpen && (
              <FilterMentor />
            )
          }
          <SearchBar />
        </div>
        <div className="flex flex-col mt-3 w-full text-xs font-medium">
          <h2 className="self-start text-xl font-bold text-black">
            Recommended For You
          </h2>
          {mentorData.map((mentor, index) => (
            <CardMentor key={index} mentor={mentor} />
          ))}
          <ShowMoreBtn />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SearchMentor;
