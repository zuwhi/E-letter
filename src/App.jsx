import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import OptionPage from "./pages/option"
import LandingPage from "./pages"
import FormPage from "./pages/form"


function App() {

  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/option" element={<OptionPage />} />
        <Route path="/form" element={<FormPage />} />

      </Routes>
    </Router>
  );
}

export default App
