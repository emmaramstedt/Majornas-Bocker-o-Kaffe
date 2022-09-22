export default function EventsWrapper(props) {
  return (
    <>
      <div className="eventsWrapper grid">{props.children}</div>
    </>
  );
}
