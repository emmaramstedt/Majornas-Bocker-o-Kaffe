export default function EventsHeader(props) {
  return (
    <>
      <div className="eventsHeader font-spaceMono mb-[36px] pt-[40px]">
        <div className="max-w-[312px]">
          <h1 className="mb-[24px]">{props.EventHeaderTitle}</h1>
          <div>
            <p>{props.EventHeaderContent}</p>
          </div>
        </div>
      </div>
    </>
  );
}
