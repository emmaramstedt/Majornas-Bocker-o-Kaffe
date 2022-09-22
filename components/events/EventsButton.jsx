export default function EventsButton(props) {
  return (
    <div className="eventsButtonWrapper h-fit">
      <button className="border-solid border border-[#111827] rounded-full cursor-pointer bg-[#f3f4f6] py-[12px] px-[22px]">
        {props.EventsButtonText}
      </button>
    </div>
  );
}
