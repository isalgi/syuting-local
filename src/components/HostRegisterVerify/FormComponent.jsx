import { Link } from "react-router-dom";

export default function FormComponent() {
  return (
    <div className="flex flex-col w-full max-w-4xl bg-white px-28 py-16 rounded-3xl shadow-xl">
      <div className="text-3xl font-bold text-neutral-700 mb-5 justify-center text-center">
        Your account has been created
      </div>
      <div className="text-neutral-600 text-lg font-medium leading-6 mb-8 justify-evenly text-center sm:px-8 md:px-12 lg:px-32">
        Please check your email and confirm that its you. You will be directing
        into login page after confirm your account through your email.
      </div>
      <form className="w-full mx-auto flex justify-center">
        <Link to={"/host-register/verify/otp"}>
          <button className="w-full bg-red-500 text-white font-medium text-xl px-24 py-3 rounded-lg hover:bg-red-600">
            OK
          </button>
        </Link>
      </form>
    </div>
  );
}
