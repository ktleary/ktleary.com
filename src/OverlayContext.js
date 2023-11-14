import React, { createContext, useState, useContext } from "react";

const OverlayContext = createContext();

export const useOverlay = () => useContext(OverlayContext);

export const OverlayProvider = ({ children }) => {
  const [overlayContent, setOverlayContent] = useState(null);

  const openOverlay = (content) => {
    setOverlayContent(content);
  };

  const closeOverlay = () => {
    setOverlayContent(null);
  };

  return (
    <OverlayContext.Provider
      value={{ overlayContent, openOverlay, closeOverlay }}
    >
      {children}
    </OverlayContext.Provider>
  );
};
