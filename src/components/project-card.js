import { animated, useSpring } from "@react-spring/web";
import React from "react";
import styled from "styled-components";
import { useOverlay } from "../OverlayContext";
import { FocusOn } from "react-focus-on";

const Overlay = styled(animated.div)`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 10;
  margin-top: 10vh;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Card = styled(animated.div)`
  /* Card styles */
  overflow-y: scroll;
  padding-top: 10vh;
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
    <FocusOn onEscapeKey={closeOverlay} onClickOutside={closeOverlay}>
      <Overlay style={overlayAnimation}>
        <Card style={cardAnimation}>
          <button onClick={closeOverlay}>Close</button>
          <h1>the card goes here</h1>
          <div
            style={{
              height: "fit-content",
              overflowY: "auto",
              marginLeft: "10vh",
              marginRight: "10vh",
              paddingBottom: "10vh",
              color: "black",
            }}
          >
            scrollable content crollable content scrollable content crollable
            content scrollable content crollable content scrollable content
            crollable content scrollable content crollable content scrollable
            content crollable content scrollable content crollable content
            scrollable content crollable content scrollable content crollable
            content scrollable content crollable content scrollable content
            crollable content scrollable content crollable content scrollable
            content crollable content scrollable content crollable content
            scrollable content crollable content scrollable content crollable
            content scrollable content crollable content scrollable content
            crollable content scrollable content crollable content scrollable
            content crollable content scrollable content crollable content
            scrollable content crollable content scrollable content crollable
            content scrollable content crollable content scrollable content
            crollable content scrollable content crollable content scrollable
            content crollable content scrollable content crollable content
            scrollable content crollable content scrollable content crollable
            content scrollable content crollable content scrollable content
            crollable content scrollable content crollable content scrollable
            content crollable content scrollable content crollable content
            scrollable content crollable content scrollable content crollable
            content scrollable content crollable content scrollable content
            crollable content scrollable content crollable content scrollable
            content crollable content scrollable content crollable content
            scrollable content crollable content scrollable content crollable
            content scrollable content crollable content scrollable content
            crollable content scrollable content crollable content scrollable
            content crollable content scrollable content crollable content
            scrollable content crollable content scrollable content crollable
            content scrollable content crollable content scrollable content
            crollable content scrollable content crollable content scrollable
            content crollable content scrollable content crollable content
            scrollable content crollable content scrollable content crollable
            content scrollable content crollable content scrollable content
            crollable content scrollable content crollable content scrollable
            content crollable content scrollable content crollable content
            scrollable content crollable content scrollable content crollable
            content scrollable content crollable content scrollable content
            crollable content scrollable content crollable content scrollable
            content crollable content scrollable content crollable content
            scrollable content crollable content scrollable content crollable
            content scrollable content crollable content scrollable content
            crollable content scrollable content crollable content scrollable
            content crollable content scrollable content crollable content
            scrollable content crollable content scrollable content crollable
            content scrollable content crollable content scrollable content
            crollable content scrollable content crollable content scrollable
            content crollable content scrollable content crollable content
            scrollable content crollable content content crollable content
            scrollable content crollable content scrollable content crollable
            content content crollable content scrollable content crollable
            content scrollable content crollable content content crollable
            content scrollable content crollable content scrollable content
            crollable content content crollable content scrollable content
            crollable content scrollable content crollable content content
            crollable content scrollable content crollable content scrollable
            content crollable content content crollable content scrollable
            content crollable content scrollable content crollable content
            content crollable content scrollable content crollable content
            scrollable content crollable content content crollable content
            scrollable content crollable content scrollable content crollable
            content content crollable content scrollable content crollable
            content scrollable content crollable content content crollable
            content scrollable content crollable content scrollable content
            crollable content content crollable content scrollable content
            crollable content scrollable content crollable content content
            crollable content scrollable content crollable content scrollable
            content crollable content content crollable content scrollable
            content crollable content scrollable content crollable content
            content crollable content scrollable content crollable content
            scrollable content crollable content content crollable content
            scrollable content crollable content scrollable content crollable
            content content crollable content scrollable content crollable
            content scrollable content crollable content content crollable
            content scrollable content crollable content scrollable content
            crollable content content crollable content scrollable content
            crollable content scrollable content crollable content content
            crollable content scrollable content crollable content scrollable
            content crollable content content crollable content scrollable
            content crollable content scrollable content crollable content
            content crollable content scrollable content crollable content
            scrollable content crollable content content crollable content
            scrollable content crollable content scrollable content crollable
            content content crollable content scrollable content crollable
            content scrollable content crollable content content crollable
            content scrollable content crollable content scrollable content
            crollable content content crollable content scrollable content
            crollable content scrollable content crollable content content
            crollable content scrollable content crollable content scrollable
            content crollable content content crollable content scrollable
            content crollable content scrollable content crollable content
            content crollable content scrollable content crollable content
            scrollable content crollable content content crollable content
            scrollable content crollable content scrollable content crollable
            content content crollable content scrollable content crollable
            content scrollable content crollable content content crollable
            content scrollable content crollable content scrollable content
            crollable content content crollable content scrollable content
            crollable content scrollable content crollable content content
            crollable content scrollable content crollable content scrollable
            content crollable content content crollable content scrollable
            content crollable content scrollable content crollable content
            content crollable content scrollable content crollable content
            scrollable content crollable content content crollable content
            scrollable content crollable content scrollable content crollable
            content content crollable content scrollable content crollable
            content scrollable content crollable content content crollable
            content scrollable content crollable content scrollable content
            crollable content content crollable content scrollable content
            crollable content scrollable content crollable content content
            crollable content scrollable content crollable content scrollable
            content crollable content content crollable content scrollable
            content crollable content scrollable content crollable content
            content crollable content scrollable content crollable content
            scrollable content crollable content content crollable content
            scrollable content crollable content scrollable content crollable
            content content crollable content scrollable content crollable
            content scrollable content crollable content content crollable
            content scrollable content crollable content scrollable content
            crollable content content crollable content scrollable content
            crollable content scrollable content crollable content content
            crollable content scrollable content crollable content scrollable
            content crollable content content crollable content scrollable
            content crollable content scrollable content crollable content
            content crollable content scrollable content crollable content
            scrollable content crollable content content crollable content
            scrollable content crollable content scrollable content crollable
            content content crollable content scrollable content crollable
            content scrollable content crollable content
          </div>
        </Card>
      </Overlay>
    </FocusOn>
  );
};

export default ProjectCard;
