import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import OptionPage from "./pages/option"
import LandingPage from "./pages"
import FormPage from "./pages/form"
import Chatbot from "./layouts/chatbot"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/option" element={<OptionPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/cek" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App
