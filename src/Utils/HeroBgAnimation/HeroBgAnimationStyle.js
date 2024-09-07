// HeroBgAnimationStyle.js
import styled from "styled-components";

export const Div = styled.div`
  width: 700px;
  height: 600px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;

  /* Media query for smaller screens */
  @media (max-width: 760px) {
    width: 530px; /* Adjust width for mobile view */
    height: 600px; /* Adjust height for mobile view */
    top: -10px; /* Adjust top position for mobile */
    left: 45px; /* Adjust left position for mobile */
  }
`;
