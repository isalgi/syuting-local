import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HostRegisterPage from "./pages/HostRegisterPage";
import HostRegisterVerifyPage from "./pages/HostRegisterVerifyPage";
import HostRegisterVerifyOtpPage from "./pages/HostRegisterVerifyOtpPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ForgotConfirmationPage from "./pages/ForgotConfirmationPage";
import PasswordResetPage from "./pages/PasswordResetPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/host-register" element={<HostRegisterPage />} />
        <Route
          path="/host-register/verify"
          element={<HostRegisterVerifyPage />}
        />
        <Route
          path="/host-register/verify/otp"
          element={<HostRegisterVerifyOtpPage />}
        />
        <Route path="/login" element={<LoginPage />} />
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
