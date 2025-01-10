import HostRegisterVerify from "../components/HostRegisterVerify/FormComponent";

export default function HostRegisterVerifyPage() {
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
        className=" gap-10 w-full max-w-8xl  max-md:grid-cols-1"
        style={{
          transform: "scale(0.8)",
          transformOrigin: "center",
        }}
      >
        {/* Center Section */}
        <div className="flex items-center justify-center">
          <HostRegisterVerify />
        </div>
      </div>
    </div>
  );
}
