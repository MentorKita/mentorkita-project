import React from 'react';

const Footer = () => {
    return(
        <>
            <div className="bg-white">
                <section className="w-[200px] h-[100px] py-6 flex flex-row mx-auto">
                    <img className="w-[40px] h-[40px] " src="https://s3-alpha-sig.figma.com/img/745f/92ed/644aadfbd63ae1f815f276a605048093?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMtUBtPjlzKFBgwhlM9jba5OSqEQoHRbkrG5khpKzTViaKCTdNiilM0VzThq3IkD7jngUTDJx2MuZN5q4CT1x5HQaIkE6aF3J31iQ9659f8pQjK0iktQcLsgVOa2XRq8OUu2bGQrFE9oiu~sTSlkMoLIbe9cyuKPp~X6NKIMw~X8H4~myFb2G4evQaSJ9lHLk5Za7d-Xep-jqiefsotJcIWtgFd7rUJ0pC05EN5wguJkIr7zHkdlskuY~ClTTu47nDXysO19qLMKR2azXxeFSIyfWmVa23eOz6~AGD2yDKnLIYhMem8qZnYF1FhFqcT9Hdy9VQOU1kikZ6Xp9yMZXg__" alt="" />
                    <p className="text-blue-900 font-extrabold text-[24px] pt-1 ml-2">Mentor <span className="text-blue-400">Kita</span></p>
                </section>
                <section className="w-[225px] h-[60px] flex flex-row mx-auto">
                    <p className="font-bold pt-[2px]">Reach us</p>
                    <img className="w-[30px] h-[30px] mx-2" src="https://cdn2.iconfinder.com/data/icons/cv-curriculum-vitae/100/set_cv3ok-07-512.png" alt="Instagram" />
                    <img className="w-[30px] h-[30px] mx-2" src="https://cdn.icon-icons.com/icons2/3261/PNG/512/twitter_logo_icon_206654.png" alt="X" />
                    <img className="w-[30px] h-[30px] mx-2" src="https://cdn3.iconfinder.com/data/icons/brands-applications/512/Line_A-512.png" alt="Line" />
                </section>
            </div>
            <div className="bg-blue-900 h-[45px]">
                <p className="text-white text-[12px] text-center py-3">&copy; 2024 Developed by Mentor Team</p>
            </div>
        </>
    )
};
   
export default Footer;
