import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Fragments/Navbar";
import InputLogin from "../components/Elements/Input/inputLogin";
import DarkBlueButton from "../components/Elements/Button/darkBlueButton";

const LoginUser = () =>{
    return(
        <>   
            <Navbar />
            <div className="lg:flex lg:flex-row">
            <div className="lg:w-[390px] lg:h-[844px] hidden lg:block">
                <figure>
                    <img src="../../public/images/Load.png" alt="" />
                </figure>
            </div>
            <div className="lg:ml-auto lg:w-[890px] lg:h-[844px]">
                <div className="mt-[50px] pt-[20px] text-center">
                    <h1 className="text-blue-800 my-[10px] text-[32px] font-bold">Login <span className="text-blue-400">here</span></h1>
                    <h2 className="w-[220px] mx-auto text-[16px] font-semibold ">Selamat datang kembali, senang berjumpa lagi dengan Anda!</h2>
                </div>
                <div className="mt-[30px]">
                    <InputLogin placeholder="email " />
                </div>
                <div className="mt-[25px]">
                    <InputLogin placeholder="password" />
                </div>
                <p className="text-[#081C87] text-[16px] ml-[225px] my-[15px] lg:ml-[475px]">Lupa password?</p>
                <div className="w-{350px] ml-2">
                    <DarkBlueButton type="submit" customClass="py-3 px-2 w-[350px] h-[60px] lg:ml-[255px]">
                        Sign In
                    </DarkBlueButton>
                </div>
                <p className="text-[#081C87] text-[16px] font-bold text-center my-[20px]"><Link to="/registerUser">Create new account</Link></p>
                <div className="mb-[20px]">
                    <p className="text-[#081C87] text-[14px] font-semibold text-center my-[20px]">Or continue with</p>
                    <section className="flex justify-center center-items">
                        <figure className="bg-gray-200 w-[60px] h-[40px] mx-[10px] rounded flex justify-center items-center">
                            <img src="../../public/images/logo_google.png" alt="google" className="w-[25px] h-[25px]" />
                        </figure>
                        <figure className="bg-gray-200 w-[60px] h-[40px] mx-[10px] rounded flex justify-center items-center">
                            <img src="../../public/images/logo_fb.png" alt="facebook" className="bg-gray-200 w-[25px] h-[25px]" />
                        </figure>
                        <figure className="bg-gray-200 w-[60px] h-[40px] mx-[10px] rounded flex justify-center items-center">
                            <img src="../../public/images/logo_apple.png" alt="apple" className="bg-gray-200 w-[25px] h-[25px] rounded" />
                        </figure>
                    </section>
                </div>
            </div>
            </div>
            
        </>
    );
};

export default LoginUser;