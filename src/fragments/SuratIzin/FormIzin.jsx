import Input from "../../components/Input/Input";
import TextArea from "../../components/Input/TextArea";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import InputImage from "../../components/InputImage/InputImage";
import Accordion from "../../components/Accordion/Accordion";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import Navbar from "../../layouts/Navbar";
import PreviewIzin from "./PreviewIzin";
import FormInput from "../../layouts/FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
// import { useForm } from "react-hook-form";

export default function FormIzin() {
  const [suratIzin, setSurat] = useState("");
  const [imgIzin, setImg] = useState("");
  function handleChange(e) {
    const { name, value } = e.target;
    setSurat((e) => ({ ...e, [name]: value }));
    Formik.setFieldValue(name, value);
  }

  //=========================== Proses Penyimpanan Local Storage =============================
  useEffect(() => {
    const dataSurat = JSON.parse(localStorage.getItem("suratIzin"));
    if (suratIzin === "") {
      setSurat((e) => ({ ...e, ...dataSurat }));
    }
  }, []);
  useEffect(() => {
    const dataImage = JSON.parse(localStorage.getItem("imageIzin"));
    if (dataImage) {
      setImg(dataImage);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("suratIzin", JSON.stringify(suratIzin));
  }, [suratIzin]);
  useEffect(() => {
    localStorage.setItem("imageIzin", JSON.stringify(imgIzin));
  }, [imgIzin]);

  const dataSurat = JSON.parse(localStorage.getItem("suratIzin"));

  //===========================================================================================
  const componenRef = useRef();
  const HandlePrint = useReactToPrint({
    content: () => componenRef.current,
    documentTitle: "emp-data",
    // onAfterPrint: ()=>alert('print oke')
  });
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const Formik = useFormik({
    initialValues: dataSurat,
    validationSchema: Yup.object({
      nama_instansi: Yup.string().min(2, "Mininum 2 characters").max(128, "Maximum 128 characters"),
      jenis_instansi: Yup.string().min(2, "Mininum 2 characters").max(15, "Maximum 15 characters"),
      no_hp: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
      website: Yup.string().min(2, "Mininum 2 characters").max(15, "Maximum 15 characters"),
      email: Yup.string().min(2, "Mininum 2 characters").max(15, "Maximum 15 characters"),
    }),
    onSubmit: (values) => {
      if (Formik.isValid) {
        // If there are no errors, proceed with printing
        HandlePrint();
      } else {
        // If there are errors, display an alert or any other notification
        alert("There are validation errors. Please check the form.");
        console.log("m");
        // You can customize the alert or use a different notification method
      }
    },
  });

  return (
    <>
      <Navbar to="/option" page="Surat Izin"></Navbar>

      <form onSubmit={Formik.handleSubmit}>
        <div className="w-full min-h-screen grid md:grid-cols-2 grid-cols-1 pt-[4.1rem] ">
          <FormInput dataSurat={dataSurat} setSurat={setSurat} surat={suratIzin} setImg={setImg}>
            <Accordion icon={faEnvelope} label="Kop Surat">
              <div className="my-2 grid grid-cols-2 grid-rows-2 w-full justify-around gap-2">
                <InputImage handleChange={handleChange} handlegambar={setImg} gambar={imgIzin} variant="row-span-4  pt-3 pr-2 "></InputImage>
                <Input error={Formik.errors.nama_instansi} label="Nama Instansi" placeholder="masukkan nama Instansi ..." name="nama_instansi" value={suratIzin.nama_instansi || ""} handleChange={handleChange}></Input>
                <Input
                  error={Formik.errors.jenis_instansi}
                  variant="col-start-2"
                  label="Jenis Instansi"
                  placeholder="masukkan jenis Instansi ..."
                  name="jenis_instansi"
                  value={suratIzin.jenis_instansi || ""}
                  handleChange={handleChange}
                ></Input>
                <Input error={Formik.errors.no_hp} variant="col-start-2 row-start-3" label="Nomer Hp" placeholder="masukkan Nomer Hp ..." name="no_hp" value={suratIzin.no_hp || ""} handleChange={handleChange}></Input>
                <Input error={Formik.errors.website} variant="col-start-2 row-start-4" label="Website" placeholder="masukkan Website ..." name="website" value={suratIzin.website || ""} handleChange={handleChange}></Input>
              </div>
              <Input error={Formik.errors.email} label="Email" type="email" placeholder="masukkan email" name="email" value={suratIzin.email || ""} handleChange={handleChange}></Input>
              <TextArea label="Alamat" placeholder="masukkan alamat" name="alamat" value={suratIzin.alamat || ""} handleChange={handleChange}></TextArea>
            </Accordion>
            <Accordion icon={faListUl} label="Nomor, Lampiran, Perihal">
              <Input label="Nomer surat" placeholder="masukkan nomer surat" name="nomer_surat" value={suratIzin.nomer_surat || ""} handleChange={handleChange}></Input>
              <Input label="Lampiran" placeholder="masukkan lampiran" name="lampiran" value={suratIzin.lampiran || ""} handleChange={handleChange}></Input>
              <Input label="Perihal" placeholder="masukkan perihal" name="perihal" value={suratIzin.perihal || ""} handleChange={handleChange}></Input>
            </Accordion>
            <Accordion icon={faCalendarDay} label="Informasi Acara">
              <div className="flex items-center gap-2">
                <TextArea label="Paragraf Pembuka" placeholder="masukkan Paragraf Pembuka" name="pembuka" value={suratIzin.pembuka || ""} handleChange={handleChange}></TextArea>
              </div>
              <Input label="Nama Acara" placeholder="masukkan Nama Acara" name="acara" value={suratIzin.acara || ""} handleChange={handleChange}></Input>
              <Input label="Tempat" placeholder="masukkan tempat" name="tempat" value={suratIzin.tempat || ""} handleChange={handleChange}></Input>
              <div className="my-2 grid grid-cols-2  w-full justify-around gap-2">
                <Input label="tanggal" type="date" placeholder="masukkan tanggal" name="tanggal" value={suratIzin.tanggal || ""} handleChange={handleChange}></Input>
                <Input label="waktu" type="time" placeholder="masukkan waktu" name="waktu" value={suratIzin.waktu || ""} handleChange={handleChange}></Input>
              </div>
              <TextArea label="Paragraf penutup" placeholder="masukkan Paragraf penutup" name="penutup" value={suratIzin.penutup || ""} handleChange={handleChange}></TextArea>
            </Accordion>
            <Accordion icon={faPenNib} label="Pengesahan">
              <Input label="Nama ketua" placeholder="masukkan Nama ketua" name="ketua" value={suratIzin.ketua || ""} handleChange={handleChange}></Input>
              <Input label="Sekertaris" placeholder="masukkan sekertaris" name="sekertaris" value={suratIzin.sekertaris || ""} handleChange={handleChange}></Input>
            </Accordion>
          </FormInput>
          <PreviewIzin surat={suratIzin} img={imgIzin} componenRef={componenRef} handleChange={handleChange} value={suratIzin}></PreviewIzin>
        </div>
        <button type="submit" className="btn bg-pallete fixed bottom-0 right-0 mr-7 mb-3 text-white">
          print
        </button>
      </form>
    </>
  );
}
