import React, { ReactNode } from "react";

import styles from "./Alert.module.scss";
import Dimer from "../dimer/Dimer";

const Alert = ({ children }: { children: ReactNode }) => {
  return (
    <Dimer>
      <div className={styles.container}>{children}</div>
    </Dimer>
  );
};

export default Alert;
