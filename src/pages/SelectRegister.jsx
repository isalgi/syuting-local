import { JoinCard } from "../components/SelectRegister/JoinCard";
import { joinOptions } from "../components/SelectRegister/joinOptions";

export default function SelectRegister() {
  return (
    <div
      className="flex overflow-hidden flex-col"
      style={{
        backgroundImage: "url('/Bg-RegisterPage.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center py-10 w-full max-md:max-w-full">
        <div className="flex flex-col items-center max-md:max-w-full">
          {joinOptions.map((option, index) => (
            <div key={option.title} className={index > 0 ? "mt-10" : ""}>
              <JoinCard {...option} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
