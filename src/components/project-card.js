import { animated, useSpring } from "@react-spring/web";
import React, { Fragment } from "react";
import styled from "styled-components";
import { useOverlay } from "../OverlayContext";
import { FocusOn } from "react-focus-on";
import AppIcons from "./app-icons/AppIcons";
import { BackButton } from "./buttons";

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

const BackWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: transparent;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`;

const Card = styled(animated.div)`
  overflow-y: scroll;
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
  margin-bottom: 16px;
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

const ScreenShotWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 24px;
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

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProjectCard = () => {
  const { overlayContent, closeOverlay } = useOverlay();

  const { name, description, links, screenshots } = overlayContent || {};

  const overlayAnimation = useSpring({
    opacity: overlayContent ? 0.9 : 0,
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
          <TopRow>
            <BackWrapper onClick={closeOverlay}>
              <BackButton />
            </BackWrapper>
            <ProjectIconWrapper>{AppIcons[name]}</ProjectIconWrapper>
          </TopRow>

          <Header>{name}</Header>
          <SubTitle>{description}</SubTitle>
          {screenshots.map((screenshot) => {
            const width = screenshot?.imageType === "desktop" ? "40vw" : "20vw";
            return (
              <Fragment key={screenshot.src}>
                <ScreenShotTitle>{screenshot.title}</ScreenShotTitle>
                <ScreenShotWrapper>
                  <img
                    src={screenshot.src}
                    alt="screenshot"
                    style={{ width, borderRadius: 10 }}
                  />
                </ScreenShotWrapper>
              </Fragment>
            );
          })}
        </Card>
      </Overlay>
    </FocusOn>
  );
};

export default ProjectCard;
