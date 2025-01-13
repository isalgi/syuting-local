import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */

export function JoinCard({
  title,
  description,
  buttonText,
  iconSrc,
  imageSrc,
  navigateTo, // Add this prop for the navigation path
}) {
  const navigate = useNavigate();

  return (
    <div className="flex overflow-hidden flex-wrap rounded-3xl max-md:max-w-full">
      <div className="flex flex-col justify-center self-start p-11 bg-white min-w-[240px] w-[460px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full min-h-[176px] text-neutral-700">
          <div className="flex gap-2 items-center w-full text-4xl font-bold leading-tight whitespace-nowrap">
            <div className="self-stretch my-auto">{title}</div>
            <img
              loading="lazy"
              src={iconSrc}
              alt={`${title} icon`}
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
            />
          </div>
          <div className="mt-8 text-base leading-6">{description}</div>
        </div>
        <div className="flex overflow-hidden flex-col mt-8 w-44 max-w-full text-base font-bold text-center text-white">
          <button
            className="flex gap-2 justify-center items-center p-3 w-full bg-red-400 rounded-lg"
            aria-label={buttonText}
            onClick={() => navigate(navigateTo)} // Navigate to the specified route
          >
            <div className="self-stretch my-auto w-[120px]">{buttonText}</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ccfc835e69b91ed7d7913769724a46747302b5915c45bcc76f4b757ddedc3ff?placeholderIfAbsent=true&apiKey=68b4d276ded248b584493f227eb1157b"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </button>
        </div>
      </div>
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${title.toLowerCase()} showcase`}
        className="object-contain aspect-[1.34] min-w-[240px] w-[460px] max-md:max-w-full"
      />
    </div>
  );
}
