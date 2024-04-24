import React from "react";
import course from "../../data/course";

const CourseCheck = ({ course }) => (
  <div className="flex gap-1.5 justify-center self-start mt-2 items-center">
    {" "}
    <input
      id={course}
      type="checkbox"
      name="Course"
      value={course}
      className="box-border flex relative flex-col shrink-0 p-2.5 rounded border border-solid border-stone-300 my-auto"
    />{" "}
    <label
      htmlFor={course}
      className="text-xs shrink-0 ml-2"
    >
      {" "}
      <p>{course}</p>{" "}
    </label>{" "}
  </div>
);

const CourseCheckbox = () => {
    return (
      <div>
        <div className="flex flex-col pl-4">
          {" "}
          {course.map((course) => (
            <CourseCheck
              course={course}
            />
          ))}{" "}
        </div>{" "}
      </div>
    );
  };

export default CourseCheckbox;
