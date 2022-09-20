export default function NewsCard(props) {
  return (
    <>
      <div className="wrapper max-w-[313px] border-solid border border-[#111827] rounded-t-lg">
        <div className="categorywrapper h-[63px] flex">
          <div className="w-[100%] bg-[#FFB7BB] rounded-tl-lg flex justify-center items-center">
            <div>{props.NewsCategory}</div>
          </div>
          <div className="min-w-[63px] bg-[#FF8087] rounded-full"></div>
          <div className="min-w-[63px] bg-[#FF8087] rounded-tr-lg"></div>
        </div>
        <div className="min-h-[210px] m-[18px]">
          <div>
            <h2 className="font-[bold]">{props.NewsTitle}</h2>
          </div>
          <div>{props.NewsContent}</div>
        </div>
      </div>
    </>
  );
}
