import styles from "./page.module.scss";
import Button from "@/components/common/button/Button";
import { Span } from "@/components/common/text/Text";
import Image from "next/image";
import AuthForm from "./_components/AuthForm";
const Login = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Span className={["text-[1.375rem] font-bold"]}>환영합니다!</Span>
        <AuthForm />
        <Span className={["text-[0.875rem] font-normal"]}>
          비밀 번호를 잃어버리셨나요?
        </Span>
        <Span className={["text-[0.875rem] font-normal"]}>Or sign in with</Span>
        <div>
          <Button>
            <Image
              src={"/auth_google.svg"}
              alt="GoogleAuthSVG"
              width={24}
              height={24}
            />
            <Span>구글 계정으로 로그인</Span>
          </Button>
        </div>
      </section>
    </main>
  );
};
export default Login;
