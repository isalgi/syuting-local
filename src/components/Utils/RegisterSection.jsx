export default function RegisterSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="relative w-full min-h-[626px] rounded-3xl overflow-hidden">
        {/* Background Image */}
        <img
          loading="lazy"
          src="/registerImg.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="flex relative flex-col w-full min-h-[626px] max-md:max-w-full">
          <img
            loading="lazy"
            src="/registerImg.png"
            alt="Overlay Background"
            className="object-cover absolute inset-0 w-full h-full"
          />
          <div className="flex overflow-hidden relative flex-col justify-center items-center px-20 py-40 rounded-3xl bg-slate-600 bg-opacity-40 max-md:px-5 max-md:py-24 max-md:max-w-full">
            <div className="flex flex-col justify-between p-10 mb-0 max-w-full rounded-3xl border-2 border-white border-solid min-h-[415px] w-[415px] max-md:px-5 max-md:mb-2.5">
              <div className="text-white text-3xl font-bold ">
                Talents, Spaces, Productions. Connected.
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f8ec020e5e5ae3cd6d365664b4bb8dec78188938edf15a4a384ee3c5e76b160?placeholderIfAbsent=true&apiKey=0beeac6283a34947ad4e7ad15eeb25b2"
                alt="Icon"
                className="object-contain self-end mt-24 max-w-full aspect-square w-[100px] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
