import { useState } from "react";
import React from "react";
import FormInput from "../layouts/FormInput";
import { useEffect } from "react";
import Navbar from "../layouts/Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import PreviewUndangan from "../fragments/SuratUndangan/PreviewUndangan";
import Preview from "../layouts/Preview";
import FormUndangan from "../fragments/SuratUndangan/FormInput";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function FormPage() {
  //=========================== Mendapatkan Props dari option =============================
  const getProps = useLocation();
  const JenisSurat = getProps.state.cek;
  //=======================================================================================

  const [surat, setSurat] = useState("");
  const [img, setImg] = useState("");
  function handleChange(e) {
    const { name, value } = e.target;
    setSurat((e) => ({ ...e, [name]: value }));
  }

  //=========================== Proses Penyimpanan Local Storage =============================
  useEffect(() => {
    const dataSurat = JSON.parse(localStorage.getItem("surat"));
    if (surat === "") {
      setSurat((e) => ({ ...e, ...dataSurat }));
    }
  }, []);
  useEffect(() => {
    const dataImage = JSON.parse(localStorage.getItem("image"));
    if (dataImage) {
      setImg(dataImage);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("surat", JSON.stringify(surat));
  }, [surat]);
  useEffect(() => {
    localStorage.setItem("image", JSON.stringify(img));
  }, [img]);

  //===========================================================================================

  function reset() {
    const defaultKop = {
      pembuka: "Sehubungan dengan adanya Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, deserunt? Alias maiores architecto.",
      penutup: "Demikian Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, deserunt? Alias maiores architecto.",
    };
    setSurat(defaultKop);
    setImg("");
    localStorage.removeItem("surat");
    localStorage.removeItem("image");
  }

  const componenRef = useRef();
  const HandlePrint = useReactToPrint({
    content: () => componenRef.current,
    documentTitle: "emp-data",
    // onAfterPrint: ()=>alert('print oke')
  });

  return (
    <>
      <Navbar to="/option"></Navbar>
      <div className="w-full min-h-screen grid md:grid-cols-2 grid-cols-1 pt-[4.1rem] ">
        <div className="col-span-1 h-full md:px-10 px-3 w-full  bg-slate-100 flex flex-col">
          <div className="w-full flex my-4">
            <div className="flex-1 flex items-center">
              <h1 className="text-xl font-bold">Lengkapi Formulir</h1>
            </div>
            <div className="flex-1 flex justify-end gap-2 items-center">
              <button
                className="bg-info rounded-lg px-3 py-2 h-11 bg-pallete text-white font-semibold"
                onClick={() => {
                  reset();
                }}
              >
                Reset
              </button>
            </div>
          </div>
          {JenisSurat == "undangan" ? <FormUndangan handleChange={handleChange} surat={surat} setImg={setImg} img={img}></FormUndangan> : "njirr"}
        </div>
        <div className="col-span-1 w-full ">
          <div className="konten md:fixed md:w-[50%] w-full p-10 pb-28 bg-gray-400 h-full overflow-y-auto overflow-x-hidden">
            <div className=" bg-slate-300 h-fit shadow-2xl flex items-center justify-center  overflow-y-hidden">
              <div className="bg-white w-full h-[150vh] px-10 py-5 text-black font-times" ref={componenRef}>
                {JenisSurat == "undangan" ? <PreviewUndangan surat={surat} img={img}></PreviewUndangan> : ""}
              </div>
            </div>
          </div>
          <button className="btn bg-pallete fixed bottom-0 right-0 mr-7 mb-3 text-white" onClick={HandlePrint}>
            print
          </button>
        </div>
      </div>
    </>
  );
}
