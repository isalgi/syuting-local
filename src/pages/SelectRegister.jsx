import { Link } from "react-router-dom";

export default function SelectRegister() {
  return (
    <div className="flex flex-col w-full max-w-xl bg-white px-12 py-24 rounded-3xl shadow-xl gap-64">
      <Link to={"/register/host"}>Go to Host</Link>
      <Link to={"/register/talent"}>Go to Talent</Link>
    </div>
  );
}
