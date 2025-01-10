import { Link } from "react-router-dom";

const FormInput = () => {
  return (
    <div className="w-full max-w-[620px] bg-white px-12 py-16 rounded-3xl shadow-xl">
      <div className="text-4xl font-semibold text-neutral-700 mb-5">
        Forgot Password
      </div>
      <div className="text-neutral-700 leading-6 mb-8">
        Please enter your registered email and we will send you a reset
        instructions.
      </div>
      <form className="flex flex-col justify-center self-stretch pb-10 my-auto min-w-[240px] w-[520px]">
        <div className="flex flex-col gap-5">
          <div>
            <label className="font-medium text-black" htmlFor="emailInput">
              Email
            </label>
            <input
              id="emailInput"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 mt-1 bg-white rounded-md border border-gray-300"
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 w-full text-base">
          <Link to={"/forgot-password/confirmation"}>
            <button
              type="submit"
              className="p-3 w-full bg-red-400 rounded-lg text-xl font-bold text-white"
            >
              Reset Password
            </button>
          </Link>
        </div>
        <div className="self-center mt-5 text-sm text-black text-opacity-50">
          <Link to={"/login"}>
            <button className="text-lg font-bold text-[#E8655B] border-b-[#E8655B] border-b-2">
              Back to login page
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormInput;
