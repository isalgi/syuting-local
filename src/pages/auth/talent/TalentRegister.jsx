import TalentRegisterSection from "../../../components/AuthSection/TalentRegisterSection";
import TalentRegisterForm from "../../../components/TalentRegister/FormInput";

export default function TalentRegister() {
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
        className="grid grid-cols-2 gap-10 w-full max-w-8xl max-md:grid-cols-1 mt-16"
        style={{
          transform: "scale(0.8)",
          transformOrigin: "top",
        }}
      >
        {/* Left Image Section */}
        <div className="flex items-center">
          <TalentRegisterSection />
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col">
          <TalentRegisterForm />
        </div>
      </div>
    </div>
  );
}
