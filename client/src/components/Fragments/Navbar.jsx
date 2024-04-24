import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white flex flex-row h-[40px] bg-gradient-to-l from-[rgb(229,239,239)] to-[#01575C] ">
        <p className="text-black py-[10px] px-[15px] mr-[210px]"><img className="size-6" src="https://s3-alpha-sig.figma.com/img/745f/92ed/644aadfbd63ae1f815f276a605048093?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMtUBtPjlzKFBgwhlM9jba5OSqEQoHRbkrG5khpKzTViaKCTdNiilM0VzThq3IkD7jngUTDJx2MuZN5q4CT1x5HQaIkE6aF3J31iQ9659f8pQjK0iktQcLsgVOa2XRq8OUu2bGQrFE9oiu~sTSlkMoLIbe9cyuKPp~X6NKIMw~X8H4~myFb2G4evQaSJ9lHLk5Za7d-Xep-jqiefsotJcIWtgFd7rUJ0pC05EN5wguJkIr7zHkdlskuY~ClTTu47nDXysO19qLMKR2azXxeFSIyfWmVa23eOz6~AGD2yDKnLIYhMem8qZnYF1FhFqcT9Hdy9VQOU1kikZ6Xp9yMZXg__" alt="" /></p>
        <button onClick={toggleMenu} className="block md:hidden"><p className="text-black p-[10px]"><img className="size-6" src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png" alt="" /></p></button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:block w-[180px] h-[500px] bg-white ml-[145px] border-2 rounded-lg absolute z-20`} >
        <nav className="w-[180px] h-[170px]">
          <ul className="flex flex-col">
            <li className="text-black text-base px-[40px] py-[30px] font-semibold mx-auto"><a href="#"> <img className="mt-7 mx-auto w-[90px] bg-gray-300 rounded-full" src="https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_rounded-512.png" alt="" /></a></li>
            <li className="text-black text-base px-[25px] py-[10px] font-semibold"><Link to="/"> Dashboard </Link></li>
            {/* tambahkan link nya di to, sesuaikan dengan path yang sudah di atur di main.jsx */}
            <li className="text-black text-base px-[25px] py-[10px] font-semibold"><Link to="/searchMentor"> Search Mentors </Link></li>
            <li className="text-black text-base px-[25px] py-[10px] font-semibold"><Link to="/becomeAMentor"> Be a Mentor </Link></li>
            <li className="text-[#01575C] text-base px-[25px] py-[10px] font-semibold"><Link to="#"> Be a Mentor </Link></li>
          </ul>
        </nav>
      </div>
      
    </>
  );
}

export default Navbar;