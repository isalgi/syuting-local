import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginSection from "../components/AuthSection/LoginSection";
import FormInput from "../components/Login/FormInput";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  return (
    <div
      className="flex h-screen"
      style={{
        backgroundImage: "url('/Bg-RegisterPage.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="grid grid-cols-2 gap-10 w-full max-w-8xl max-md:grid-cols-1"
        style={{
          transform: "scale(0.8)",
          transformOrigin: "center",
        }}
      >
        {/* Left Image Section */}
        <div className="flex items-center">
          <LoginSection />
        </div>

        {/* Right Form Section */}
        <div className="flex items-center justify-center pb-12">
          <FormInput />
        </div>
      </div>
    </div>
  );
}
