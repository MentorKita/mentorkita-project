import React from "react";
import EditBtn from "../Elements/Button/editBtn";

const ProfileInfo = ({ label, value, layout }) => (
  <div className={`flex ${layout === "row" ? "justify-between" : "flex-col"}`}>
    <div
      className={`flex py-1 ${
        layout === "row" ? "flex-col gap-0.5" : "justify-between"
      }
      `}
    >
      <div className="font-semibold text-stone-900 text-opacity-70">
        {label}
      </div>
      {layout === "row" ? (
        <div className="font-medium text-neutral-800 text-opacity-90">
          {value}
        </div>
      ) : (
        <EditBtn />
      )}
    </div>
    {layout === "row" ? (
      <EditBtn />
    ) : (
      <div className="font-medium text-neutral-800 text-opacity-90">
        {value}
      </div>
    )}
  </div>
);

export default ProfileInfo;
