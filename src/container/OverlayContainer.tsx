"use client";

import { OverlayProvider } from "overlay-kit";
import React, { ReactNode } from "react";

const OverlayContainer = ({ children }: { children: ReactNode }) => {
  return <OverlayProvider>{children}</OverlayProvider>;
};

export default OverlayContainer;
