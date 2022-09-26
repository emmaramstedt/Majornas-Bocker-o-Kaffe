export default function EventsHeader(props) {
  return (
    <>
      <div className="eventsHeader font-spaceMono mb-[36px] max-w-[312px pt-[40px]">
        <h1>{props.EventHeaderTitle}</h1>
        <div>
          <p>{props.EventHeaderContent}</p>
        </div>
      </div>
    </>
  );
}
