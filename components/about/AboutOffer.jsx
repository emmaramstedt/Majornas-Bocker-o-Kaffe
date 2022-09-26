export default function AboutOffer() {
  return (
    <>
      <div className="w-full flex xs:justify-center md:justify-end mb-[32px] lg:mb-[46px]">
        <div className="flex flex-wrap xs:w-full sm:w-[510px] lg:w-[399px]">
          <div className="bg-[#FFE7AA] aspect-square h-auto w-[calc(100%/5)] rounded-[50%]"></div>
          <div className="bg-[#66AB8A] aspect-square h-auto w-[calc(100%/5)] rounded-[50%]"></div>
          <div className="bg-[#A3D5BA] w-[calc(100%/5*3)] rounded-tr-lg flex items-center justify-center">
            <p>Välkommen in!</p>
          </div>
          <div className="bg-[#D9EAE1] aspect-square h-auto w-[calc(100%/5)]"></div>
          <div className="bg-[#A3D5BA] aspect-square h-auto w-[calc(100%/5)] rounded-[50%]"></div>
          <div className="bg-[#FFDD85] aspect-square h-auto w-[calc(100%/5)] rounded-[50%]"></div>
          <div className="bg-[#D9EAE1] aspect-square h-auto w-[calc(100%/5)] rounded-[50%]"></div>
          <div className="bg-[#A3D5BA] aspect-square h-auto w-[calc(100%/5)] rounded-[50%]"></div>
          <div className="bg-[#A3D5BA] w-full py-[calc(100%/8.8)] rounded-b-lg">
            <div className="w-full items-center justify-center text-center">
              <p className="text-lg font-ibmBold">Pocketbok + Kaffe = 100kr</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
