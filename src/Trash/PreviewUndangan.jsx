const PreviewUndangan = ({ surat, img }) => {
  const tanggal = surat.tanggal
  
  function getFormattedDate() {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const today = new Date();
    return today.toLocaleDateString("en-GB", options);
  }

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: "long" };
    return new Intl.DateTimeFormat("id-ID", options).format(date);
  };

  const getDayOfMonth = (dateString) => {
    const date = new Date(parseInt(dateString));
    return date.getDate();
  };

  const getMonth = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long" };
    return new Intl.DateTimeFormat("id-ID", options).format(date);
  };

  const getYear = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
  };
  const template = {
    panitia_pelaksana: "Nama Panitia Pelaksana",
    nama_organisasi: "Nama Organisasi",
    asal_fakultas: "Asal Fakultas",
    asal_universitas: "Universitas Islam Nahdlatul Ulama Jepara",
    alamat: "Jl. Taman Siswa  (Pekeng) Tahunan Jepara ",
    kode_pos: "59427",
    email: "E-Mail",
    contact_person_1: "Nama CP 1",
    nomor_hp_cp_1: "Nomor HP CP 1",
    contact_person_2: "Nama CP 2",
    nomor_hp_cp_2: "Nomor HP CP 2",
    sifat_surat: "Kepada",
  };
  return (
    <>
      <div className="w-full flex">
        <div className="relative w-[15%] flex items-top">
          {/* <img src={img} alt="" className="h-fit absolute" /> */}
          {surat.logo_instansi && <img src={surat.logo_instansi} alt="" className="h-fit absolute" />}
        </div>
        <div className="kop w-[70%] leading-relaxed">
          <p className="text-center font-bold uppercase" style={{ fontSize: "12px" }}>
            {surat.panitia_pelaksana || template.panitia_pelaksana}
          </p>
          <p className="text-center font-bold uppercase" style={{ fontSize: "12px" }}>
            {surat.nama_organisasi || template.nama_organisasi}
          </p>
          <p className="text-center font-bold uppercase" style={{ fontSize: "12px" }}>
            {surat.asal_universitas || template.asal_universitas}
          </p>
          <p className="text-center font-bold uppercase" style={{ fontSize: "12px" }}>
            {surat.asal_fakultas || template.asal_fakultas}
          </p>
          <div className="w-full whitespace-nowrap flex justify-around overflow-hidden text-center">
            <span style={{ fontSize: "12px" }}>
              Alamat: {surat.alamat || template.alamat} ({surat.kode_pos || template.kode_pos}), E-Mail: {surat.email || template.email}
            </span>
          </div>
          <div className="w-full flex justify-around text-center">
            <span style={{ fontSize: "12px" }}>
              Contact Person: {surat.contact_person_1 || template.contact_person_1} ({surat.nomor_hp_cp_1 || template.nomor_hp_cp_1}), {surat.contact_person_2 || template.contact_person_2} ({surat.nomor_hp_cp_2 || template.nomor_hp_cp_2})
            </span>
          </div>
        </div>
        <div className="relative w-[15%] flex items-top">{surat.logo_kegiatan && <img src={surat.logo_kegiatan} alt="" className="h-fit absolute" />}</div>
      </div>
      <hr className="my-3 border-2 border-black rounded-xl cursor-pointer hover:border-blue-500 duration-500" />

      <div>
        <div className="w-full flex justify-between">
          <div>
            <span className="inline-block w-20">Nomor</span>
            <span>: </span>
            <span className="inline-block">{surat.nomer_surat || template.nomer_surat}</span>
          </div>
          <div className="text-right">
            <p>
              {surat.kota || template.kota}, {getFormattedDate()}
            </p>
          </div>
        </div>
        <p>
          <span className="inline-block w-20">Lampiran</span>
          <span>: </span>
          {surat.lampiran ? <span>{`${surat.lampiran} Lampir`}</span> : template.lampiran}
        </p>
        <p>
          <span className="inline-block w-20">Perihal</span>
          <span>: </span>
          <span style={{ fontWeight: "bold", textDecoration: "underline", textTransform: "capitalize" }}>{surat.perihal || template.perihal}</span>
        </p>
      </div>
      <br />

      <div className="leading-relaxed">
        <p>{surat.sifat_surat || template.sifat_surat}</p>
        <p className="font-bold capitalize">{surat.kepada }</p>
        <p>{surat.alamat_tujuan}</p>
      </div>
      <br />

      <div className="leading-relaxed">
        <p className="font-bold italic">Assalamu'alaikum Wr. Wb.</p>
        <p className="indent-8 text-justify">{surat.pembuka || template.pembuka}</p>
      </div>
      <br />

      <div className="acara flex justify-center leading-relaxed">
        <table className="w-[70%]">
          <tbody>
            <tr>
              <td>Hari</td>
              <td>:</td>
              <td>{ tanggal ? getDayOfWeek(surat.tanggal ):''}</td>
            </tr>
            <tr>
              <td>Tanggal</td>
              <td>:</td>
              <td>{tanggal ?getDayOfMonth(surat.tanggal ):''} {tanggal ?getMonth(surat.tanggal):''} {tanggal ?getYear(surat.tanggal):''}</td>
            </tr>
            <tr>
              <td>Waktu</td>
              <td>:</td>
              <td>{surat.waktu ? <span>{`${surat.waktu} - Selesai`}</span> : template.waktu}</td>
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
      <br />

      <div className="leading-relaxed">
        <p className="indent-8 text-justify">{surat.penutup || template.penutup}</p>
        <p className="font-bold italic">Wassalamu'alaikum Wr. Wb.</p>
      </div>
      <br />

      <div className="pengesahan w-full flex justify-center">
        <div className=" flex w-[80%] justify-around">
          <div className="text-center">
            <p>Sekertaris</p>
            <br />
            <br />
            <p>{surat.sekertaris}</p>
            <p>{surat.nim_sekretaris ? <span>{`NIM. ${surat.nim_sekretaris}`}</span> : template.nim_sekertaris}</p>
          </div>
          <div className="text-center">
            <p>Ketua Panitia</p>
            <br />
            <br />
            <p>{surat.ketua_panitia}</p>
            <p>{surat.nim_ketua_panitia ? <span>{`NIM. ${surat.nim_ketua_panitia}`}</span> : template.nim_ketua_panitia}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewUndangan;
