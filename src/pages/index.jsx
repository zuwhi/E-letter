import { Link } from "react-router-dom";
import ButtonLp from "../components/Button/ButtonLp";
import TitleLandingPage from "../components/Title/TitleLp";
import Navbar from "../layouts/Navbar";
import TypingText from "../components/Title/TypingText";


export default function LandingPage() {
  return (
    <>
      {/* <Navbar to="OnLandingPage" page="" /> */}
      <div className="w-full bg-slate-50 min-h-screen grid md:grid-cols-2 ">
        <div className="desc md:col-span-1 md:mx-0 mx-10  bg-slate-50 flex flex-col justify-center">
          <div className="md:ml-28">
            <TitleLandingPage />
            <TypingText/>
            <p className="md:w-[40rem] md:text-base text-sm my-3 pl-1 font-medium text-slate-500">
              Melalui formulir interaktif, pengguna dapat mengisi informasi yang diperlukan, memilih opsi surat , dan melihat pratinjau
              sebelum mengunduh suratnya. Platform ini memudahkan pembuatan surat secara cepat dan efisien. website ini dibuat oleh rehan,isa dan ahnan untuk memenuhi tugas mata kuliah Finite State Automata
            </p>
            <Link to="/option">
              <ButtonLp variant="ml-1 bg-pallete text-white">Get Started 🚀</ButtonLp>
            </Link>
          </div>
        </div>
        <div className="pict md:col-span-1   flex ">
          <div className="flex w-full h-full justify-center  items-center">
            <img src="/images/logo.png" alt="" className="w-[40%] animate-bounce" />
          </div>
        </div>
      </div>
    </>
  );
}
