import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import EditInput from "../../components/Input/EditInput";

export default function PreviewIzin({ surat, img, componenRef, handleChange, value }) {
  const template = {
    nama_instansi: "Nama Instansi",
    jenis_instansi: "Jenis Instansi",
  };

  return (
    <div className="col-span-1 w-full ">
      <div className="konten md:fixed md:w-[50%] w-full p-10 pb-28 bg-gray-400 h-full overflow-y-auto overflow-x-hidden">
        <div className=" bg-slate-300 h-fit shadow-2xl flex items-center justify-center  overflow-y-hidden overflow-x-hidden">
          <div className="bg-white w-full h-[150vh] px-10 py-5 text-black font-times overflow-x-hidden" ref={componenRef}>
            <div className="w-full flex">
              <div className="relative w-[15%] flex items-end">
                <img src={img || "/"} alt="" className="h-fit absolute" />
              </div>
              <div className="kop w-[85%] ">
                <h6 className="text-center text-xl font-bold">{surat.jenis_instansi || template.jenis_instansi}</h6>
                <EditInput variant="text-center text-xl font-bold  text-6xl" name="nama_instansi" handleChange={handleChange} value={value.nama_instansi || template.nama_instansi}></EditInput>
                {/* <h1 className="text-center font-bold text-5xl -mt-1">{surat.nama_instansi || template.nama_instansi}</h1> */}
                <div className="w-full whitespace-nowrap mt-3 flex justify-around text-xs overflow-hidden">
                  <span>Alamat : {surat.alamat}</span>
                  <span>no Hp : {surat.no_hp}</span>
                  <p>email : {surat.email}</p>
                  <p>website : {surat.website}</p>
                </div>
              </div>
            </div>
            <hr className="my-3 border-2 border-black rounded-xl cursor-pointer hover:border-blue-500 duration-500" />
            <div className="perihal my-5">
              <span>Nomor : {surat.nomer_surat}</span>
              <p>Lampiran : {surat.lampiran}</p>
              <p>Perihal : {surat.perihal}</p>
            </div>
            <p className="mt-7 mb-3">Kepada Yth.</p>
            <p className="my-3">Ditempat</p>
            <p className="my-3">Dengan hormat,</p>
            <p className="indent-8 text-justify">{surat.pembuka || template.pembuka} </p>
            <div className="acara flex justify-center my-4">
              <table className="w-[70%]">
                <tbody>
                  <tr>
                    <td>Hari,tanggal</td>
                    <td>:</td>
                    <td>{surat.tanggal}</td>
                  </tr>
                  <tr>
                    <td>Waktu</td>
                    <td>:</td>
                    <td>{surat.waktu}</td>
                  </tr>
                  <tr>
                    <td>Tempat</td>
                    <td>:</td>
                    <td>{surat.tempat}</td>
                  </tr>
                  <tr>
                    <td>Acara</td>
                    <td>:</td>
                    <td>{surat.acara}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="indent-8 text-justify">{surat.penutup || template.penutup}</p>
            <div className="pengesahan w-full flex justify-center mt-20">
              <div className=" flex w-[80%] justify-around">
                <div className="">
                  <p>sekertaris</p>
                  <br />
                  <br />
                  <p>{surat.sekertaris}</p>
                </div>
                <div className=" ">
                  <p>Ketua Panitia</p>
                  <br />
                  <br />
                  <p>{surat.ketua}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button type="submit" className="btn bg-pallete fixed bottom-0 right-0 mr-7 mb-3 text-white" onClick={HandlePrint}>
        print
      </button> */}
    </div>
  );
}
