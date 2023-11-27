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
export default function InputForm({ handleChange, surat ,error}) {
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
          <Input error={error.panitia_pelaksana} label="Panitia Pelaksana (Opsional)" placeholder="masukkan nama kegiatan..." name="panitia_pelaksana" value={surat.panitia_pelaksana || ""} handleChange={handleChange}></Input>
          <Input error={error.nama_organisasi} label="Nama Organisasi" placeholder="masukkan nama organisasi..." name="nama_organisasi" value={surat.nama_organisasi || ""} handleChange={handleChange}></Input>
          <Input error={error.asal_fakultas} label="Asal Fakultas (Opsional)" placeholder="masukkan asal fakultas..." name="asal_fakultas" value={surat.asal_fakultas || ""} handleChange={handleChange}></Input>
          <Input label="Asal Universitas" placeholder="masukkan asal universitas..." name="asal_universitas" value={surat.asal_universitas || "UNIVERSITAS ISLAM NAHDLATUL ULAMA JEPARA"} handleChange={handleChange}></Input>
          <Input error={error.alamat} label="Alamat" placeholder="masukkan alamat..." name="alamat" value={surat.alamat || "Jl. Taman Siswa  (Pekeng) Tahunan Jepara "} handleChange={handleChange}></Input>
          <Input error={error.kode_pos} label="Kode Pos" placeholder="masukkan kode pos..." name="kode_pos" value={surat.kode_pos || "59427"} handleChange={handleChange}></Input>
          <Input error={error.email} label="Email" type="email" placeholder="masukkan email..." name="email" value={surat.email || ""} handleChange={handleChange}></Input>
          <div className="grid grid-cols-2 gap-2">
            <Input error={error.contact_person_1} label="Contact Person 1" placeholder="masukkan nama CP..." name="contact_person_1" value={surat.contact_person_1 || ""} handleChange={handleChange}></Input>
            <Input error={error.nomor_hp_cp_1} type="number" label="Nomor HP CP 1" placeholder="masukkan nomor HP CP..." name="nomor_hp_cp_1" value={surat.nomor_hp_cp_1 || ""} handleChange={handleChange}></Input>
            <Input error={error.asal_universitas} label="Contact Person 2" placeholder="masukkan nama CP..." name="contact_person_2" value={surat.contact_person_2 || ""} handleChange={handleChange}></Input>
            <Input type="number" label="Nomor HP CP 2" placeholder="masukkan nomor HP CP..." name="nomor_hp_cp_2" value={surat.nomor_hp_cp_2 || ""} handleChange={handleChange}></Input>
          </div>
        </div>
      </Accordion>

      <Accordion icon={faCircleInfo} label="Informasi Surat">
        <div className="my-2 grid grid-cols-2 grid-rows-3 w-full justify-around gap-2">
          <Input error={error.nomer_surat} label="Nomor surat" placeholder="masukkan nomor surat" name="nomer_surat" value={surat.nomer_surat || ""} handleChange={handleChange}></Input>
          <Input error={error.lampiran} type="number" label="Lampiran" placeholder="masukkan lampiran" name="lampiran" value={surat.lampiran || ""} handleChange={handleChange} pattern="\d+ Lampir"></Input>
          <Input error={error.perihal} label="Perihal" name="perihal" value={surat.perihal || ""} handleChange={handleChange}>
            {/* <select>
              <option value="">Pilih Perihal</option>
              <option value="Surat Permohonan Pinjam Barang">Permohonan Pinjam Barang</option>
              <option value="Surat Permohonan Pinjam Tempat">Permohonan Pinjam Tempat</option>
              <option value="Surat Permohonan Pinjam Barang & Tempat">Permohonan Pinjam Barang & Tempat</option>
            </select> */}
          </Input>
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
          <Input error={error.kepada} label="Ditujukan kepada" placeholder="masukkan penerima surat" name="kepada" value={surat.kepada || ""} handleChange={handleChange}></Input>
        </div>
        <TextArea error={error.alamat_tujuan} label="Alamat Tujuan" placeholder="masukkan alamat tujuan surat" name="alamat_tujuan" value={surat.alamat_tujuan || ""} handleChange={handleChange} />
      </Accordion>

      <Accordion icon={faCalendarDay} label="Informasi Acara">
        <div className="flex items-center gap-2">
          <TextArea label="Paragraf Pembuka" placeholder="masukkan Paragraf Pembuka" name="pembuka" value={surat.pembuka || ""} handleChange={handleChange}></TextArea>
        </div>

        <Input error={error.acara} label="Nama Acara" placeholder="masukkan Nama Acara" name="acara" value={surat.acara || ""} handleChange={handleChange}></Input>
        <Input error={error.tempat} label="Tempat" placeholder="masukkan tempat" name="tempat" value={surat.tempat || ""} handleChange={handleChange}></Input>

        <div className="my-2 grid grid-cols-2  w-full justify-around gap-2">
          <Input error={error.tanggal} label="tanggal" type="date" placeholder="masukkan tanggal" name="tanggal" value={surat.tanggal || ""} handleChange={handleChange}></Input>
          <Input error={error.waktu} label="waktu" type="time" placeholder="masukkan waktu" name="waktu" value={surat.waktu || ""} handleChange={handleChange}></Input>
        </div>

        <TextArea label="Paragraf penutup" placeholder="masukkan Paragraf penutup" name="penutup" value={surat.penutup || ""} handleChange={handleChange}></TextArea>
      </Accordion>

      <Accordion icon={faPenNib} label="Pengesahan">
        <div className="my-2 grid grid-cols-2 grid-rows-2 w-full justify-around gap-2">
          <Input error={error.ketua_panitia} label="Nama Ketua Panitia (Opsional)" placeholder="masukkan Nama ketua panitia" name="ketua_panitia" value={surat.ketua_panitia || ""} handleChange={handleChange}></Input>
          <Input type="number" label="NIM Ketua Panitia (Opsional)" placeholder="masukkan NIM ketua panitia" name="nim_ketua_panitia" value={surat.nim_ketua_panitia || ""} handleChange={handleChange}></Input>
          <Input error={error.sekertaris} label="Sekertaris" placeholder="masukkan sekertaris" name="sekertaris" value={surat.sekertaris || ""} handleChange={handleChange}></Input>
          <Input type="number" label="NIM Sekretaris (Opsional)" placeholder="masukkan NIM sekretaris" name="nim_sekretaris" value={surat.nim_sekretaris || ""} handleChange={handleChange}></Input>
          {/* <Input label="Nama Ketua Organisasi" placeholder="masukkan Nama ketua organisasi" name="ketua_organisasi" value={surat.ketua_organisasi || ""} handleChange={handleChange}></Input>
          <Input type="number" label="NIM Ketua (Opsional)" placeholder="masukkan NIM ketua organisasi" name="nim_ketua_organisasi" value={surat.nim_ketua_organisasi || ""} handleChange={handleChange}></Input> */}
        </div>
      </Accordion>
    </>
  );
}
