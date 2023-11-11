import { animated, useSpring } from "@react-spring/web";
import React from "react";
import styled from "styled-components";
import { useOverlay } from "../OverlayContext";

const Overlay = styled(animated.div)`
  display: flex;
  height: 90vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: orange;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

const Card = styled(animated.div)`
  /* Card styles */
`;

const ProjectCardStyled = styled.div`
  position: fixed; /* or absolute */
  top: 0;
  left: 0;
  width: 100%; /* Adjust as needed */
  height: 100%; /* Adjust as needed */
  z-index: 10;
  /* Additional styling */
`;

const ProjectCard = () => {
  const { overlayContent, closeOverlay } = useOverlay();

  const overlayAnimation = useSpring({
    opacity: overlayContent ? 1 : 0,
    // other animation properties
  });

  const cardAnimation = useSpring({
    transform: overlayContent ? `translateY(0)` : `translateY(-100%)`,
    // other animation properties
  });
  if (!overlayContent) return null;

  return (
    <>
      <Overlay style={overlayAnimation}>
        <Card style={cardAnimation}>
          <h1>the card goes here</h1>
          <button onClick={closeOverlay}>Close</button>
        </Card>
      </Overlay>
    </>
  );
};

export default ProjectCard;
