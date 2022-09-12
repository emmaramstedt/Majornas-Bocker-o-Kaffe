export default function Footer(props) {
  const { openingHours, contact, images } = props;
  return (
    <>
      <footer>
        <div>
          <div>{openingHours}</div>
          <div>{contact}</div>
        </div>
        <div>{images}</div>
      </footer>
    </>
  );
}
