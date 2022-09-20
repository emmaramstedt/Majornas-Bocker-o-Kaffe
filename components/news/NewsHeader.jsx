export default function NewsHeader(props) {
  return (
    <>
      <div className="font-spaceMono">
        <h1>{props.Header}</h1>
        <div>
          <p>{props.Content}</p>
        </div>
        <button type="button">{props.Button}</button>
      </div>
    </>
  );
}
