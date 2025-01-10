import ReusableSection from "../components/Utils/ReusableSection";
import FormComponent from "../components/Register/FormComponent";

export default function RegisterPage() {
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
          <ReusableSection />
        </div>

        {/* Right Form Section */}
        <div className="flex items-center justify-center">
          <FormComponent />
        </div>
      </div>
    </div>
  );
}
