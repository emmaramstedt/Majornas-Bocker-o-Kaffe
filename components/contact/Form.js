export default function Form() {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    // console.log(formData);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center xs:w-[312px] xs:h-[433px] md:w-[397px] md:h-[445px] xl:w-[400px] xl:h-[445px] border-[1px] border-black rounded-[16px] bg-white">
        <form
          onSubmit={handleOnSubmit}
          className="grid grid-cols-1 xs:gap-y-6 xs:pl-[16px] md:pl-[32px]"
        >
          <div className="xs:text-[18px]">
            <label htmlFor="name">Namn</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder=" Oprah Winfrey"
              required
              className="xs:w-[280px] md:w-[333px] xl:w-[337px] xs:h-[40px] mt-[4px] border-[1px] border-black rounded-[32px] xs:text-[12px]"
            />
          </div>
          <div className="xs:text-[18px]">
            <label htmlFor="email">Mailadress</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder=" Oprahwinfrey@yahoo.com"
              required
              className="xs:w-[280px] md:w-[333px] xl:w-[337px] xs:h-[40px] mt-[4px] border-[1px] border-black rounded-[32px] xs:text-[12px]"
            />
          </div>
          <div className="xs:text-[18px]">
            <label htmlFor="message">Meddelande</label>
            <textarea
              id="message"
              name="message"
              placeholder=" Hej, Jag letar efter en bok..."
              required
              className="xs:w-[280px] md:w-[333px] xl:w-[337px] xs:h-[93px] mt-[4px] border-[1px] border-black rounded-[16px] xs:text-[12px]"
            />
          </div>
          <div>
            <button className="xs:w-[280px] md:w-[333px] xl:w-[337px] xs:h-[48px] border-[1px] border-black rounded-[32px] xs:text-[18px] bg-customNewBlue">
              Skicka mail
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
