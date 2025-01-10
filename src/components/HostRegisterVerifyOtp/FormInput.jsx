const FormInput = () => {
  return (
    <div className="w-full max-w-[720px] bg-white px-20 py-20 rounded-3xl shadow-xl">
      <div className="text-4xl font-semibold text-neutral-700 mb-5">
        OTP Confirmation
      </div>
      <div className="text-neutral-500 leading-6 mb-5">
        OTP Code have been sent to{" "}
        <span className="text-[#E8655B]">0877******00</span>. Please check your
        inbox and input the code below.
      </div>
      <form className="flex flex-col justify-center self-stretch pb-10 my-auto min-w-[240px] w-[520px]">
        <div className="flex flex-col gap-5">
          <div>
            <label className="font-medium text-black" htmlFor="otpInput">
              OTP Code
            </label>
            <input
              id="otpInput"
              type="text"
              placeholder="Enter OTP code"
              className="w-full px-3 py-2 mt-1 bg-white rounded-md border border-gray-300"
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 w-full text-base">
          <button
            type="submit"
            className="p-3 w-full bg-red-500 hover:bg-red-600 rounded-lg text-xl mb-5 font-bold text-white"
          >
            Verify OTP
          </button>
        </div>
        <div className="text-neutral-700 leading-6 mb-3 mt-2 font-medium">
          Didn’t receive the code?
        </div>
        <button
          disabled
          className="w-full bg-[#D9D9D9] text-white text-xl font-medium py-3 rounded-lg mb-2"
        >
          Resend in 30s
        </button>
      </form>
    </div>
  );
};

export default FormInput;
