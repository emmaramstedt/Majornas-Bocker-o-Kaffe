export default function EventsHeader(props) {
  return (
    <>
      <div className="font-spaceMono">
        <h1>{props.EventHeaderTitle}</h1>
        <div>
          <p>{props.EventHeaderContent}</p>
        </div>
        <button type="button">{props.EventHeaderButton}</button>
      </div>
    </>
  );
}
