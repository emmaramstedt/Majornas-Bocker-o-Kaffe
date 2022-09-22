const EventsCard = (props) => {
  return (
    <>
      <div className="max-w-[313px] border-solid border border-[#111827] rounded-t-lg mb-[32px]">
        <div className={props.EventCategory}>
          <div className="h-[63px] flex">
            <div className="w-[100%] eventDecoOne rounded-tl-lg flex justify-center items-center">
              <div>{props.EventCategory}</div>
            </div>
            <div className="min-w-[63px] eventDecoTwo rounded-full"></div>
            <div className="min-w-[63px] eventDecoThree rounded-tr-lg"></div>
          </div>
          <div className="min-h-[210px] m-[18px]">
            <div>
              <h2 className="font-ibmBold">{props.EventTitle}</h2>
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
      </div>
    </>
  );
};
export default EventsCard;
