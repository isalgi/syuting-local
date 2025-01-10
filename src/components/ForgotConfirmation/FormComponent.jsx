import { Link } from "react-router-dom";

export default function FormComponent() {
  return (
    <div className="flex flex-col w-full max-w-xl bg-white px-12 py-24 rounded-3xl shadow-xl">
      <div className="text-4xl font-semibold text-neutral-700 mb-5">
        Forgot Password
      </div>
      <div className="text-neutral-700 leading-6 mb-4">
        A reset email have been sent to tyler@gmail.com. Please check your inbox
        and follow the reset instructions.
      </div>
      <div className="text-neutral-700 leading-6 mb-4 font-bold">
        Didn&apos;t receive the email?
      </div>
      <form className="w-full">
        <Link to={"/hostRegister"}>
          <button className="w-full bg-[#D9D9D9] text-white text-xl font-medium py-3 rounded-lg mb-2">
            Resend in 30s
          </button>
        </Link>
      </form>
      <div className="self-center mb- text-sm text-black text-opacity-50 my-4">
        <Link to={"/forgot-password"}>
          <button className="text-lg font-bold text-[#E8655B] border-b-[#E8655B] border-b-2">
            Change email
          </button>
        </Link>
      </div>
      <div className="text-neutral-700 leading-6 mb-8 mt-4">
        If the email is right and you still didn’t got the email, you can
        contact us at{" "}
        <span className="text-[#E8655B] font-medium">help@syuting.com</span>
      </div>
    </div>
  );
}
