import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SelectRegisterPage from "./pages/SelectRegisterPage";
import RegisterPage from "./pages/RegisterPage";
import HostRegisterPage from "./pages/HostRegisterPage";
import HostRegisterVerifyPage from "./pages/HostRegisterVerifyPage";
import HostRegisterVerifyOtpPage from "./pages/HostRegisterVerifyOtpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ForgotConfirmationPage from "./pages/ForgotConfirmationPage";
import PasswordResetPage from "./pages/PasswordResetPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<SelectRegisterPage />} />
        <Route path="/register/host" element={<RegisterPage />} />
        <Route path="/register/host/form" element={<HostRegisterPage />} />
        <Route
          path="/register/host/verify"
          element={<HostRegisterVerifyPage />}
        />
        <Route
          path="/register/host/verify/otp"
          element={<HostRegisterVerifyOtpPage />}
        />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="/forgot-password/confirmation"
          element={<ForgotConfirmationPage />}
        />
        <Route path="/forgot-password/reset" element={<PasswordResetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
