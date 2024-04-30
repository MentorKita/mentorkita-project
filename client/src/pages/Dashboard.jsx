import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import GradientDashButton from "../components/Elements/Button/gradientDashButton";


const Dashboard = () =>{
    return(
    <>
        <Navbar />
        <div className=" w-[375px] h-[320px]">
            <section className="relative">
                <div className="w-[375px] h-[150px] absolute z-0 mt-[30px]">
                    <h1 className="font-bold text-[35px] leading-[50px] ml-[10px]">Connect.</h1>
                    <h1 className="font-bold text-[35px] leading-[50px] ml-[10px]">Mentor.</h1>
                    <h1 className="font-bold text-[35px] leading-[50px] ml-[10px]">Thrive. </h1>
                </div>
                <img className="w-[200px] absolute ml-[175px] mt-[30px] py-[5px] z-10 rounded-tl-[200px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]" src="https://s3-alpha-sig.figma.com/img/6247/339a/3fc9a9f22e4347edb225b2e654c980c9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pBH7l2GyPVt8txITZibUSEbHbaoW4QvnjJt-hEPG2XRs2MgQOeIHq4wfdhGgJaHwhD1wAP2vEulSyj65YTH4FyhE-cYar4yfxbqitgdTaFAtpV8NvCwWTAMN5z2xo5JkrnLW3mgrSQiddypdbQ8HKSXSVZhMLPnw1b9sIU-Xu7pedo-cFBg4yXwOi0d24iiZCOTFAsFbv55Vjgulj5wau4aXMWaweFMmxAs4RaoXZA7PUjwVl9XDEtBCJlGuaoPUi9JnuTlgHWWvjsM77w3b8pEgA-kynQxAv7iKTHLPXmZD1-stbd~wJluVEgTP1akKJorbko5UBiOVP6NCcAIlEA__" alt="" />
            </section>
            <section className="absolute">
                <p className="text-[#3D5AF1] mt-[190px] w-[375px] text-center font-semibold">Find and start your</p>
                <p className="text-[#3D5AF1] w-[375px] text-center font-semibold">personal mentorship here</p>
                <div className="w-full relative">
                    <p className="w-[86px] h-[32px] mx-auto mt-[30px] py-[4px] rounded-2xl bg-blue-400 text-white text-center "><Link to="/searchMentor">Search</Link></p>
                </div>
            </section>
            
        </div>
        <div className="w-[375px] h-[300px] bg-blue-200  ">
            <p className="font-bold text-[20px] text-center mt-[10px] pt-[20px]">Top Rated Mentors</p>
            <section className="overflow-x-auto">
                <div className="w-[400px] py-[20px] px-[20px] flex flex-row ">
                    <div className="w-24 h-24 rounded-2xl bg-white mx-[10px] shadow-xl"></div>
                    <div className="w-24 h-24 rounded-2xl bg-white mx-[10px] shadow-xl"></div>
                    <div className="w-24 h-24 rounded-2xl bg-white mx-[10px] shadow-xl"></div>
                </div>
            </section>
            <section>
                <p className="text-[19px] font-bold text-center my-[10px] ">Be one of them!</p>
                <div className="w-full relative">
                    <p className="mx-auto text-[14px] font-semibold text-center "><GradientDashButton>Begin as a Mentor</GradientDashButton></p>
                </div>
            </section>
        </div>
        <div className="w-[375px] h-[300px] bg-white">
            <p className="text-[18px] font-bold text-center mt-[10px] pt-[20px]">Why we need <span className="text-blue-800">Mentor </span><span className="text-blue-400">Kita</span></p>
            <section className="bg-blue-200 h-[180px] w-[300px] rounded-xl mx-auto shadow-xl">
                <figure className="flex flex-row my-4 mx-4 pt-4">
                    <img className="w-[40px] h-[40px] rounded-lg object-cover mr-2" src="../../public/images/interactive.png" alt="" />
                    <figcaption>
                        <p className="font-bold text-[14px]">Interactive & Collaborative</p>
                        <p className="text-[10px]">Easy to find your masters</p>
                    </figcaption>
                </figure>
                <figure className="flex flex-row my-4 mx-4">
                    <img className="w-[40px] h-[40px] rounded-lg object-cover mr-2 " src="../../public/images/flexible.png" alt="" />
                    <figcaption>
                        <p className="font-bold text-[14px]">Flexible Learning</p>
                        <p className="text-[10px]">Tailor your schedule freely</p>
                    </figcaption>
                </figure>
                <figure className="flex flex-row my-4 mx-4">
                    <img className="w-[40px] h-[40px] rounded-lg  object-cover mr-2" src="../../public/images/guide.png" alt="" />
                    <figcaption>
                        <p className="font-bold text-[14px]">Guide & Guidance</p>
                        <p className="text-[10px]">Direct the right steps to achieve your goals</p>
                    </figcaption>
                </figure>
            </section>
        </div>
        <div className="w-full h-[275px] bg-blue-800">
            <p className="text-white text-[18px] font-semibold text-center pt-6 mb-6">Our Users Overview</p>
            <section className="overflow-x-auto">
                <div className="w-[625px] flex flex-row ">
                    <div className="w-[280px] h-[150px] bg-white ml-5 mr-2 rounded-xl flex flex-row">
                        <div className="w-[300px] text-[7px]">
                            <p className="text-[9px] font-semibold pt-[10px] pl-[10px]">Alex.Jr.</p>
                            <p className="text-[9px]   pl-[10px]">Web Development Mentee</p>
                            <p className="text-blue-500 pt-[10px] pl-[10px]">“Saya telah menggunakan platform Mentor Kita selama beberapa bulan, dan  pengalaman saya sungguh luar biasa. Sebagai seorang profesional yang  ingin terus berkembang, saya mencari sumber pembelajaran yang tidak  hanya informatif tetapi juga interaktif. Mentor Kita memberikan lebih  dari yang saya harapkan.”</p>
                        </div>
                        <div className="w-[200px] bg-blue-400 rounded-tl-0 rounded-bl-0 rounded-tr-xl rounded-br-xl"> 
                            <img className="mt-7 mx-auto w-[90px] bg-gray-300 rounded-full" src="https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_rounded-512.png" alt="" />
                        </div>
                    </div>
                    <div className="w-[280px] h-[150px] bg-white ml-5 mr-2 rounded-xl flex flex-row">
                        <div className="w-[300px] text-[7px]">
                            <p className="text-[9px] font-semibold pt-[10px] pl-[10px]">Alex.Jr.</p>
                            <p className="text-[9px]   pl-[10px]">Web Development Mentee</p>
                            <p className="text-blue-500 pt-[10px] pl-[10px]">“Saya telah menggunakan platform Mentor Kita selama beberapa bulan, dan  pengalaman saya sungguh luar biasa. Sebagai seorang profesional yang  ingin terus berkembang, saya mencari sumber pembelajaran yang tidak  hanya informatif tetapi juga interaktif. Mentor Kita memberikan lebih  dari yang saya harapkan.”</p>
                        </div>
                        <div className="w-[200px] bg-blue-400 rounded-tl-0 rounded-bl-0 rounded-tr-xl rounded-br-xl"> 
                            <img className="mt-7 mx-auto w-[90px] bg-gray-300 rounded-full" src="https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_rounded-512.png" alt="" />
                        </div>
                    </div>
                   
                </div>
            </section>
        </div>
        <Footer />
        

    </>
    );
};

export default Dashboard;
