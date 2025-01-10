/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export const FormInput = ({ label, type, placeholder }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const isPasswordField = type === "password";

  return (
    <div className="flex gap-10 items-start w-full leading-none max-md:max-w-full">
      <div className="flex overflow-hidden flex-col flex-1 shrink justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <label
          className="font-medium text-black max-md:max-w-full"
          htmlFor={`${type}Input`}
        >
          {label}
        </label>
        <div className="relative">
          <input
            type={isPasswordField && isPasswordVisible ? "text" : type}
            id={`${type}Input`}
            placeholder={placeholder}
            className="flex-1 shrink gap-1 self-stretch px-3 py-2 mt-1 w-full bg-white rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 max-md:max-w-full"
            aria-label={label}
          />
          {isPasswordField && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
            >
              {isPasswordVisible ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
