import LoginSection from "../../../components/utils/LoginSection";
import FormComponentTalent from "../../../components/Register/FormComponentTalent";

export default function Register() {
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
        // Scale down so user doesn't need to scroll
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
        <div className="flex items-center justify-center">
          <FormComponentTalent />
        </div>
      </div>
    </div>
  );
}
