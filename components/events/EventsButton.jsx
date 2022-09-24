export default function EventsButton({
  setIsActive,
  isActive,
  EventsButtonText,
}) {
  const handleClick = () => {
    // setIsActive(isActive + 5);
    // console.log(isActive);
    // let elementss = document.getElementsByClassName("isHidden");
    // for (let i = 0; i < isActive; i++) {
    //   elementss[i].classList.remove("isHidden");
    // }
  };

  return (
    <div className="eventsButtonWrapper h-fit">
      <button
        onClick={() => handleClick(true)}
        className="border-solid border border-[#111827] rounded-full cursor-pointer bg-[#f3f4f6] py-[12px] px-[22px]"
      >
        {EventsButtonText}
      </button>
    </div>
  );
}
