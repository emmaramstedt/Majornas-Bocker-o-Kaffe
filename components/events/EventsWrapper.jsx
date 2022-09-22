export default function EventsWrapper(props) {
  return (
    <>
      <div className="flex flex-col">{props.children}</div>
    </>
  );
}
