import styled from "styled-components";
import defaultImg from "../images/LocationMain.jpg";

const StyledMain = styled.header`
  /* This renders the buttons above... Edit me! */
  min-height: 80vh;
  background: url(${props => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledMain;
