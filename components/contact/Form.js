import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const [isError, setIsError] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function onSubmitForm(data) {
    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(data),
    });
    setIsError(false);
    await timeout(3000);
    setIsError(true);
    reset();
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center leading-[32px] text-center xs:w-[312px] xs:h-[433px] md:w-[397px] md:h-[445px] xl:w-[400px] xl:h-[445px] border-[1px] border-black rounded-[16px] bg-white">
        <form
          action="/"
          method="post"
          onSubmit={handleSubmit(onSubmitForm)}
          className="flex flex-col justify-center items-center text-center"
        >
          <p
            className={`text-green-400 text-[16px] mb-[8px] ${
              isError === false ? "block" : "hidden"
            }`}
          >
            Ditt medelande har skickats!
          </p>
          <div className="xs:text-[18px]">
            <label
              htmlFor="name"
              className={`text-left mb-[8px] ${
                errors.name || isError === false ? "hidden" : "block"
              }`}
            >
              Namn
            </label>
            <p className="text-red-400 text-[12px] mb-[4px]">
              {errors?.name?.message}
            </p>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Simone de Beauvoir"
              className={`xs:w-[280px] md:w-[333px] xl:w-[337px] xs:h-[40px] mb-[16px] border-[1px] border-black rounded-[32px] xs:text-[12px] pl-[10px] placeholder-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 ${
                errors.name ? "ring-2 ring-red-500" : null
              }`}
              {...register("name", {
                required: {
                  value: true,
                  message: "Var god skriv in ditt namn",
                },
              })}
            />
          </div>
          <div className="xs:text-[18px]">
            <label
              htmlFor="email"
              className={`text-left mb-[8px] ${
                errors.email ? "hidden" : "block"
              }`}
            >
              Mailadress
            </label>
            <p className="text-red-400 text-[12px] mb-[4px]">
              {errors?.email?.message}
            </p>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="simone@debeauvoir.com"
              className={`xs:w-[280px] md:w-[333px] xl:w-[337px] xs:h-[40px] mb-[16px] border-[1px] border-black rounded-[32px] xs:text-[12px] pl-[10px] placeholder-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 ${
                errors.email ? "ring-2 ring-red-500" : null
              }`}
              {...register("email", {
                required: {
                  value: true,
                  message: "Du m??ste ange din e-mail",
                },
                minLength: {
                  value: 8,
                  message: "Adressen ??r f??r kort",
                },
                maxLength: {
                  value: 120,
                  message: "Adressen ??r f??r l??ng",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Ange en giltig e-mail",
                },
              })}
            />
          </div>
          <div className="xs:text-[18px] max-h-[130px] ">
            <label
              htmlFor="message"
              className={`text-left mb-[8px] ${
                errors.message ? "hidden" : "block"
              }`}
            >
              Meddelande
            </label>
            <p className="text-red-400 text-[12px] mb-[4px]">
              {errors?.message?.message}
            </p>
            <textarea
              id="message"
              name="message"
              placeholder="Hej, jag letar efter en bok..."
              className={`xs:w-[280px] md:w-[333px] xl:w-[337px] xs:h-[93px] border-[1px] border-black rounded-[16px] xs:text-[12px] resize-none pt-[5px] pl-[10px] placeholder-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 ${
                errors.message ? "ring-2 ring-red-500" : null
              }`}
              rows="4"
              {...register("message", {
                required: {
                  value: true,
                  message: "Du m??ste skriva in ett meddelande",
                },
                maxLength: {
                  value: 1000,
                  message: "Meddelandet kan inte inneh??lla mer ??n 1000 tecken",
                },
                minLength: {
                  value: 20,
                  message: "Meddelandet m??ste inneh??lla mer ??n 20 tecken",
                },
              })}
            />
          </div>
          <div className="mt-[22px]">
            <button className="xs:w-[280px] md:w-[333px] xl:w-[337px] xs:h-[48px] border-[1px] border-black rounded-[32px] xs:text-[18px] bg-customNewBlue">
              Skicka mail
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
