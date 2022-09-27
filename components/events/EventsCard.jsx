import moment from "moment";

const EventsCard = ({
  EventCategory,
  EventTitle,
  EventContent,
  EventDate,
  EventTime,
  EventLink,
  EventLinkText,
}) => {
  return (
    <>
      <div
        className={`card isHidden xs:max-w-[312px] md:w-[312px] h-[300px] border-solid border border-[#111827] rounded-t-lg mb-[32px] ${
          EventDate >= moment().format("YYYY-MM-DD") ? "" : "bg-[#f2f2f2]"
        }`}
      >
        <div
          className={`h-full ${
            EventDate >= moment().format("YYYY-MM-DD")
              ? EventCategory
              : "datePast"
          }
        `}
        >
          <div className="h-[63px] flex">
            <div className="w-[100%] eventDecoOne rounded-tl-lg flex justify-center items-center font-ibmBold">
              <div>{EventCategory}</div>
            </div>
            <div className="min-w-[63px] eventDecoTwo rounded-full"></div>
            <div className="min-w-[63px] eventDecoThree rounded-tr-lg"></div>
          </div>
          <div className="h-[198px] m-[18px] flex flex-col justify-between">
            <div>
              <h2 className="font-ibmBold">{EventTitle}</h2>
              <p>{EventContent}</p>
            </div>
            <div className="self-baseline">
              <div
                className={`self-baseline ${
                  EventDate >= moment().format("YYYY-MM-DD")
                    ? EventCategory
                    : "line-through"
                }`}
              >
                {EventDate} - {EventTime}
              </div>
              <div className="min-h-[2rem]">
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
      </div>
    </>
  );
};
export default EventsCard;
