import InputForm from "../Elements/Input/inputForm";
import TextareaForm from "../Elements/Input/textareaForm";
import CheckBoxForm from "../Elements/Input/checkboxForm";
import Accordion from "./Accordion";
import DisplaySkills from "./DisplaySkills";
import skills from "../../data/skills";
import { useState } from "react";
import courses from "../../data/courses";
import DarkBlueButton from "../Elements/Button/darkBlueButton";
// import { konsultasi } from "../../services/konsultasi.service";

const FormRegisterMentor = () => {
  // di pake pas udah sambung keBE
  //   const [konsulFailed, setKonsulFailed] = useState("");
  //   const handleAddQuestion = (event) => {
  //     event.preventDefault();
  //     const data = {
  //       name: event.target.fullname.value,
  //       email: event.target.email.value,
  //       question: event.target.pertanyaan.value,
  //     };
  //     konsultasi(data, (status, res) => {
  //       if (status) {
  //         console.log(res);
  //       } else {
  //         setKonsulFailed(res.response.data);
  //       }
  //     });
  //   };

  // State untuk menyimpan skill yang dipilih
  const [selectedSkills, setSelectedSkills] = useState([]);

  // controller skills
  const handleSkillChange = (event) => {
    const skillValue = event.target.value;
    if (event.target.checked) {
      setSelectedSkills([...selectedSkills, skillValue]);
    } else {
      setSelectedSkills(selectedSkills.filter((skill) => skill !== skillValue));
    }
  };

  // State untuk menyimpan Course yang dipilih
  const [selectedCourses, setSelectedCourses] = useState([]);

  // controller Courses
  const handleCourseChange = (event) => {
    const courseValue = event.target.value;
    if (event.target.checked) {
      setSelectedCourses([...selectedCourses, courseValue]);
    } else {
      setSelectedCourses(selectedCourses.filter((course) => course !== courseValue));
    }
  };

  return (
    // <form onSubmit={handleAddQuestion}>
    <form onSubmit="" className="font-poppins">
      {/* Nama */}
      <section className="mb-8">
        <InputForm
          type="text"
          label="Name"
          placeholder="Your Name"
          name="name"
          requiredStatus={true}
        />
      </section>
      {/* no telepon */}
      <section className="mb-8">
        <InputForm
          type="tel"
          label="Phone"
          placeholder="e.g. 0822xxxxxxxx"
          name="phone"
          requiredStatus={true}
        />
      </section>
      {/* email */}
      <section className="mb-8">
        <InputForm
          type="email"
          label="Email"
          placeholder="e.g. example@gmail.com"
          name="email"
          requiredStatus={true}
        />
      </section>
      {/* job */}
      <section className="mb-8">
        <InputForm
          type="text"
          label="Job"
          placeholder="Your Job"
          name="job"
          requiredStatus={true}
        />
      </section>
      {/* location */}
      <section className="mb-8">
        <InputForm
          type="text"
          label="Location"
          placeholder="Your Location"
          name="location"
          requiredStatus={true}
        />
      </section>
      {/* choose skills */}
      <section className="mb-8">
        {/* memanggil dropdown skills */}
        <Accordion
          title={"Choose Skill"}
          content={
            <div className="my-2 pl-1 pr-4">
              <div className="bg-gray-200 py-2 px-4 rounded-lg">
                {skills.map((skill) => (
                  <CheckBoxForm
                    key={skill.value}
                    object={skill}
                    handleObjectChange={handleSkillChange}
                    selectedObject={selectedSkills}
                  />
                ))}
              </div>
            </div>
          }
        />
        <DisplaySkills
          skills={selectedSkills.map((value) => ({ value, label: value }))}
        />
      </section>
      {/* Add Course */}
      <section className="mb-8">
        {/* memanggil dropdown course */}
        <Accordion
          title={"Add Course"}
          content={
            <div className="my-2 pl-1 pr-4">
              <div className="py-2 px-4 rounded-lg">
                {courses.map((course) => (
                  <CheckBoxForm
                    key={course}
                    object={course}
                    handleObjectChange={handleCourseChange}
                    selectedObject={selectedCourses}
                  />
                ))}
              </div>
            </div>
          }
        />
      </section>
      {/* experience */}
      <section className="mb-10">
        <TextareaForm
          type="text"
          label="Experience"
          placeholder="Tell us about your experience"
          name="experience"
          requiredStatus={true}
        />
      </section>
      <section className="mb-8">
        <TextareaForm
          type="text"
          label="About"
          placeholder="Tell us about yourself"
          name="about"
          requiredStatus={true}
        />
      </section>
      {/* NOTE : nanti selanjutnya bisa di tambahkan handle on click untuk submit */}
      <DarkBlueButton type="submit" customClass="py-3 px-2 w-full">
        Register
      </DarkBlueButton>
    </form>
  );
};

export default FormRegisterMentor;
