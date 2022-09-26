import { animateScroll as scroll } from "react-scroll";
export default function EventsButton({
  setIsActive,
  isActive,
  EventsButtonText,
}) {
  const handleClick = () => {
    setIsActive(isActive + 5);
    scroll.scrollMore(1);
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
