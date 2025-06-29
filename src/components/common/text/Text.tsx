import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./text.module.scss";
import { Color } from "@/asset/theme"; // ThemeColor import 경로 변경

export const Span = ({
  children,
  className,
  color = "",
}: {
  children?: ReactNode;
  className?: classNames.ArgumentArray;
  color?: Color; // color props 타입을 ThemeColor로 변경
}) => {
  return (
    <span className={classNames(styles.span, className, color)}>
      {children}
    </span>
  );
};
