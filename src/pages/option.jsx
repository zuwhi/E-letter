import CardOption from "../components/Card/CardOption";
import Navbar from "../layouts/Navbar";
import { Link } from "react-router-dom";

export default function OptionPage() {
  return (
    <>
      <Navbar to="/" page="Option"></Navbar>

      <div className="md:pt-0 pt-20 flex w-full flex-wrap min-h-screen items-center justify-center bg-slate-50 ">
        <CardOption type="undangan" color="outline outline-blue-500" image="/images/undangan.png">
          <CardOption.Judul>Surat undangan</CardOption.Judul>
          <CardOption.Desc>Surat resmi yang mengajak orang atau kelompok untuk hadir dalam suatu acara dengan mencantumkan detail waktu, tempat, dan tujuan acara</CardOption.Desc>
          <CardOption.Link>
            <Link to="/formUndangan">
              <button className="btn bg-pallete  text-white">Buat</button>
            </Link>
          </CardOption.Link>
        </CardOption>
        <CardOption type="permohonan" color="outline outline-blue-500" image="/images/permohonan.png">
          <CardOption.Judul>Surat Permohonan</CardOption.Judul>
          <CardOption.Desc>Surat yang digunakan untuk meminta atau memohon sesuatu kepada pihak yang berwenang, bisa berupa izin, bantuan, atau persetujuan.</CardOption.Desc>
          <CardOption.Link>
            <Link to="/formPermohonan">
              <button className="btn bg-pallete  text-white">Buat</button>
            </Link>
          </CardOption.Link>
        </CardOption>
        <CardOption type="izin" color="outline outline-blue-500" image="/images/izin.png">
          <CardOption.Judul>Surat Izin</CardOption.Judul>
          <CardOption.Desc>Surat resmi yang memberikan kepastian atau persetujuan dari pihak yang berwenang terhadap suatu tindakan atau kegiatan tertentu.</CardOption.Desc>
          <CardOption.Link>
            <Link to="/formIzin">
              <button className="btn bg-pallete  text-white">Buat</button>
            </Link>
          </CardOption.Link>
        </CardOption>
      </div>
    </>
  );
}
