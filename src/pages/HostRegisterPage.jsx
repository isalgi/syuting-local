import RegisterSection from "../components/utils/RegisterSection";
import HostRegisterForm from "../components/HostRegister/FormInput";

export default function HostRegisterPage() {
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
        className="grid grid-cols-2 gap-10 w-full max-w-8xl max-md:grid-cols-1 mt-12"
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
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-black mb-8 ml-12">
            Register as Host
          </h1>
          <div
            className="items-center justify-center max-h-screen overflow-y-auto w-full"
            style={{
              scrollbarWidth: "thin", // Applies for modern browsers
            }}
          >
            <HostRegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
