import React, { ReactNode } from "react";
import styles from "./Dimer.module.scss";
const Dimer = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  const onClickDimer = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div className={styles.container} onClick={onClickDimer}>
      {children}
    </div>
  );
};

export default Dimer;
