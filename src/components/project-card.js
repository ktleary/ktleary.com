import { animated, useSpring } from "@react-spring/web";
import React from "react";
import styled from "styled-components";
import { useOverlay } from "../OverlayContext";

const Overlay = styled(animated.div)`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: orange;
  justify-content: center;
  align-items: center;
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

const ProjectCard = ({ projectData, isOpen, onClose }) => {
  console.log("isopen", isOpen);

  const { overlayContent, closeOverlay } = useOverlay();

  const overlayAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    // other animation properties
  });

  const cardAnimation = useSpring({
    transform: isOpen ? `translateY(0)` : `translateY(-100%)`,
    // other animation properties
  });
  if (!overlayContent) return null;

  return (
    <>
      <Overlay onClick={onClose}>
        <Card>
          <h1>the card goes here</h1>
          <button onClick={closeOverlay}>Close</button>
        </Card>
      </Overlay>
    </>
  );
};

export default ProjectCard;
