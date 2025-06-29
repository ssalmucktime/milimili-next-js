"use client";

import { ReactNode } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";
import { Color, BgColor } from "@/asset/theme";

const Button = ({
  children,
  color = "",
  bgcolor = "bgcolor-beige-100",
  className,
  onClick,
}: {
  children?: ReactNode;
  color?: Color;
  bgcolor?: BgColor;
  className?: classNames.ArgumentArray;

  onClick?: (evnet: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, color, bgcolor, className)}
    >
      {children}
    </button>
  );
};
export default Button;
