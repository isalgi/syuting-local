import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";

const FormInput = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login",
        {
          email,
          password,
        },
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      );

      // Example: Handle successful login
      console.log("Login successful:", response.data);
      // Redirect or handle token (e.g., save to localStorage)
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard"); // Replace with your dashboard route
    } catch (error) {
      console.error("Login failed:", error.response.data);
      setErrorMessage(
        error.response.data.message || "Login failed. Try again."
      );
    }
  };

  return (
    <div className="w-full max-w-[620px] bg-white px-6 md:px-12 py-10 md:py-16 rounded-3xl shadow-xl mx-auto my-auto">
      <div className="text-3xl md:text-4xl font-semibold text-neutral-700 mb-5 text-center md:text-left">
        Login
      </div>
      {errorMessage && (
        <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
      )}
      <form
        className="flex flex-col justify-center self-stretch pb-10 mx-auto w-full max-w-[520px]"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col gap-5">
          <div>
            <label className="font-medium text-black" htmlFor="emailInput">
              Email
            </label>
            <input
              id="emailInput"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 mt-1 bg-white rounded-md border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="font-medium text-black" htmlFor="passwordInput">
              Password
            </label>
            <div className="relative">
              <input
                id="passwordInput"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-3 py-2 mt-1 bg-white rounded-md border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
        </div>
        <div className="flex flex-wrap gap-5 md:gap-10 justify-between items-start mt-5 text-sm text-black text-opacity-50">
          <label className="flex gap-2.5 items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-3 h-3 rounded-sm border border-solid border-gray-400"
            />
            <span>Remember me</span>
          </label>
          <Link to={"/forgot-password"}>
            <button
              type="button"
              className="text-black font-bold border-b-2 border-black"
            >
              Forget Password?
            </button>
          </Link>
        </div>
        <div className="flex flex-col mt-5 w-full text-base">
          <button
            type="submit"
            className="p-3 w-full bg-red-500 hover:bg-red-600 rounded-lg font-bold text-white"
          >
            Login
          </button>
          <button
            type="button"
            className="text-gray-400 font-bold flex flex-wrap gap-5 justify-center items-center p-3 mt-5 w-full bg-white hover:bg-slate-100 rounded-lg border border-gray-600 "
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba6591286fa2f5ecf3a710a96793b6f469aaaac47e9a132d82f4361a083726ce?placeholderIfAbsent=true&apiKey=0beeac6283a34947ad4e7ad15eeb25b2"
              alt="Google Logo"
              className="object-contain w-5 aspect-square"
            />
            Continue with Google account
          </button>
        </div>
        <div className="self-center mt-5 text-md text-black text-opacity-50 text-center md:text-left">
          <span>Don&apos;t have an account? </span>
          <Link to={"/register"}>
            <button className="font-bold text-[#E8655B] border-b-[#E8655B] border-b-2">
              Register Now
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormInput;
