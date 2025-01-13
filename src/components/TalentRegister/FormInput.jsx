import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const formFields = [
  { id: "name", label: "Name", type: "text", placeholder: "Enter your name" },
  {
    id: "idNumber",
    label: "ID Number (NIK)",
    type: "text",
    placeholder: "Enter your ID Number (NIK)",
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter your phone number",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Password",
    placeholder: "Enter your password",
    id: "password",
    type: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "Re-enter your password",
    id: "confirmPassword",
    type: "password",
  },
];

const TalentRegisterForm = () => {
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
    <div className="w-full max-w-3xl px-12 py-4">
      <form className="flex flex-col gap-4 bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-black my-4 ">
          Talent Registration
        </h1>
        {formFields.map((field) => {
          if (field.type === "password") {
            const isPassword = field.id === "password";
            const isVisible = isPassword
              ? isPasswordVisible
              : isConfirmPasswordVisible;
            const toggleVisibility = isPassword
              ? togglePasswordVisibility
              : toggleConfirmPasswordVisibility;

            return (
              <div key={field.id} className="flex flex-col">
                <label
                  htmlFor={field.id}
                  className="font-medium text-black mb-2"
                >
                  {field.label}
                </label>
                <div className="relative">
                  <input
                    id={field.id}
                    type={isVisible ? "text" : "password"}
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 mt-1 bg-white rounded-md border border-gray-300"
                  />
                  <button
                    type="button"
                    onClick={toggleVisibility}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                  >
                    {isVisible ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
              </div>
            );
          }

          return (
            <div key={field.id} className="flex flex-col">
              <label htmlFor={field.id} className="font-medium text-black mb-2">
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full px-3 py-2 mt-1 bg-white rounded-md border border-gray-300"
              />
            </div>
          );
        })}

        <Link to={"/register/talent/verify"}>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 mt-6"
          >
            Register Now
          </button>
        </Link>
        <div className="text-sm text-center">
          Already have an account?{" "}
          <Link to={"/"} href="#" className="text-red-400 font-bold">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default TalentRegisterForm;
