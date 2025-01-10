import { Link } from "react-router-dom";

export default function FormComponent() {
  return (
    <div className="flex flex-col w-full max-w-xl bg-white px-12 py-24 rounded-3xl shadow-xl">
      <div className="text-4xl font-semibold text-neutral-700 mb-5">
        Host Register
      </div>
      <div className="text-neutral-700 leading-6 mb-8">
        Start your journey as owner of any location and rent it here. Become a
        great host and be known by our partner.
      </div>
      <form className="w-full">
        <Link to={"/hostRegister"}>
          <button className="w-full bg-red-400 text-white font-medium py-3 rounded-lg mb-5 hover:bg-red-500">
            Register now
          </button>
        </Link>
      </form>
      <button className="flex items-center justify-center w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-100">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f549195a9524d02e2c756b44bd87aacca0c4b5d3e509c28d2c52fe76acccb6fd?placeholderIfAbsent=true&apiKey=0beeac6283a34947ad4e7ad15eeb25b2"
          alt="Google logo"
          className="w-5 h-5 mr-3"
        />
        Signup with Google Account
      </button>
      <div className="text-sm text-center mt-5">
        Already have an account?{" "}
        <Link to={"/login"} href="#" className="text-red-400 font-bold">
          Login
        </Link>
      </div>
    </div>
  );
}
