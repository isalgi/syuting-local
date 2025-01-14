import HostRegisterSection from "../../../components/AuthSection/HostRegisterSection";
import FormInput from "../../../components/HostRegisterVerifyOtp/FormInput";

export default function HostRegisterVerifyOtp() {
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
        className="grid grid-cols-2 gap-10 w-full max-w-8xl max-md:grid-cols-1 max-md:p-5"
        style={{
          transform: "scale(0.8)",
          transformOrigin: "center",
        }}
      >
        {/* Left Image Section */}
        <div className="flex items-center">
          <HostRegisterSection />
        </div>

        {/* Right Form Section */}
        <div className="flex items-center justify-center">
          <FormInput />
        </div>
      </div>
    </div>
  );
}
