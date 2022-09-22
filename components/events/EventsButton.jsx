export default function EventsButton(props) {
  return (
    <div className="eventsButtonWrapper h-fit">
      <button className="rounded border-solid bg-red-400 max-w-fit max-h-[45px] p-6">
        {props.EventsButtonText}
      </button>
    </div>
  );
}
