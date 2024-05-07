import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import TitleH2 from "../components/Elements/titleH2";
import FormRegisterMentor from "../components/Fragments/FormRegisterMentor";

const BecomeAMentor = () => {
  return (
    <div >
      <Navbar />
      <div className="flex flex-col font-poppins min-h-screen">
      <main className="flex flex-col items-center flex-grow bg-white pt-4 pb-20 px-8 border border-black">
        <TitleH2 title="Register as A Mentor" />
        <section className="w-full mt-4">
          <FormRegisterMentor />
        </section>
      </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BecomeAMentor;
