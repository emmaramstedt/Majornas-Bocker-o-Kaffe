export default function EventsCard(props) {
  return (
    <>
      <div className="wrapper max-w-[313px] border-solid border border-[#111827] rounded-t-lg">
        <div className="categorywrapper h-[63px] flex">
          <div className="w-[100%] bg-[#FFB7BB] rounded-tl-lg flex justify-center items-center">
            <div>{props.EventCategory}</div>
          </div>
          <div className="min-w-[63px] bg-[#FF8087] rounded-full"></div>
          <div className="min-w-[63px] bg-[#FF8087] rounded-tr-lg"></div>
        </div>
        <div className="min-h-[210px] m-[18px]">
          <div>
            <h2 className="font-[bold]">{props.EventTitle}</h2>
          </div>
          <div>{props.EventContent}</div>
          <div>
            {props.EventDate} {props.EventTime}
          </div>
          <div>
            <a href={props.EventLink}>{props.EventLinkText}</a>
          </div>
        </div>
      </div>
    </>
  );
}
