import React from "react";

function DetailBtn() {
  return (
    <a href="/mentorDetail/1" className="mt-3">
      <button
        type="button"
        className="w-full h-6 text-xs font-normal text-center text-white bg-primary rounded-md"
      >
        Detail
      </button>
    </a>
  );
}

export default DetailBtn;
