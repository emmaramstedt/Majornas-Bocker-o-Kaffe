import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmitForm(data) {
    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(data),
    });
    window.alert("Ditt medelande har skickats");
    reset();
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center xs:w-[312px] xs:h-[433px] md:w-[397px] md:h-[445px] xl:w-[400px] xl:h-[445px] border-[1px] border-black rounded-[16px] bg-white'>
        <form
          action="/"
          method="post"
          onSubmit={handleSubmit(onSubmitForm)}
          className="grid grid-cols-1 xs:gap-y-6 xs:pl-[16px] md:pl-[32px]"
        >
          <div className='xs:text-[18px]'>
            <label htmlFor='name'>Namn</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Oprah Winfrey"
              className={`xs:w-[280px] md:w-[333px] xl:w-[337px] xs:h-[40px] mt-[4px] border-[1px] border-black rounded-[32px] xs:text-[12px] pl-[10px] placeholder-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 ${
                errors.name ? "ring-2 ring-red-500" : null
              }`}
              {...register("name", {
                required: {
                  value: true,
                  message: "Du måste ange ditt namn",
                },
              })}
            />
            <span className="text-red-400 text-sm pl-[15px]">
              {errors?.name?.message}
            </span>
          </div>
          <div className='xs:text-[18px]'>
            <label htmlFor='email'>Mailadress</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Oprahwinfrey@yahoo.com"
              required
              className={`xs:w-[280px] md:w-[333px] xl:w-[337px] xs:h-[40px] mt-[4px] border-[1px] border-black rounded-[32px] xs:text-[12px] pl-[10px] placeholder-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 ${
                errors.email ? "ring-2 ring-red-500" : null
              }`}
              {...register("email", {
                required: {
                  value: true,
                  message: "Du måste ange din e-postadress",
                },
                minLength: {
                  value: 8,
                  message: "Den är för kort",
                },
                maxLength: {
                  value: 120,
                  message: "Det är för långt",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Ange en valid e-postadress",
                },
              })}
            />
            <span className="text-red-400 text-sm mt-[4px] pl-[15px]">
              {errors?.email?.message}
            </span>
          </div>
          <div className='xs:text-[18px]'>
            <label htmlFor='message'>Meddelande</label>
            <textarea
              id="message"
              name="message"
              placeholder="Hej, Jag letar efter en bok..."
              className={`xs:w-[280px] md:w-[333px] xl:w-[337px] xs:h-[93px] mt-[4px] border-[1px] border-black rounded-[16px] xs:text-[12px] resize-none pt-[12px] pl-[10px] placeholder-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 ${
                errors.message ? "ring-2 ring-red-500" : null
              }`}
              rows="4"
              {...register("message", {
                required: {
                  value: true,
                  message: "Du måste skriva in ett meddelande",
                },
                maxLength: {
                  value: 1000,
                  message: "Det kan inte innehålla mer än 1000 tecken",
                },
                minLength: {
                  value: 20,
                  message: "Det måste innehålla mer än 20 tecken!",
                },
              })}
            />
            <span className="text-red-400 text-sm mt-[4px] pl-[15px] ">
              {errors?.message?.message}
            </span>
          </div>
          <div>
            <button className='xs:w-[280px] md:w-[333px] xl:w-[337px] xs:h-[48px] border-[1px] border-black rounded-[32px] xs:text-[18px] bg-customNewBlue'>
              Skicka mail
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
