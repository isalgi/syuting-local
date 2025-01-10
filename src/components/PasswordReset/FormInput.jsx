import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff, FiCheck } from "react-icons/fi";

const FormInput = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <div className="w-full max-w-[620px] bg-white px-12 py-16 rounded-3xl shadow-xl">
      <div className="text-4xl font-semibold text-neutral-700 mb-8">
        Reset Password
      </div>
      <div className="leading-6 mb-5 text-neutral-500">
        Enter your new password for{" "}
        <span className="text-[#E8655B] font-bold">tyler@gmail.com</span>{" "}
        <span className="text-neutral-500">below</span>.
      </div>
      <ul className=" text-sm mb-8 text-neutral-500">
        <li className="flex items-center gap-2">
          <FiCheck /> Minimum 8 characters long
        </li>
        <li className="flex items-center gap-2">
          <FiCheck /> Must include at least one uppercase letter
        </li>
        <li className="flex items-center gap-2">
          <FiCheck /> Must include at least one number
        </li>
        <li className="flex items-center gap-2">
          <FiCheck /> Must include at least one special character (!@#$%^&*)
        </li>
      </ul>
      <form className="flex flex-col justify-center self-stretch pb-10 my-auto min-w-[240px] w-[520px]">
        <div className="flex flex-col gap-5">
          <div>
            <label className="font-medium text-black" htmlFor="NewPassword">
              New Password
            </label>
            <div className="relative">
              <input
                id="newPassword"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="New Password"
                className="w-full px-3 py-2 mt-1 bg-white rounded-md border border-gray-300"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
              >
                {isPasswordVisible ? (
                  <FiEyeOff size={20} />
                ) : (
                  <FiEye size={20} />
                )}
              </button>
            </div>
          </div>
          <div>
            <label
              className="font-medium text-black"
              htmlFor="ConfirmNewPassword"
            >
              Confirm New Password
            </label>
            <div className="relative">
              <input
                id="confirmNewPassword"
                type={isConfirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm New Password"
                className="w-full px-3 py-2 mt-1 bg-white rounded-md border border-gray-300"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
              >
                {isConfirmPasswordVisible ? (
                  <FiEyeOff size={20} />
                ) : (
                  <FiEye size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8 w-full text-base">
          <Link to={"/forgot-password/confirmation"}>
            <button
              type="submit"
              className="p-3 w-full bg-red-400 rounded-lg text-xl font-bold text-white"
            >
              Change Password
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormInput;
