import React from "react";
import styles from "./Header.module.scss";
import Button from "@/components/common/button/Button";
import { Span } from "@/components/common/text/Text";
import { overlay } from "overlay-kit";
import Signin from "../signin/Signin";
const Header = () => {
  const openLoginModal = () => {
    overlay.open((props) => <Signin {...props} />);
  };

  return (
    <article className={styles.article}>
      Header
      <div className={styles.rightGourp}>
        <Button className="" bgcolor={"bgcolor-beige-400"}>
          <Span className={["font-[700]", "text-sm"]}>회원가입</Span>
        </Button>
        <Button bgcolor={"bgcolor-beige-300"} onClick={openLoginModal}>
          <Span className={["font-[700]", "text-sm"]}>로그인</Span>
        </Button>
      </div>
    </article>
  );
};

export default Header;
