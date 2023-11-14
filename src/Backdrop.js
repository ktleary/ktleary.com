import React from "react";
import styled from "styled-components";
import { useOverlay } from "./OverlayContext";
import { animated, useSpring } from "@react-spring/web";

const Overlay = styled(animated.div)`
  /* ... existing styles ... */
  display: flex;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  border-radius: 0;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
`;

export const Backdrop = () => {
  const { overlayContent, closeOverlay } = useOverlay();

  const backdropAnimation = useSpring({
    opacity: overlayContent ? 1 : 0,
    visibility: overlayContent ? "visible" : "hidden",
  });

  if (!overlayContent) return null;

  return <Overlay style={backdropAnimation} onClick={closeOverlay} />;
};
