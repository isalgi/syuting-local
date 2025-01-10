import RegisterSection from "../components/Utils/RegisterSection";
import HostRegisterForm from "../components/HostRegister/HostRegisterForm";

export default function HostRegisterPage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/Bg-RegisterPage.png')",
      }}
    >
      <div className="grid grid-cols-2 gap-10 w-full max-w-9xl p-10 max-md:grid-cols-1 max-md:p-5">
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
