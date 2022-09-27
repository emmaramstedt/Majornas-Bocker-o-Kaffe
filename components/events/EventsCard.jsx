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
        className={`card isHidden xs:max-w-[312px] md:w-[312px] h-[350px] border-solid border rounded-t-lg mb-[32px] overflow-hidden ${
          EventDate >= moment().format("YYYY-MM-DD")
            ? "bg-white border-[#111827]"
            : "bg-[#f2f2f2] border-[#B6B6B6]"
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
            <div className="w-[100%] eventDecoOne flex justify-center items-center font-ibmRegular">
              <div className="text-[18px]">{EventCategory}</div>
            </div>
            <div className="min-w-[63px] eventDecoTwo rounded-full"></div>
            <div className="min-w-[63px] eventDecoThree"></div>
          </div>
          <div className="h-[248px] m-[18px] flex flex-col justify-between">
            <div>
              <h2 className="font-ibmBold text-[18px] mb-2¢¢¢">{EventTitle}</h2>
              <p className="font-ibmRegular text-[16px]">{EventContent}</p>
            </div>
            <div className="self-baseline">
              <a
                className="text-[18px] underline text-[#4562F8] font-ibmRegular"
                href={EventLink}
                target="_blank"
                rel="noreferrer"
              >
                {EventLinkText}
              </a>
              <div
                className={`font-ibmBold text-[16px] min-h-[2rem] ${
                  EventDate >= moment().format("YYYY-MM-DD")
                    ? EventCategory
                    : "line-through"
                }`}
              >
                {EventDate} - {EventTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventsCard;
