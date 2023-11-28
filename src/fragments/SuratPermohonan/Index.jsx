import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import Navbar from "../../layouts/Navbar";
import PreviewPermohonan from "./PreviewPermohonan";
import FormInput from "../../layouts/FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Preview from "../../layouts/Preview";
import InputForm from "./InputForm";

// import { useForm } from "react-hook-form";

export default function FormPermohonan() {


  const [suratPermohonan, setSurat] = useState("");
  function handleChange(e) {
    const { name, value } = e.target;
    setSurat((e) => ({ ...e, [name]: value }));
    Formik.setFieldValue(name, value);
  }

  //=========================== Proses Penyimpanan Local Storage =============================
  useEffect(() => {
    const dataSurat = JSON.parse(localStorage.getItem("suratPermohonan"));
    if (suratPermohonan === "") {
      // setSurat(defaultTemplate)
      setSurat((e) => ({ ...e, ...dataSurat }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("suratPermohonan", JSON.stringify(suratPermohonan));
  }, [suratPermohonan]);

  const ds = JSON.parse(localStorage.getItem("suratPermohonan"));
  //===========================================================================================
  const componenRef = useRef();
  const HandlePrint = useReactToPrint({
    content: () => componenRef.current,
    documentTitle: "emp-data",
    // onAfterPrint: ()=>alert('print oke')
  });
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const rule = {
    string: Yup.string().min(2, "Mininum 2 characters").max(128, "Maximum 128 characters").required("Bagian ini harus diisi"),
    img: Yup.string().required("Masukkan gambar"),
    number: Yup.number().required("Bagian ini harus diisi"),
    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    waktu: Yup.string()
      .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Format waktu tidak valid")
      .required("Waktu harus diisi"),
    tanggal: Yup.date().required("Tanggal harus diisi"),
  };


  const validasi = {
    panitia_pelaksana: rule.string,
    nama_organisasi: rule.string,
    logo_instansi: rule.img,
    email: rule.string,
    periode: rule.string,
    contact_person_1: rule.string,
    nomor_hp_cp_1: rule.phone,
    contact_person_2: rule.string,
    nomor_hp_cp_2: rule.phone,
    nomer_surat: rule.string,
    perihal: rule.string,
    kota: rule.string,
    kepada: rule.string,
    alamat_tujuan: rule.string,
    acara: rule.string,
    tanggalMulai: rule.tanggal,
    waktu: rule.waktu,
    tempat: rule.string,
    ketua_panitia: rule.string,
    nim_ketua_panitia: rule.number,
    sekertaris: rule.string,
    nim_sekretaris: rule.number,
    ketua_organisasi: rule.string,
    nim_ketua_organisasi: rule.number,
  };

  const initials = {
    nama_organisasi: "",
  };
  const cekDataFill = ds && ds.hasOwnProperty("nama_organisasi");

  const Formik = useFormik({
    initialValues: cekDataFill ? ds : {},
    validationSchema: Yup.object(validasi),
    onSubmit: (values) => {
      if (Formik.isValid) {
        HandlePrint();
      } else {
        alert("There are validation errors. Please check the form.");
      }
    },
  });

  const surat = suratPermohonan;
  return (
    <>
      <Navbar to="/option" page="Surat Permohonan"></Navbar>

      <form onSubmit={Formik.handleSubmit}>
        <div className="w-full min-h-screen grid md:grid-cols-11 grid-cols-1 pt-[4.1rem] ">
          <FormInput dataSurat={ds} type="Permohonan" setSurat={setSurat} surat={surat} formik={Formik} >
            <InputForm handleChange={handleChange} surat={surat} error={Formik.errors}></InputForm>
          </FormInput>
          <Preview componenRef={componenRef}>
            <PreviewPermohonan surat={surat} handleChange={handleChange}  />
          </Preview>
        </div>
        <button type="submit" className="btn bg-pallete fixed bottom-0 right-0 mr-7 mb-3 text-white">
          print
        </button>
      </form>
    </>
  );
}
