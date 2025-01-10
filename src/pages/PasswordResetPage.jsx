import LoginSection from "../components/Utils/LoginSection";
import FormInput from "../components/PasswordReset/FormInput";

export default function PasswordResetPage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/Bg-RegisterPage.png')",
      }}
    >
      <div className="grid grid-cols-2 gap-10 w-full max-w-9xl p-4 max-md:grid-cols-1 max-md:p-5">
        {/* Left Image Section */}
        <div className="flex items-center">
          <LoginSection />
        </div>

        {/* Right Form Section */}
        <div className="flex items-center justify-center">
          <FormInput />
        </div>
      </div>
    </div>
  );
}
