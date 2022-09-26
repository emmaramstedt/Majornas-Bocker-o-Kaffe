import moment from "moment";

const EventsCard = ({
  EventCategory,
  EventTitle,
  EventContent,
  EventDate,
  EventTime,
  EventLink,
  EventLinkText,
  Myref,
}) => {
  return (
    <>
      <div
        className={`card isHidden xs:max-w-[312px] md:w-[312px] h-[270px] border-solid border border-[#111827] rounded-t-lg mb-[32px] ${
          EventDate >= moment().format("YYYY-MM-DD") ? "" : "bg-[#f2f2f2]"
        }`}
        id={Myref}
      >
        <div
          className={
            EventDate >= moment().format("YYYY-MM-DD")
              ? EventCategory
              : "datePast"
          }
        >
          <div className="h-[63px] flex">
            <div className="w-[100%] eventDecoOne rounded-tl-lg flex justify-center items-center font-ibmBold">
              <div>{EventCategory}</div>
            </div>
            <div className="min-w-[63px] eventDecoTwo rounded-full"></div>
            <div className="min-w-[63px] eventDecoThree rounded-tr-lg"></div>
          </div>
          <div className="h-[168px] m-[18px] flex flex-col justify-between">
            <div>
              <h2 className="font-ibmBold">{EventTitle}</h2>
            </div>
            <div>{EventContent}</div>
            <div
              className={
                EventDate >= moment().format("YYYY-MM-DD")
                  ? EventCategory
                  : "line-through"
              }
            >
              {EventDate} - {EventTime}
            </div>
            <div>
              <a
                className="text-[18px] underline text-[#4562F8] font-ibmRegular"
                href={EventLink}
                target="_blank"
                rel="noreferrer"
              >
                {EventLinkText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventsCard;
