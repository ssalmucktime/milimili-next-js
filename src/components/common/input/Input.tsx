import classNames from "classnames";
import styles from "./Input.module.scss";
import {
  useController,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";

type InputProps = {
  placeholder?: string;
  className?: classNames.ArgumentArray;
};

export const Input = <T extends FieldValues>({
  name,
  control,
  placeholder,
  className,
}: InputProps & UseControllerProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({ name, control });

  return (
    <input
      className={classNames(styles.input, className)}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
