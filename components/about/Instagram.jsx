export default function Instagram() {
  return (
    <>
      <div className='xs:mx-[8%] md:mx-[6%] flex justify-center lg:justify-start mb-[32px] lg:mb-[46px]'>
        <div className='flex flex-wrap xs:w-full md:w-[510px] lg:w-[399px]'>
          <div className='bg-[#A3D5BA] w-[calc(100%/5*3)] rounded-l-full flex items-center justify-center'>
            <p className='text-lg font-medium font-ibmBold'>Instagram</p>
          </div>
          <div className='bg-[#FFDD85] aspect-square h-auto w-[calc(100%/5)] rounded-[50%]'></div>
          <div className='bg-[#A3D5BA] aspect-square h-auto w-[calc(100%/5)] rounded-[50%]'></div>
        </div>
      </div>
    </>
  );
}
