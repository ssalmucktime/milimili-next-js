import React from "react";
import styles from "./Signin.module.scss";
import Dimer from "@/components/modal/dimer/Dimer";
import Button from "@/components/common/button/Button";
import { Span } from "@/components/common/text/Text";
import { Input } from "@/components/common/input/Input";
import { useForm } from "react-hook-form";
import AuthGoogleSVG from "../../_img/icon_auth_google.svg";
import AuthKakaoSVG from "../../_img/icon_auth_kakao.svg";
const Signin = ({
  overlayId: _overlayId,
  isOpen: _isOpen,
  close: _close,
  unmount,
}: {
  overlayId: string;
  isOpen: boolean;
  close: () => void;
  unmount: () => void;
}) => {
  const buttonClassName = ["w-full", "h-[3rem]"];

  const { control } = useForm();

  return (
    <Dimer onClick={unmount}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={"px-[1rem] "}>
          <Span className={["text-[1.375rem] font-[700]"]}>환영합니디.</Span>
        </div>
        <div
          className="w-full flex flex-col gap-[0.5rem]"
          onClick={(e) => e.stopPropagation()}
        >
          <Input
            className={["w-full"]}
            name={"id"}
            control={control}
            placeholder="Email"
          />
          <Input
            className={["w-full"]}
            name={"pwd"}
            control={control}
            placeholder="Passowrd"
          />
        </div>
        <Span className={["font-[400]", "text-[0.875rem]"]} color="color-gold">
          비밀번호를 잊으셨나요?
        </Span>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            unmount();
          }}
          className={buttonClassName}
        >
          <Span>로그인</Span>
        </Button>
        <Span className={["font-[400]", "text-[0.875rem]"]} color="color-gold">
          Or sign in with
        </Span>
        <div className="w-full flex flex-col gap-[0.5rem]">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              unmount();
            }}
            bgcolor="bgcolor-beige-300"
            className={buttonClassName}
          >
            <AuthGoogleSVG />
            <Span>Continue with Google</Span>
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              unmount();
            }}
            bgcolor="bgcolor-beige-300"
            className={buttonClassName}
          >
            <AuthKakaoSVG />
            <Span>Continue with Kakao</Span>
          </Button>
        </div>
      </div>
    </Dimer>
  );
};

export default Signin;
