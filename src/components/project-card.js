import { animated, useSpring } from "@react-spring/web";
import React, { Fragment } from "react";
import styled from "styled-components";
import { useOverlay } from "../OverlayContext";
import { FocusOn } from "react-focus-on";
import AppIcons from "./app-icons/AppIcons";

const Overlay = styled(animated.div)`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #212121;
  z-index: 10;
  margin-top: 10vh;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 24px;
`;

const Card = styled(animated.div)`
  /* Card styles */
  overflow-y: scroll;
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

const Header = styled.h1`
  color: rgba(255, 255, 255, 0.87);
  padding: 0;
  margin: 0;
  text-align: center;
  padding-top: 8px;
  letter-spacing: -0.45px;
  font-size: 32px;
  font-weight: 700;
  font-family: -apple-system, "OpenSans", "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans,
    sans-serif;
`;

const SubTitle = styled.h2`
  color: rgba(255, 255, 255, 0.87);
  padding: 0;
  margin: 0;
  text-align: center;
  padding-top: 8px;
  letter-spacing: -0.45px;
  font-size: 24px;
  font-weight: 700;
  font-family: -apple-system, "OpenSans", "Segoe UI", "Roboto", "Oxygen";
`;

const ProjectIconWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

// cardWhite: #FFFEFC; lightBackground: #F6F0E9
// darkBackground: #212121; cardBlack: #1C1C1C
// darkText: #221F1D; charcoal: #928C88
// cream: '#F6EFE8';
// taupe: '#E0D7CF';
// smoke: '#C9BFB6';
// link: '#44B5EE';

const ScreenShotWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ScreenShotTitle = styled.h3`
  color: rgba(255, 255, 255, 0.87);
  padding: 0;
  margin: 0;
  text-align: center;
  padding-top: 8px;
  letter-spacing: -0.45px;
  font-size: 20px;
  font-weight: 500;
  font-family: -apple-system, "OpenSans", "Segoe UI", "Roboto", "Oxygen";
`;

const ProjectCard = () => {
  const { overlayContent, closeOverlay } = useOverlay();

  const { name, description, links, screenshots } = overlayContent || {};

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
          <ProjectIconWrapper>{AppIcons[name]}</ProjectIconWrapper>

          <Header>{name}</Header>
          <SubTitle>{description}</SubTitle>
          {screenshots.map((screenshot) => (
            <Fragment key={screenshot.src}>
              <ScreenShotTitle>{screenshot.title}</ScreenShotTitle>
              <ScreenShotWrapper>
                <img
                  src={screenshot.src}
                  alt="screenshot"
                  style={{ width: 200, borderRadius: 10 }}
                />
              </ScreenShotWrapper>
            </Fragment>
          ))}

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
            content goes here
          </div>
        </Card>
      </Overlay>
    </FocusOn>
  );
};

export default ProjectCard;
