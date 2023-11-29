import React from "react";
import { useLocation } from "react-router-dom";
import FormUndangan from "../fragments/SuratUndangan/Index";
import FormPermohonan from "../fragments/SuratPermohonan/Index";
import FormIzin from "../fragments/SuratIzin/Index";

export default function FormPage() {
  //=========================== Mendapatkan Props dari option =============================
  // const getProps = useLocation();
  // const JenisSurat = getProps.state.cek;
  // //=======================================================================================
  // return <>{JenisSurat == "undangan" ? <FormUndangan /> : JenisSurat == "permohonan" ? <FormPermohonan /> : <FormIzin />}</>;
}
