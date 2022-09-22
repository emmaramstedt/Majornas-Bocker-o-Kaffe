const EventsCard = (props) => {
  return (
    <>
      <div className="xs:max-w-[312px] md:w-[312px] h-[270px] border-solid border border-[#111827] rounded-t-lg mb-[32px]">
        <div className={props.EventCategory}>
          <div className="h-[63px] flex">
            <div className="w-[100%] eventDecoOne rounded-tl-lg flex justify-center items-center font-ibmRegular">
              <div>{props.EventCategory}</div>
            </div>
            <div className="min-w-[63px] eventDecoTwo rounded-full"></div>
            <div className="min-w-[63px] eventDecoThree rounded-tr-lg"></div>
          </div>
          <div className="h-[168px] m-[18px] flex flex-col justify-between">
            <div>
              <h2 className="font-ibmBold">{props.EventTitle}</h2>
            </div>
            <div>{props.EventContent}</div>
            <div>
              {props.EventDate} - {props.EventTime}
            </div>
            <div>
              <a
                className="text-[18px] underline text-[#4562F8] font-ibmRegular"
                href={props.EventLink}
                target="_blank"
                rel="noreferrer"
              >
                {props.EventLinkText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventsCard;
