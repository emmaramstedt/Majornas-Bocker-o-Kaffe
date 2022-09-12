export default function Footer(props) {
  return (
    <>
      <footer>
        <div>
          <div>{props.openingHours}</div>
          <div>{props.contact}</div>
        </div>
        <div>{props.images}</div>
      </footer>
    </>
  );
}
