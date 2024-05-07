import PropTypes from "prop-types";
import { useState } from "react";
import CheckBoxForm from "../Elements/Input/checkboxForm";
import DarkBlueButton from "../Elements/Button/darkBlueButton";

const ContactCard = ({ phone, email, location, courses }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const handleCourseChange = (event) => {
    const courseValue = event.target.value;
    if (event.target.checked) {
      setSelectedCourses([...selectedCourses, courseValue]);
    } else {
      setSelectedCourses(
        selectedCourses.filter((course) => course !== courseValue)
      );
    }
  };
  return (
    <main className="font-poppins">
      {/* fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-25 backdrop-blur-sm */}
      <section className="w-[375px] pb-6 p-4 font  bg-[#081C87] shadow-2xl text-white">
        <h1 className="text-2xl font-semibold mb-4">Choose Your Course</h1>
        <form action="" className="mb-12">
          <div className="py-2">
            {courses.map((course) => (
              <CheckBoxForm
                key={course}
                object={course}
                handleObjectChange={handleCourseChange}
                selectedObject={selectedCourses}
                customClass="w-[260px] border border-white text-black bg-white 
              mb-3 py-[2px] px-4 truncate overflow-hidden rounded-xl text-base"
              />
            ))}
          </div>
          <div className="flex gap-1">
            <div>
              <DarkBlueButton
                type="submit"
                customClass="py-1 px-7 w-full rounded-full bg-[#D00505]"
              >
                Cancel
              </DarkBlueButton>
            </div>
            <div>
              <DarkBlueButton
                type="submit"
                customClass="py-1 px-7 w-full rounded-full bg-[#27B2DD]"
              >
                Confirm
              </DarkBlueButton>
            </div>
          </div>
        </form>
        <h1 className="text-2xl font-semibold mb-2">Contact Information</h1>
        <p className="text-lg font-normal mb-1 text-[#C9C9C9]">
          Say something to start a live chat
        </p>
        {/* phone */}
        <div className="flex items-center justify-between p-1 mb-3 mt-4">
          <div className="flex items-center  w-72 gap-4">
            <img src="../../../svg/phone.svg" alt="phone svg" />
            <p className="text-[14px] font-normal truncate ...">+{phone}</p>
          </div>
          <a href={`https://Wa.me//${phone}`} target="_blank">
            <img src="../../../svg/arrow-right.svg" alt="arrow right" />
          </a>
        </div>
        {/* email */}
        <div className="flex items-center justify-between p-1 mb-3">
          <div className="flex items-center  w-72 gap-4">
            <img src="../../../svg/sharp-email.svg" alt="email svg" />
            <p className="text-[14px] font-normal truncate ...">{email}</p>
          </div>
          <a href={`mailto:${email}`} target="_blank">
            <img src="../../../svg/arrow-right.svg" alt="arrow right" />
          </a>
        </div>
        {/* location */}
        <div className="flex items-center justify-between p-1 mb-3">
          <div className="flex items-center gap-4 w-72 ">
            <img src="../../../svg/location-filled.svg" alt="location svg" />
            <p className="text-[14px] font-normal truncate ...">{location}</p>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${location}`}
            target="_blank"
          >
            <img src="../../../svg/arrow-right.svg" alt="arrow right" />
          </a>
        </div>
      </section>
    </main>
  );
};
ContactCard.propTypes = {
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactCard;
