import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SelectRegister from "./pages/SelectRegister";

import Register1 from "./pages/auth/host/Register";
import HostRegister from "./pages/auth/host/HostRegister";
import HostRegisterVerify from "./pages/auth/host/HostRegisterVerify";
import HostRegisterVerifyOtp from "./pages/auth/host/HostRegisterVerifyOtp";

import Register2 from "./pages/auth/talent/Register";

import ForgotPassword from "./pages/auth/reset/ForgotPassword";
import ForgotConfirmation from "./pages/auth/reset/ForgotPasswordConfirmation";
import ResetPassword from "./pages/auth/reset/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SelectRegister />} />

        <Route path="/register/host" element={<Register1 />} />
        <Route path="/register/host/form" element={<HostRegister />} />
        <Route path="/register/host/verify" element={<HostRegisterVerify />} />
        <Route
          path="/register/host/verify/otp"
          element={<HostRegisterVerifyOtp />}
        />

        <Route path="/register/talent" element={<Register2 />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/forgot-password/confirmation"
          element={<ForgotConfirmation />}
        />
        <Route path="/forgot-password/reset" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
