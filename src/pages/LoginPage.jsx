import LoginSection from "../components/utils/LoginSection";
import FormInput from "../components/Login/FormInput";

export default function LoginPage() {
  return (
    <div
      className="flex h-screen "
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
