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
    <div className="eventsButtonWrapper h-fit font-ibmRegular">
      <button
        onClick={() => handleClick(true)}
        className="border-solid border border-[#111827] rounded-full cursor-pointer bg-[#F9FAFB] py-[12px] px-[22px]"
      >
        {EventsButtonText}
      </button>
    </div>
  );
}
