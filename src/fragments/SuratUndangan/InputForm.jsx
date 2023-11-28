import React from "react";
import Input from "../../components/Input/Input";
import TextArea from "../../components/Input/TextArea";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import InputImage from "../../components/InputImage/InputImage";
import Accordion from "../../components/Accordion/Accordion";
import Radio from "../../components/Input/Radio";
import Select from "../../components/Input/Select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function InputForm({ handleChange, surat, error }) {
  const template = {
    pembuka: "Sehubungan dengan adanya Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, deserunt? Alias maiores architecto.",
    penutup: "Demi terselenggaranya kegiatan tersebut, maka kami bermaksud mengundang Anda untuk hadir di acara tersebut. Demikian surat pemberitahuan ini kami buat. Atas perhatian dan perkenaannya kami ucapkan terimakasih.",
    panitia_pelaksana: "(Nama Kegiatan)",
    nama_organisasi: "(Nama Organisasi)",
    asal_fakultas: "Fakultas (Nama Fakultas)",
    asal_universitas: "Universitas Islam Nahdlatul Ulama Jepara",
    alamat: "Jl. Taman Siswa (Pekeng) Tahunan Jepara ",
    kode_pos: "59427",
    perihal: "Undangan",
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
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const options = [];

    // Sesuaikan batas tahun sesuai kebutuhan
    for (let year = currentYear; year >= currentYear - 10; year--) {
      options.push({ value: `${year}/${year + 1}`, label: `${year}/${year + 1}` });
    }

    return options;
  };

  const modules = {
    toolbar: [["bold", "italic", "underline", "strike"]],
  };

  const formats = ["header", "font", "bold", "italic", "underline", "strike", "link", "image", "list", "bullet", "blockquote", "code-block"];
  const styles = {
    padding: " 0",
  };
  return (
    <>
      <Accordion icon={faEnvelope} label="Kop Surat">
        <div className="my-2 grid grid-cols-2 grid-rows-4 w-full justify-around gap-2">
          <InputImage
            error={error.logo_instansi}
            label="Logo Instansi"
            handleChange={handleChange}
            handlegambar={(image) => {
              handleChange({ target: { name: "logo_instansi", value: image } });
            }}
            name="logo_instansi"
            surat={surat}
            gambar={surat.logo_instansi || ""}
            variant="row-span-4 pt-3 pr-2"
          ></InputImage>
          <InputImage
            label="Logo Kegiatan (Opsional)"
            handleChange={handleChange}
            handlegambar={(image) => {
              handleChange({ target: { name: "logo_kegiatan", value: image } });
            }}
            name="logo_kegiatan"
            gambar={surat.logo_kegiatan || ""}
            variant="row-span-4 pt-3 pr-2"
          ></InputImage>
          <Input error={error.panitia_pelaksana} label="Nama Kegiatan" placeholder="masukkan nama kegiatan..." name="panitia_pelaksana" value={surat.panitia_pelaksana || ""} handleChange={handleChange}></Input>
          <Input error={error.nama_organisasi} label="Nama Organisasi" placeholder="masukkan nama organisasi..." name="nama_organisasi" value={surat.nama_organisasi || ""} handleChange={handleChange}></Input>
          <Input error={error.asal_fakultas} label="Asal Fakultas (Opsional)" placeholder="masukkan asal fakultas..." name="asal_fakultas" value={surat.asal_fakultas || ""} handleChange={handleChange}></Input>
          <Input error={error.asal_universitas} label="Asal Universitas" placeholder="masukkan asal universitas..." name="asal_universitas" value={surat.asal_universitas || template.asal_universitas} handleChange={handleChange}></Input>
          <Input error={error.alamat} label="Alamat" placeholder="masukkan alamat..." name="alamat" value={surat.alamat || template.alamat} handleChange={handleChange}></Input>
          <Input error={error.kode_pos} label="Kode Pos" placeholder="masukkan kode pos..." name="kode_pos" value={surat.kode_pos || template.kode_pos} handleChange={handleChange}></Input>
          <Input error={error.email} label="Email" type="email" placeholder="masukkan email..." name="email" value={surat.email || ""} handleChange={handleChange}></Input>
          {/* not yet */}
          <Select error={error.periode} label="Periode Pengurus" name="periode" value={surat.periode || ""} handleChange={handleChange} className="select select-bordered w-full bg-blue-50 mt-2" options={generateYearOptions()} />
          <Input error={error.contact_person_1} label="Contact Person 1" placeholder="masukkan nama CP..." name="contact_person_1" value={surat.contact_person_1 || ""} handleChange={handleChange}></Input>
          <Input error={error.nomor_hp_cp_1} type="number" label="Nomor HP CP 1" placeholder="masukkan nomor HP CP..." name="nomor_hp_cp_1" value={surat.nomor_hp_cp_1 || ""} handleChange={handleChange}></Input>
          <Input error={error.contact_person_2} label="Contact Person 2" placeholder="masukkan nama CP..." name="contact_person_2" value={surat.contact_person_2 || ""} handleChange={handleChange}></Input>
          <Input error={error.nomor_hp_cp_2} type="number" label="Nomor HP CP 2" placeholder="masukkan nomor HP CP..." name="nomor_hp_cp_2" value={surat.nomor_hp_cp_2 || ""} handleChange={handleChange}></Input>
        </div>
      </Accordion>

      <Accordion icon={faCircleInfo} label="Informasi Surat">
        <div className="my-2 grid grid-cols-2 grid-rows-3 w-full justify-around gap-2">
          <Input error={error.nomer_surat} label="Nomor Surat" placeholder="masukkan nomor surat" name="nomer_surat" value={surat.nomer_surat || ""} handleChange={handleChange}></Input>
          <Input type="number" label="Lampiran" placeholder="masukkan lampiran" name="lampiran" value={surat.lampiran || ""} handleChange={handleChange} pattern="\d+ Lampir"></Input>
          <Input label="Perihal" placeholder="masukkan perihal" name="perihal" value={template.perihal} handleChange={handleChange} readonly></Input>
          {/* <Select
            error={error.perihal}
            label="Perihal"
            name="perihal"
            value={surat.perihal || ""}
            handleChange={handleChange}
            options={[
              { value: "Permohonan Pinjam Barang", label: "Permohonan Pinjam Barang" },
              { value: "Permohonan Pinjam Tempat", label: "Permohonan Pinjam Tempat" },
              { value: "Permohonan Pinjam Barang & Tempat", label: "Permohonan Pinjam Barang & Tempat" },
            ]}
            className="mt-9 bg-blue-50 input input-bordered w-full"
          /> */}
          <Input error={error.kota} label="Kota Pembuatan Surat" placeholder="masukkan kota pembuatan surat" name="kota" value={surat.kota || ""} handleChange={handleChange}></Input>
          <Radio
            label="Sifat Surat"
            name="sifat_surat"
            value={surat.sifat_surat || ""}
            handleChange={handleChange}
            options={[
              { value: "Kepada", label: "Kepada" },
              { value: "Yth.", label: "Yth." },
            ]}
          ></Radio>
          <Input error={error.kepada} label="Subjek" placeholder="masukkan penerima surat" name="kepada" value={surat.kepada || ""} handleChange={handleChange}></Input>
        </div>

        <TextArea error={error.alamat_tujuan} label="Alamat Tujuan" placeholder="masukkan alamat tujuan surat" name="alamat_tujuan" value={surat.alamat_tujuan || ""} handleChange={handleChange} />
      </Accordion>

      <Accordion icon={faCalendarDay} label="Informasi Acara">
        <div className="mt-2"></div>
        <label className="my-5 text-sm " htmlFor="my-editor">
          Paragraf pembuka :
        </label>
        <div className="flex items-center gap-2">
          {/* <TextArea label="Paragraf Pembuka" placeholder="masukkan paragraf pembuka" name="pembuka" value={surat.pembuka || template.pembuka} handleChange={handleChange}></TextArea> */}
          <ReactQuill
            style={styles}
            className="ql-editor w-full "
            name="pembuka"
            theme="snow"
            modules={modules}
            formats={formats}
            value={surat.pembuka || template.pembuka}
            onChange={(value) => handleChange({ target: { name: "pembuka", value } })}
          />
        </div>
        <Input error={error.acara} label="Acara" placeholder="masukkan Nama Acara" name="acara" value={surat.acara || ""} handleChange={handleChange}></Input>

        <div className="my-2 grid grid-cols-2 w-full justify-around gap-2">
          <Input error={error.tanggalMulai} label="Mulai Tanggal" type="date" placeholder="masukkan tanggal" name="tanggalMulai" value={surat.tanggalMulai || ""} handleChange={handleChange}></Input>
          <Input label="Selesai Tanggal" type="date" placeholder="masukkan tanggal" name="tanggalSelesai" value={surat.tanggalSelesai || ""} handleChange={handleChange}></Input>
        </div>

        <Input error={error.waktu} label="Waktu" type="time" placeholder="masukkan waktu" name="waktu" value={surat.waktu || ""} handleChange={handleChange}></Input>
        <Input error={error.tempat} label="Tempat" placeholder="masukkan tempat" name="tempat" value={surat.tempat || ""} handleChange={handleChange}></Input>
        <TextArea label="Paragraf Penutup" placeholder="masukkan paragraf penutup" name="penutup" value={surat.penutup || template.penutup} handleChange={handleChange}></TextArea>
      </Accordion>

      <Accordion icon={faPenNib} label="Pengesahan">
        <div className="my-2 mb-10 grid grid-cols-2 grid-rows-3 w-full justify-around gap-2">
          <Input error={error.ketua_panitia} label="Nama Ketua Panitia" placeholder="masukkan Nama ketua panitia" name="ketua_panitia" value={surat.ketua_panitia || ""} handleChange={handleChange}></Input>
          <Input error={error.nim_ketua_panitia} type="number" label="NIM Ketua Panitia" placeholder="masukkan NIM ketua panitia" name="nim_ketua_panitia" value={surat.nim_ketua_panitia || ""} handleChange={handleChange}></Input>
          <Input error={error.sekertaris} label="Sekretaris" placeholder="masukkan sekertaris" name="sekertaris" value={surat.sekertaris || ""} handleChange={handleChange}></Input>
          <Input error={error.nim_sekretaris} type="number" label="NIM Sekretaris" placeholder="masukkan NIM sekretaris" name="nim_sekretaris" value={surat.nim_sekretaris || ""} handleChange={handleChange}></Input>
          <Input error={error.ketua_organisasi} label="Nama Ketua Organisasi" placeholder="masukkan Nama ketua organisasi" name="ketua_organisasi" value={surat.ketua_organisasi || ""} handleChange={handleChange}></Input>
          <Input
            error={error.nim_ketua_organisasi}
            type="number"
            label="NIM Ketua Organisasi"
            placeholder="masukkan NIM ketua organisasi"
            name="nim_ketua_organisasi"
            value={surat.nim_ketua_organisasi || ""}
            handleChange={handleChange}
          ></Input>
        </div>
      </Accordion>
    </>
  );
}
