export default function EventsButton(props) {
  return (
    <div>
      <button className="rounded border-solid bg-red-400 max-w-fit max-h-[45px] p-6 order-last">
        {props.EventsButtonText}
      </button>
    </div>
  );
}
