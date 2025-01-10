import RegisterSection from "../components/Utils/RegisterSection";
import HostRegisterForm from "../components/HostRegister/HostRegisterForm";

export default function HostRegisterPage() {
  return (
    <div
      className="flex h-screen"
      style={{
        backgroundImage: "url('/Bg-RegisterPage.png')",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div
        className="grid grid-cols-2 gap-10 w-full max-w-8xl  max-md:grid-cols-1 max-md:p-5"
        style={{
          transform: "scale(0.8)",
          transformOrigin: "top",
        }}
      >
        {/* Left Image Section */}
        <div className="flex items-center">
          <RegisterSection />
        </div>

        {/* Right Form Section */}
        <div className="flex items-center justify-center">
          <HostRegisterForm />
        </div>
      </div>
    </div>
  );
}
