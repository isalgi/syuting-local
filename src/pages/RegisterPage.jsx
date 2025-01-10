import RegisterSection from "../components/Utils/RegisterSection";
import FormComponent from "../components/Register/FormComponent";

export default function RegisterPage() {
  return (
    <div
      className="flex flex-col items-center justify-center  bg-cover bg-center overflow-y-hidden"
      style={{
        backgroundImage: "url('/Bg-RegisterPage.png')",
      }}
    >
      <div className="grid grid-cols-2 gap-10 w-full max-w-8xl p-4 max-md:grid-cols-1 max-md:p-5">
        {/* Left Image Section */}
        <div className="flex items-center">
          <RegisterSection />
        </div>

        {/* Right Form Section */}
        <div className="flex items-center justify-center">
          <FormComponent />
        </div>
      </div>
    </div>
  );
}
