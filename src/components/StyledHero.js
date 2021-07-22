// Importing Helpers
import styled from "styled-components";

// Importing Components/Media
import defaultImg from "../images/room-1.jpeg";

// Styled Component
const StyledHero = styled.header`
  min-height: 60vh;
  /* background: url(${defaultImg}); */
  background: url(${(props) => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Default Export
export default StyledHero;
