import React from "react";
import styles from "./button.module.css";
import { Roboto } from "next/font/google";

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: "500",
});

type ButtonType = {
  isLoading?: boolean;
  onClick?: () => void;
  text: string;
  className?: string;
};

const Button: React.FC<ButtonType> = ({
  text,
  onClick,
  isLoading,
  className,
}) => {
  return (
    <button
      className={`${styles.btn} ${robotoFont.className} ${className}`}
      onClick={onClick}
    >
      {!isLoading ? <>{text}</> : <>loading...</>}
    </button>
  );
};

export default Button;
