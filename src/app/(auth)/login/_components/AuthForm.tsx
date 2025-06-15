import { Input } from "@/components/common/input/Input";
import styles from "./authform.module.scss";
import classNames from "classnames";
import { useForm } from "react-hook-form";

const AuthForm = () => {
  const { control } = useForm();

  return (
    <div className={classNames(styles.container)}>
      <Input name="email" control={control} placeholder="이메일" />
      <Input name="password" control={control} placeholder="비밀번호" />
    </div>
  );
};

export default AuthForm;
