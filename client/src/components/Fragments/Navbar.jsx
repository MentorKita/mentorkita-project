import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white flex flex-row h-[50px] bg-gradient-to-r from-[#081C87] to-[#27B2DD] fixed top-0 w-full z-20 lg:w-[1280px] lg:h-[67px] ">
        <p className="text-black py-[15px] px-[15px] mr-[270px] lg:px-0 lg:z-30 lg:pt-[20px] lg:mr-[245px]"><img className="size-5 lg:w-[32px] lg:h-[24px] lg:border lg:border-black lg:ml-[25px] " src="../../../public/images/Logo.png" alt="" /></p>
        <ul className="lg:flex lg:flex-row sm:hidden lg:w-[700px] lg:ml-[300px]">
            <li className="lg:text-white lg:font-semibold lg:w-[200px] lg:text-[20px] lg:leading-[30px] lg:pt-[15px] lg:text-center "><Link to="/"> Dashboard </Link></li>
            <li className="lg:text-white lg:font-semibold lg:w-[200px] lg:text-[20px] lg:leading-[30px] lg:pt-[15px] lg:text-center "><Link to="/searchMentor"> Search Mentors </Link></li>
            <li className="lg:text-white lg:font-semibold lg:w-[200px] lg:text-[20px] lg:leading-[30px] lg:pt-[15px] lg:text-center "><Link to="/becomeAMentor"> Be a Mentor </Link></li>
            <li className="lg:text-white lg:font-semibold lg:w-[150px] lg:text-[20px] lg:leading-[30px] lg:pt-[15px] lg:text-center "><Link to="/loginUser"> Log In</Link></li>
          </ul>
        <button onClick={toggleMenu} className="block lg:ml-[910px] "><p className="text-black p-[10px] "><img className="size-5 p-[3px] bg-white rounded" src="../../../public/images/Vector.png" alt="" /></p></button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'}  w-[180px] h-[400px] bg-white ml-[195px] border-2 rounded-lg fixed z-20 lg:ml-[1100px] lg:hidden `} >
        <nav className="w-[180px] h-[170px]">
          <ul className="flex flex-col">
            <li className="text-black text-base px-[40px] py-[30px] font-semibold mx-auto"><a href="#"> <img className="mt-7 mx-auto w-[90px] bg-gray-300 rounded-full" src="https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_rounded-512.png" alt="" /></a></li>
            <li className="text-black text-base px-[25px] py-[10px] font-semibold"><Link to="/"> Dashboard </Link></li>
            {/* tambahkan link nya di to, sesuaikan dengan path yang sudah di atur di main.jsx */}
            <li className="text-black text-base px-[25px] py-[10px] font-semibold"><Link to="/searchMentor"> Search Mentors </Link></li>
            <li className="text-black text-base px-[25px] py-[10px] font-semibold"><Link to="/becomeAMentor"> Be a Mentor </Link></li>
            <li className="text-[#081C87] text-base px-[25px] py-[10px] font-semibold"><Link to="/loginUser"> Log In</Link></li>
          </ul>
        </nav>
      </div>
      <div className="mb-[50px]"></div>
      
    </>
  );
}

export default Navbar;