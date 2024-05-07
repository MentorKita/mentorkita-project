import React from "react";

function EditBtn({ onClick }) {
  return (
    <div
      className="justify-center px-3 py-px font-medium whitespace-nowrap bg-gray-100 rounded-full text-sm text-stone-900 text-opacity-80 cursor-pointer hover:bg-gray-300 transition-all"
      onClick={onClick}
    >
      Edit
    </div>
  );
}

export default EditBtn;
