import styled from "styled-components";

export default function EventsCardsWrapper({ children, isActive }) {
  const Wrapper = styled.div`
    margin-top: 40px;
    grid-area: 2 / 1 / 2 / 1;
    .card:nth-of-type(-n + ${isActive}) {
      display: block;
    }
    @media (min-width: 774px) {
      grid-area: 1 / 2 / 5 / 2;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    @media (min-width: 1120px) {
      grid-area: 1 / 2 / 4 / 3;
      max-width: 656px;
      justify-self: right;
      justify-content: space-between;
    }
  `;

  return <Wrapper>{children}</Wrapper>;
}
