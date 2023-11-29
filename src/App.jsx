import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import OptionPage from "./pages/option"
import LandingPage from "./pages"
import FormPage from "./pages/form"
import FormUndangan from './fragments/SuratUndangan/Index'
import FormPermohonan from "./fragments/SuratPermohonan/Index";
import FormIzin from "./fragments/SuratIzin/Index";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/option" element={<OptionPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/formUndangan" element={<FormUndangan />} />
        <Route path="/formPermohonan" element={<FormPermohonan />} />
        <Route path="/formIzin" element={<FormIzin />} />

      </Routes>
    </Router>
  );
}

export default App
