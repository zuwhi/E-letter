import { Link } from "react-router-dom";
import ButtonLp from "../components/Button/ButtonLp";
import TitleLandingPage from "../components/Title/TitleLp";
import Navbar from "../layouts/Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar to="OnLandingPage" page="" />
      <div className="w-full bg-slate-50 min-h-screen grid grid-cols-2">
        <div className="desc col-span-1 bg-slate-50 flex flex-col items-center justify-center">
          <div className="">
            <TitleLandingPage />
            <p className="w-[30rem] my-3 pl-1 font-medium text-slate-600">
              Website E-Letter memungkinkan pengguna untuk membuat surat secara langsung dengan memasukkan inputan. Melalui formulir interaktif, pengguna dapat mengisi informasi yang diperlukan, memilih template, dan melihat pratinjau
              sebelum mengunduh suratnya. Platform ini memudahkan pembuatan surat secara cepat dan efisien.
            </p>
            <Link to="/option">
              <ButtonLp variant="ml-1 2xl bg-pallete text-white">Get Started 🚀</ButtonLp>
            </Link>
          </div>
        </div>
        <div className="pict col-span-1 bg-slate-50">
          <div className="flex w-full h-full justify-center items-center">
            <img src="/images/logo.png" alt="" className="w-[40%] animate-bounce" />
          </div>
        </div>
      </div>
    </>
  );
}
