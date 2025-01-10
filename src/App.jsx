import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HostRegisterPage from "./pages/HostRegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/HostRegister" element={<HostRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
