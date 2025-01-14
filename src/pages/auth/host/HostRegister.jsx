import HostRegisterSection from "../../../components/AuthSection/HostRegisterSection";
import HostRegisterForm from "../../../components/HostRegister/FormInput";

export default function HostRegister() {
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
        className="grid grid-cols-2 gap-10 w-full max-w-8xl max-md:grid-cols-1 mt-24"
        style={{
          transform: "scale(0.8)",
          transformOrigin: "top",
        }}
      >
        {/* Left Image Section */}
        <div className="flex items-center">
          <HostRegisterSection />
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-black mt-4 mb-4 ml-12">
            Host Registration
          </h1>
          <div
            className="items-center justify-center max-h-[42rem] overflow-y-auto w-full"
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
