import EditInput from "../../components/Input/EditInput";
import EditInputArea from "../../components/Input/EditInputArea";

const PreviewPermohonan = ({ surat, handleChange }) => {
  const template = {
    pembuka: "Sehubungan dengan adanya Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, deserunt? Alias maiores architecto.",
    penutup: "Demikian Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, deserunt? Alias maiores architecto.",
    panitia_pelaksana: "Panitia Pelaksana (Nama Kegiatan)",
    nama_organisasi: "(Nama Organisasi)",
    asal_fakultas: "Fakultas (Nama Fakultas)",
    asal_universitas: "Universitas Islam Nahdlatul Ulama Jepara",
    alamat: "Jl. Taman Siswa (Pekeng) Tahunan Jepara ",
    kode_pos: "59427",
    kepada: "(Subjek)",
    // email: "E-Mail Aktif",
    contact_person_1: "Nama CP1",
    nomor_hp_cp_1: "No. HP CP1",
    contact_person_2: "Nama CP2",
    nomor_hp_cp_2: "No. HP CP2",
    lampiran: "-",
    ketua_panitia: "(Nama Ketua Panitia)",
    sekertaris: "(Nama Sekretaris)",
    ketua_organisasi: "(Nama Ketua Organisasi)",
    alamat_tujuan: "Di Tempat",
  };

  function getFormattedDate() {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const today = new Date();
    return today.toLocaleDateString("en-GB", options);
  }

  const getDayOfWeek = (dateString) => {
    // Mengambil Nama Hari
    if (!dateString) {
      return ""; // Return empty string if the date is not provided
    }
    const date = new Date(dateString);
    const options = { weekday: "long" };
    return new Intl.DateTimeFormat("id-ID", options).format(date);
  };

  const getDayOfMonth = (dateString) => {
    // Mengambil Tanggal
    if (!dateString) {
      return ""; // Return empty string if the date is not provided
    }
    const date = new Date(dateString);
    return date.getDate();
  };

  const getMonth = (dateString) => {
    // Mengambil Nama Bulan
    if (!dateString) {
      return ""; // Return empty string if the date is not provided
    }
    const date = new Date(dateString);
    const options = { month: "long" };
    return new Intl.DateTimeFormat("id-ID", options).format(date);
  };

  const getYear = (dateString) => {
    // Mengambil Tahun
    if (!dateString) {
      return ""; // Return empty string if the date is not provided
    }
    const date = new Date(dateString);
    return date.getFullYear();
  };

  return (
    <>
      <div className="">
        <div className="w-full flex leading-[1.0] justify-around ">
          <div className="relative w-[19%] h-fit flex items-top mt-2 pl-4 px-3">{surat.logo_instansi && <img src={surat.logo_instansi} alt="" className="w-fit" />}</div>
          <div className="kop w-[84%] mt-2 leading-[1.15]">
            {/* <EditInput name="panitia_pelaksana" variant="text-center font-bold uppercase" handleChange={handleChange} value={surat.panitia_pelaksana ? <>{`Panitia Pelaksana ${surat.panitia_pelaksana}`}</> : template.panitia_pelaksana}></EditInput> */}
            <p className="text-center font-bold uppercase">{surat.panitia_pelaksana ? <>{`Panitia Pelaksana ${surat.panitia_pelaksana}`}</> : template.panitia_pelaksana}</p>
            <EditInput name="nama_organisasi" variant="text-center font-bold uppercase" value={surat.nama_organisasi || template.nama_organisasi} handleChange={handleChange} />
            <EditInput name="asal_fakultas" variant="text-center font-bold uppercase" value={surat.asal_fakultas ? surat.asal_fakultas : ""} handleChange={handleChange}></EditInput>
            <EditInput name="asal_universitas" variant="text-center font-bold uppercase" value={surat.asal_universitas || template.asal_universitas} handleChange={handleChange}></EditInput>
            <div className="w-full whitespace-nowrap flex justify-around overflow-hidden text-center">
              <span className="w-full h-fit flex  items-center text-center bg-black text-white italic" style={{ fontSize: "14px" }}>
                <div className="w-[70%]">
                  Sekretariat: <EditInput name="alamat" variant="bg-black italic w-[70%]" value={surat.alamat || template.alamat} handleChange={handleChange} />
                </div>
                <div className="w-[5%]">
                  {"("}
                  <EditInput name="kode_pos" variant="bg-black italic " value={surat.kode_pos || template.kode_pos} handleChange={handleChange} />
                  {")"}
                </div>
                <div className="ml-3 w-[25%]">
                  E-Mail: <EditInput name="email" variant="bg-black italic " value={surat.email || template.email} handleChange={handleChange} />
                </div>
              </span>
            </div>
            <div className="w-full flex justify-around text-center italic" style={{ fontSize: "14px" }}>
              <span>
                Contact Person: {surat.nomor_hp_cp_1 || template.nomor_hp_cp_1} ({surat.contact_person_1 || template.contact_person_1}), {surat.nomor_hp_cp_2 || template.nomor_hp_cp_2} ({surat.contact_person_2 || template.contact_person_2})
              </span>
            </div>
          </div>
          <div className="relative w-[19%] h-fit flex items-top mt-2 pl-4 px-3">{surat.logo_kegiatan && <img src={surat.logo_kegiatan} alt="" className="w-fit" />}</div>
        </div>
      </div>

      <div className="preview-container mx-20">
        <div className="mb-2 mt-2">
          <hr className="mb-0.5 border-1 border-black" />
          <hr className="border-2 border-black" />
        </div>

        <div className="w-full leading-[1.15] flex  justify-end  ">
       
          <EditInput name="kota" variant="w-32 text-right" value={surat.kota || template.kota} handleChange={handleChange} />
          <span className="ml-0.5 mr-2">,</span>
          <p className="w-40"> 
          {getFormattedDate()}
          </p>
   
        </div>

        <div className="leading-[1.15]">
          <table>
            <tbody>
              <tr className="align-top">
                <td>Nomor</td>
                <td>:</td>
                <td className="text-left">
                  <EditInput name="nomer_surat" variant="" value={surat.nomer_surat || template.nomer_surat} handleChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>Lampiran</td>
                <td>:</td>
                <td>{surat.lampiran ? <span>{`${surat.lampiran} Lampir`}</span> : template.lampiran}</td>
              </tr>
              <tr>
                <td>Perihal</td>
                <td>:</td>
                <td style={{ fontWeight: "bold", textDecoration: "underline", textTransform: "capitalize" }}>{surat.perihal || template.perihal}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />

        <div className="leading-[1.15]">
          <p>{surat.sifat_surat|| "Kepada/Yth."}</p>
          <p className="font-bold capitalize">
            <EditInput name="kepada" variant="" value={surat.kepada || template.kepada} handleChange={handleChange} />
          </p>
          <p>
            <EditInput name="alamat_tujuan" variant="" value={surat.alamat_tujuan || template.alamat_tujuan} handleChange={handleChange} />
          </p>
        </div>
        <br />

        <div className="leading-[1.15]">
          <p className="font-bold italic ">Assalamu'alaikum Wr. Wb.</p>

          <EditInputArea name="pembuka" variant="indent-8 w-full text-justify" value={surat.pembuka || template.pembuka} handleChange={handleChange} />
          {/* 
            {surat.pembuka || template.pembuka} */}
        </div>
        <br />

        <div className="acara flex justify-center leading-[1.15]">
          <table className="w-[70%]">
            <tbody>
              <tr>
                <td>Hari</td>
                <td>:</td>
                <td>
                  {getDayOfWeek(surat.tanggalMulai)} {surat.tanggalSelesai ? <span>{`- ${getDayOfWeek(surat.tanggalSelesai)}`}</span> : surat.tanggalSelesai}
                </td>
              </tr>
              <tr>
                <td>Tanggal</td>
                <td>:</td>
                <td>
                  {getDayOfMonth(surat.tanggalMulai)} {surat.tanggalSelesai ? <span>{`- ${getDayOfMonth(surat.tanggalSelesai)}`}</span> : surat.tanggalSelesai} {getMonth(surat.tanggalMulai)} {getYear(surat.tanggalMulai)}
                </td>
              </tr>
              <tr>
                <td>Waktu</td>
                <td>:</td>
                <td>{surat.waktu ? <span>{`${surat.waktu} - Selesai`}</span> : template.waktu}</td>
              </tr>
              <tr>
                <td>Tempat</td>
                <td>:</td>
                <td>
                  <EditInput name="tempat" variant="" value={surat.tempat || template.tempat} handleChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>Acara</td>
                <td>:</td>
                <td>
                  <EditInput name="acara" variant="" value={surat.acara || template.acara} handleChange={handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />

        <div className="leading-[1.15] mt-1">
          <EditInputArea name="penutup" variant="indent-8 w-full text-justify " value={surat.penutup || template.penutup} handleChange={handleChange} />

          {/* <p className="indent-8 text-justify">{surat.penutup || template.penutup}</p> */}
          <p className="font-bold italic">Wassalamu'alaikum Wr. Wb.</p>
        </div>
        <br />

        <div className="leading-[1.15]">
          <div className="w-full text-left leading-[1.15]">
            <p>Hormat kami,</p>
          </div>
          <div className="text-center font-bold uppercase leading-[1.15]">
          <p>{surat.panitia_pelaksana ? <>{`Panitia Pelaksana ${surat.panitia_pelaksana}`}</> : template.panitia_pelaksana}</p>
            {/* <p>{surat.nama_organisasi || template.nama_organisasi}</p> */}
            <EditInput name="nama_organisasi" variant="text-center font-bold uppercase" value={surat.nama_organisasi || template.nama_organisasi} handleChange={handleChange} />

            <p>{surat.asal_fakultas ? surat.asal_fakultas : ""}</p>
            <EditInput name="asal_universitas" variant="text-center font-bold uppercase" value={surat.asal_universitas || template.asal_universitas} handleChange={handleChange}></EditInput>
            {/* <p>{surat.asal_universitas || template.asal_universitas}</p> */}
            <p>Periode {surat.periode}</p>
          </div>
        </div>
        <br />

        <div className="pengesahan w-full flex justify-center leading-[1.15]">
          <div className=" flex w-[80%] justify-around">
            <div className="text-center">
              <p>Ketua Panitia</p>
              <br />
              <br />
              <p className="font-bold capitalize">{surat.nim_ketua_panitia ? <u>{surat.ketua_panitia}</u> : template.ketua_panitia}</p>
              <p>{surat.nim_ketua_panitia ? <span>{`NIM. ${surat.nim_ketua_panitia}`}</span> : ""}</p>
            </div>
            <div className="text-center">
              <p>Sekretaris</p>
              <br />
              <br />
              <p className="font-bold capitalize">{surat.nim_sekertaris ? <u>{surat.sekertaris}</u> : template.sekertaris}</p>
              <p>{surat.nim_sekretaris ? <span>{`NIM. ${surat.nim_sekretaris}`}</span> : ""}</p>
            </div>
          </div>
        </div>
        <br />

        <div className="pengesahan w-full justify-center leading-[1.15]"></div>
        <div className="w-full text-center leading-[1.15]">
          <p>Mengetahui,</p>
        </div>

        <div className="w-full justify-around leading-[1.15]">
          <div className="text-center">
            <p>Ketua Organisasi</p>
            <br />
            <br />
            <p className="font-bold capitalize">{surat.nim_ketua_organisasi ? <u>{surat.ketua_organisasi}</u> : template.ketua_organisasi}</p>
            <p>{surat.nim_ketua_organisasi ? <span>{`NIM. ${surat.nim_ketua_organisasi}`}</span> : ""}</p>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default PreviewPermohonan;
